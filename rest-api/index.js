const express = require('express');
const cors = require('cors') 
const routes = require('./routes')
const app = express() ;
const mongoose = require ('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/properties`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});

app.use(cors())
app.use(express.json());
app.get('/', (req, res)=>{
    res.json({message: 'It\'s working!'})
})
app.use('/api', routes)
app.listen(5000, console.log.bind(console, 'Listening on port 5000')) 