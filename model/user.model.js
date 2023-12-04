const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    label: String,
    booked_slots: Object
})

const userModel = mongoose.model("user", userSchema)

module.exports = {
    userModel
}
