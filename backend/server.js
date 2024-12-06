const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = 3000; 

app.use(express.json());
app.use(cors());



//MongoDB Connection
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/qrmenusystem')
        console.log("database connected successfully")
    } catch(err) {
        console.log(err)
    }
}
module.exports = connect;


//Routes
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));