const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const issueDetails = new Schema({
    username : {type : String, required:true},
    description : {type : String, required:true},
    severity : {type : String, required:true},
    date : {type : String, required:true}
}, {
    timestamps:true,
});

const issue = mongoose.model('IssueDT',issueDetails);

module.exports = issue;