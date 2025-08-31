import { Types } from "mongoose"

export enum Urgency {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    CRITICAL = 4

}
export interface PatientReq {
    name: string,
    age: number,
    symptoms: number[],
    arrivalTime: Date
    urgeency?: Urgency

}
export interface IPatient {
    _id:Types.ObjectId,
    name: string,
    age: number,
    symptoms: string[],
    arrivalTime: Date
    urgeency: Urgency

}
export interface RoomModel {
_id: string,
isAvailable: boolean,
roomNumber: number,
currentPatientId: Types.ObjectId | null
}

export interface AdmitResponse {
    
}