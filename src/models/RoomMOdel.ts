import mongoose, { Schema } from "mongoose";
import { RoomModel, Urgency } from "../types";
import { ObjectId } from "mongodb";
import { ref } from "process";

const RoomtModel = new Schema(
    {
      isAvaliable: {type:Boolean, default: true},
      currentPatientId: {type:ObjectId, ref: "parient"}
    }
)

export const Room = mongoose.model<RoomModel>("room", RoomtModel);