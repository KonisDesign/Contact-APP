const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
    {
        Lastname: {
            type: String,
            required: true
        },

        Firstname: {
            type: String,
            required: true
        },

        Phone: {
            type: String,
            required: true
        },

        Fav: {
            type: String,
            default: "false"
        },

        Pic: {
            type: String,
            default: ""
        }
    },

    {
        timestamps: true
    }
)

module.exports = mongoose.model('contacts', postSchema)