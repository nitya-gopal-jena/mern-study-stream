import mongoose from "mongoose";


const dbConnect = async () => {
    try {

        await mongoose.connect('mongodb://localhost:27017/JSP');
        console.log('Database connect successfully');


    } catch (error) {
        console.log('Database connection failed', error);

    }
}

export default dbConnect;