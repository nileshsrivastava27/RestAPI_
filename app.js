require('dotenv').config()
const express = require('express')
const PORT =  process.env.PORT || 8000;
const app = express();
const connectDB = require('./db/connect');

const product_route = require('./routes/products');

app.get('/', (req, res) =>{
    res.send("Hi I'm live")
})


//middleware or to set route

app.use('/api/products', product_route)

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () =>{
            console.log(`${PORT} Yes I am connected`);
        })
        
    } catch (error) {
        console.log(error);
    }
}

start();
