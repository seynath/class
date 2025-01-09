const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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


const usersname = "john";
const usersemail = "john123@example.com";
const userspassword = "1234";

// routes
app.post('/signup', async (req, res) => {

    // console.log(req.body);
    const {username1, email1, password1} = req.body;
    console.log(username1)
    console.log(email1)
    console.log(password1)



    // check if user already exists
    // if exists, return 
    // else, create a new user
    // return success message







    res.send('Signup successful');
}
)


app.post('/login', async (req, res) => {
  
    console.log(req.body);
    const {email, password} = req.body;
    if(email === usersemail && password === userspassword){
      console.log('Login successful');
        res.send('Login successful');
    } else {
        res.send('Login failed');
    }


    // res.send('Login successful');
}
)


// port
app.listen(8003, () =>{
    console.log('server is running on port 8003')
})