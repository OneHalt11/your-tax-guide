const mongoose = require('mongoose')

const clickSchema = new mongoose.Schema({
    click: {
        type: String
    }
}, {
    timestamps: true
})

const Click = mongoose.model('Click', clickSchema)

module.exports = Click