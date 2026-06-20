import mongoose, { Mongoose } from "mongoose";

class DatabaseConfig {
    static async connectDB(): Promise<void> {

        try {
            const pathTodb = process.env.MONGODB_URL

            console.log("MongoDB Connected Successfully");
            if (!pathTodb) {
                throw new Error("MONGODB_URL not foun")
            }
            const options = {
                maxPoolSize: 10,
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 50000
            }
            await mongoose.connect(pathTodb, options)
            console.log('Connected to MongoDB')

        }
        catch (err) {
            console.log("Database connection error:", err);
            process.exit(1)
        }
    }

    static async disConnect(): Promise<void> {
        try {
            await mongoose.disconnect()
            console.log('Disconnected to MongoDB')

        } catch (err) {
            console.log("Database disconnection error:", err);
            process.exit(1)
        }
    }
}

export default DatabaseConfig