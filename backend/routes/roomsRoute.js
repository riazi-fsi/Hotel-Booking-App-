const router = require('express').Router()
const Room=require('../models/room')

router.get('/getallrooms' , async (req , res)=>{
    // router code here
  try {
    const rooms=await Room.find({})
console.log(rooms)
    return res.send(rooms)
    
  } catch (error) {
    return res.status(400).json({message:error})
  }
})

router.post('/getroombyid' , async (req , res)=>{
 const roomid=req.body.roomid
try {
  const roomid=req.body.roomid
  console.log(roomid)
  const room=await Room.findOne({_id:roomid})
console.log(room)
  return res.send(room)
  
} catch (error) {
  return res.status(400).json({message:error})
}
})

module.exports  = router