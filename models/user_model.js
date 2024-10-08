import { model, Schema } from "mongoose";


 const userModel = new Schema({
    firstName : {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    
},{
    timestamps: true
});

export const UserModel = model("User", userModel);

