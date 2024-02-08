const mongoose = require('mongoose');

const formSchmea = new mongoose.Schema({
    Name: String,
    Email: String,
    Mobile: Number,
    Subject: String,
    Message: String
})

const UserModel = mongoose.model("Datas", formSchmea);

module.exports = UserModel;