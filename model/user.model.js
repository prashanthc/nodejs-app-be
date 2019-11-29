const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    id: {
        type    : mongoose.Schema.Types.ObjectId,
        default : mongoose.Types.ObjectId,
        index   : { unique: true }
    },
    email: {
        type        : String, 
        required    : false,
        trim        : true,
        unique      : true,
        match       :  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    mobileNumber: { type: Number, unique: true },
    managerId: { type: Number, unique: true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);