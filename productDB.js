const connectDb = require('./db/connect')
const product = require('./models/product')
require('dotenv').config();

const productJSON = require('./product.json');

const start = async() =>{
    try {
        await connectDb(process.env.MONGO_URL);
        await product.create(productJSON);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start();