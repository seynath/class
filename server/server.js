const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
app.use(bodyParser.json());
app.use(cors());


// const { MongoClient, ServerApiVersion } = require('mongodb');


// const uri = "mongodb+srv://aicrowdsnap:iJCZkCzBzM5KzBKh@cluster0.znyks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://aicrowdsnap:iJCZkCzBzM5KzBKh@cluster0.znyks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('Product Service MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
connectDB();



// routes
app.post('/signup', async (req, res) => {

    // console.log(req.body);
    const {username1, email1, password1} = req.body;
    // console.log(username1)
    // console.log(email1)
    // console.log(password1)


    // check if user already exists
    const userExists = await User.findOne({email: email1});
    console.log(userExists);

    // if exists, return 
    if(userExists){
        return res.send('User already exists');
    }

    // if not, create a new user
    const newUser = new User({userName: username1,email: email1, password: password1})
    console.log(newUser);
    await newUser.save();

    // return success message
    res.send('Signup successful');
}
)


app.post('/login', async (req, res) => {
  
    console.log(req.body);
    const {email, password} = req.body;
    console.log(email)
    console.log(password)

    // check if user exists
    const user = await User.findOne({email: email});
    console.log(user);

    // if not, return 
    if(!user){
        console.log('User not found and Signup Please');
        return res.send('User not found and Signup Please');
    }



    // if exists, check password

    const isMatch = (password === user.password);
    console.log(isMatch);

    // if not match, return 
    if(!isMatch){
        console.log('Incorrect password');
        return res.send('Incorrect password');
    }

    // if match, return success message
    res.send('Login successful');



    // res.send('Login successful');
}
)


// port
app.listen(8003, () =>{
    console.log('server is running on port 8003')
})