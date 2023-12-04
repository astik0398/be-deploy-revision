const express = require("express")

const {userModel} = require('../model/user.model')
const userRouter = express.Router()

userRouter.post('/contacts', async(req, res)=> {
    try {
        const contact = new userModel({
            name:  req.body.name,
		email: req.body.email,
		phone : req.body.phone,
		label : req.body.label,
		booked_slots : req.body.booked_slots
        })

        await contact.save()
        res.send(contact)
    } catch (error) {
        res.send(error)
    }
})

userRouter.delete('/delete/:id', async(req, res)=> {
    try {
        const {id} = req.params
    // const note = await userModel.findOne({_id: id})

    await userModel.findByIdAndDelete({_id: id})
    res.send({"msg": 'user has been deleted'})
    } catch (error) {
        res.send({"msg": "unable to delete"})
    }
})

module.exports = {
    userRouter
}