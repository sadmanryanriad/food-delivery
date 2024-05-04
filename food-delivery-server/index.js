const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.ni8nft9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const foodDelivery = client
      .db("food-delivery")
      .collection("usersCollection");
    const foodItems = client.db("food-delivery").collection("food-items");
    const cartItems = client.db("food-delivery").collection("cart-items");

    //store user data
    app.post("/signup", async (req, res) => {
      try {
        const newData = req.body;
        //find existing data
        const existingData = await foodDelivery.findOne({
          email: newData.email,
        });
        if (existingData) {
          res.json({ email: false, message: "User account already exists" });
        } else {
          //insert new data
          const result = await foodDelivery.insertOne(newData);
          res.json({ email: newData.email, result });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
    //read user data for login
    app.post("/login", async (req, res) => {
      try {
        const data = req.body;
        console.log(data);
        //find existing data
        const isUserExist = await foodDelivery.findOne({ email: data.email });
        if (isUserExist) {
          if (isUserExist.password === data.password) {
            res.json({ message: "User exists", email: isUserExist.email });
          } else {
            res.json({ message: "Incorrect Credentials", email: false });
          }
        } else {
          res.json({ message: "User does not exists", email: false });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
    //get food item list
    app.get("/food-items", async (req, res) => {
      try {
        const result = await foodItems.find().toArray();
        res.send(result);
      } catch (error) {
        res.json({ message: `there was an error: ${error}` });
      }
    });
    //store cart data
        //store user data
        app.post("/cart", async (req, res) => {
            try {
              const newData = req.body;
              const result = await cartItems.insertOne(newData);
              res.send(result);
            } catch (error) {
              console.log(error);
              res.status(500).json({ message: "Internal Server Error" });
            }
          });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
