const mongoose = require('mongoose');
const shortId = require('shortid');

const encurtarUrlsSchema = new mongoose.Schema({
    full: {
        type: String,
        require: true
    },
    short: {
        type: String,
        require: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        require: true,
        default: 0
    }
})

module.exports = mongoose.model('encurtarUrls', encurtarUrlsSchema);