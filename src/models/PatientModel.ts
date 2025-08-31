import mongoose, { Schema } from "mongoose";
import { IPatient, Urgency } from "../types";
import { ObjectId } from "mongodb";

const PatientModel = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        symptoms: { type: [Number], required: true },
        arrivalTime: { type: Date, default: Date.now },
        urgeency: { type: Urgency, required: true },
        roomId: {type:ObjectId, ref: "room"}
    }
)

export const Patient = mongoose.model<IPatient>("patient", PatientModel);