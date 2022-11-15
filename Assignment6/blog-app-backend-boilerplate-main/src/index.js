const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
//connect to DB
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/blog_app',
{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})
// mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log('connected to DB')
// })


app.listen(3000, () => console.log('Server running......'));

