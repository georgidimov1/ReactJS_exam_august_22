const mongoose = require('mongoose')
const { Schema } = mongoose;

const propertySchema = new Schema({
    action: {type: String, required: true},
    image: {type: String},
    type: {type: String, required: true},
    city: {type: String, required: true},
    rooms: { type: Number, min: 1, max: 10 }, 
    info: {type: String},
    price: {type: String},
    owner: {type: String},
    users:[{type: mongoose.Types.ObjectId, ref: "User"}] 
})


const Property = mongoose.model("Property", propertySchema)


module.exports = Property;






/*Hotel
•	Name - string (required), unique
•	City - string (required),
•	Image Url - string (required),
•	Free Rooms–number(required),must be between 1 and 100,
•	Users Booked a room - a collection of Users
•	Owner – string (required)*/
