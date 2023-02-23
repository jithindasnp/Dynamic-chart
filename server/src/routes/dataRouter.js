const express=require('express')
const chartData = require('../models/dataTable')
const dataRouter=express.Router()


dataRouter.post('/add',async(req,res)=>{
    const{student,mark,attendence}=req.body
    try {
        const add=await chartData.create({student,mark,attendence})
        if (!add) {
            return res.status(400).json({message:"Something went wrong!"})
        } else {
            return res.status(200).json({message:"Data added successfully"})
        }
    } catch (error) {
        return res.status(400).json({
            ERROR:error
        })
    }
})

dataRouter.post('/view',async(req,res)=>{
    try {
        const data=await chartData.find()
        if (!data) {
            return res.status(400).json({message:"No values in server"})
        } else {
            return res.status(200).json(data)
        }
    } catch (error) {
        return res.status(400).json({
            ERROR:error
        })
    }
})


module.exports=dataRouter