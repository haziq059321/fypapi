const mongoose = require('mongoose');
const express = require('express')
const moment = require('moment');
const app = express()
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    device_id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: moment().utc().add(5, 'hours')
    }
}, {
    _id: false,
    id: false,
    versionKey: false,
    strict: false
}
);
EventsSchema.path('value').get(function (value) {
    return Math.floor(parseFloat(value));
});

module.exports = mongoose.model('Events', EventsSchema);

