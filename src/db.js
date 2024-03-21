
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/store')
        console.log(">>> DB 'Store' connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB