const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    comment: { type: String },
    id: {
        type    : mongoose.Schema.Types.ObjectId,
        default : mongoose.Types.ObjectId,
        index   : { unique: true }
    },
    employeeId:  { type: Number, required: true},
    status: { type: String, require: false}
    
});

schema.set('toJSON', { virtuals: true });