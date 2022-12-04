const router = require('express').Router()
const Room=require('../models/room')

router.get('/getallrooms' , async (req , res)=>{
    // router code here
  try {
    const rooms=await Room.find({})

    return res.send({rooms})
    
  } catch (error) {
    return res.status(400).json({message:error})
  }
})



module.exports  = router