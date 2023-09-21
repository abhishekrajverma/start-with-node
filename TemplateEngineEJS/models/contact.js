const mongoose = require("mongoose");

const { Schema } = mongoose;

const contactSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }

})

// To use our schema definition, we need to convert our blogSchema into a Model we can work with.
//  To do so, we pass it into mongoose.model(modelName, schema):
const Contact = mongoose.model('Contact' , contactSchema);

module.exports = Contact;