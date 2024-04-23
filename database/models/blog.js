const mongoose = require("mongoose");
// Get a schema
const Schema = mongoose.Schema

const BlogModel = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,

    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    state: {
        type: String,
        enum: ["Draft", "Published"],
        default: "draft"
    },
    readCount: {
        type: Number,
        default: 0,
    },
    readingTime: {
        type: Number
    },
    tags:[
        String
    ],
    body: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
})

//Read_Time
BlogModel.pre('save', function(next) {
    // Assuming an average reading speed of 200 words per minute
    const wordsPerMinute = 200;
    const contentLength = this.content.split(' ').length;
    this.readTime = Math.ceil(contentLength / wordsPerMinute);
    next();
  });

  //Read_Count
BlogModel.methods.incrementReadCount = async function() {
    this.readCount += 1;
    await this.save();
  };

module.exports = mongoose.model("Blog", BlogModel);
