import { Types } from "mongoose";
import { AdmitResponse, IPatient, PatientReq } from "../types";
import { Patient } from "../models/PatientModel";

export class PatientRepo {
    async create(req:PatientReq):Promise<IPatient> {
        try{
            const patient =  Patient.create(req);
            return (await patient).save();

        }catch(error){
            throw error;
        }
        
    }
    async get(id:Types.ObjectId):Promise<IPatient |null> {
        try{
            return await Patient.findById(id).exec()
        }catch(error){
            throw error
        }

    }
}