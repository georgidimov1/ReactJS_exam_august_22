const mongoose = require('mongoose')
const { Schema } = mongoose;

const propertySchema = new Schema({
    image:{type: String, },
    name: {type: String, required: true, unique: true},
    city: {type: String, required: true},
    rooms: { type: Number, min: 1, max: 100 }, 
    users: [String],
    owner: {type: String, required: true}
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
