import { Types } from "mongoose";
import { Room } from "../models/RoomMOdel";
import { RoomModel } from "../types";

export class RoomRepo{
    async create(){}

    async get():Promise<RoomModel | null>{
        try{
            return await Room.findOne({isAvaliable:true}).exec()
        }catch(error){
            throw error
        }
    }

    async update(roomId: string, data:Partial<RoomModel>):Promise<boolean>{
        try{
             await Room.findOneAndUpdate({_id:roomId}, data).exec()
             return true;
        }catch(error){
            throw error
        }

    }
}
