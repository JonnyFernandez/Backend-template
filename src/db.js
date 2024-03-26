
const mongoose = require('mongoose')

const connectDB = async () => {
    const uri = "mongodb+srv://<username>:<password>@cluster0.qqv0zjy.mongodb.net/<dbname>?retryWrites=true&w=majority";

    try {
        await mongoose.connect('mongodb://localhost/store')
        await mongoose.connect(uri)
        console.log(">>> DB 'Store' connected");
    } catch (error) {
        console.log(error);
    };
};

module.exports = connectDB;
