// base de datos con sequelise

// sequelize.js

// const { Sequelize } = require('sequelize');

// // Crea una instancia de Sequelize y configura la conexión a la base de datos
// const sequelize = new Sequelize('nombre_de_la_base_de_datos', 'usuario', 'contraseña', {
//     host: 'localhost',
//     dialect: 'postgres', // Indica que estamos utilizando PostgreSQL
//     logging: false, // Puedes habilitar/deshabilitar el logging de SQL
// });


// module.exports = sequelize;


// ---------------------------------------------------------------------------------------------------

// base de datos con Mongoose

// const mongoose = require('mongoose')

// const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost/RyM')
//         console.log(">>> DB 'R & M' connected");
//     } catch (error) {
//         console.log(error);
//     }
// };

// module.exports = connectDB