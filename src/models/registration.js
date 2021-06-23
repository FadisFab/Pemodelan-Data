const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    username : {
        type : String,
        requied : true,
        unique : true
    },
    nama : {
        type : String,
        requied : true
    },
    email : {
        type : String,
        requied : true
    },
    tgl_lahir : {
        type : Date,
        requied : true
    },
    password : {
        type : String,
        requied : true
    },
    harapan_user : {
        type : String
    }
})

const registration = new mongoose.model("registration", registrationSchema);
module.exports = registration;