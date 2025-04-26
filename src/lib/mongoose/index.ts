import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var, @typescript-eslint/no-explicit-any
  var mongoose: any;
}

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
if (!uri) {
  throw new Error("MONGO_URI environment variable not defined");
}
if (!dbName) {
  throw new Error("DB_NAME environment variable not defined");
}

const options = {
  dbName: dbName,
};

let cachedConn = global.mongoose;
if (!cachedConn) {
  cachedConn = global.mongoose = { conn: null };
}

const connectDB = async () => {
  if (cachedConn.conn) {
    return cachedConn.conn;
  }

  try {
    cachedConn.conn = await mongoose.connect(uri, options);
    console.log("Connected to MongoDB");
    return cachedConn.conn;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { connectDB };
