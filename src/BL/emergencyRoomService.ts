import { PatientRepo } from "../repositories/patientRepo";
import { RoomRepo } from "../repositories/roomRepo";
import { AdmitResponse, IPatient, PatientReq, Urgency } from "../types";

export class EmergencyRoomService{

    private static  priorityQueue: IPatient[] = []; 

    private roomRepo:RoomRepo;
    private patientRepo: PatientRepo
    constructor(){
        this.roomRepo = new RoomRepo();
        this.patientRepo = new PatientRepo();
    }
    async AdmitPatient (patientData: PatientReq):Promise<AdmitResponse | IPatient>{
        if(!patientData.urgeency ){
            patientData.urgeency = Math.max(...patientData.symptoms); 
        }
        try{
            const patient:IPatient = await this.patientRepo.create(patientData);
            this.addToPriorityQueue(patient);
            if(patient.urgeency === Urgency.CRITICAL){
                 this.alertStaff(patient);
            }
            const room = await this.roomRepo.get();
            if(room){
                await this.roomRepo.update(room._id,{isAvailable:false, currentPatientId:patient._id})
            }
            //TODO : return proper AdmitResponse depending on room availability
            return patient;
        }catch(error){
            throw error;
        }
            
    }

    private addToPriorityQueue(patient:IPatient):void{
        EmergencyRoomService.priorityQueue.push(patient);
        EmergencyRoomService.priorityQueue.sort((a,b) => b.urgeency - a.urgeency);
    }

    private async alertStaff(patient: IPatient): Promise<void> {
        //TODO : Implement alerting mechanism
    }
}