const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/your-tax-guide' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const conn = mongoose.connection;

conn.on('error', () => console.error.bind(console, 'connection error'));

conn.once('open', () => console.info('Connection to Database is successful'));

module.exports = conn;