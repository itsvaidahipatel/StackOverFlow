import mongoose from "mongoose"
import User from '../models/auth.js'
export const getAllUsers = async(req,res)=>{
    try {
        const allUsers = await User.find()
        const allUsersDetails = []
        allUsers.forEach(user => {
            allUsersDetails.push({_id: user._id, name: user.name, tags: user.tags, joinedOn: user.joinedOn})
        });
        res.status(200).json(allUsersDetails)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 