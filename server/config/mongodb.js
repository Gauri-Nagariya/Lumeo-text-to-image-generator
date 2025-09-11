// import mongoose from "mongoose";

// const connectDB = async ()=>{

//     mongoose.connection.on('connected', ()=>{
//         console.log("Database Connected")
//     })
//     await mongoose.connect(`${process.env.MONGODB_URI}/lumeo`)
// }

// export default  connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
