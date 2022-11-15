const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic: {type: String},
    description: {type: String},
    posted_at: {type: Date},
    posted_by: {type: String}
});
blogSchema.index({ topic : 'text'});

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;