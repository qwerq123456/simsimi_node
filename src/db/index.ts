import mongoose from "mongoose";

mongoose.connect(
    'mongodb+srv://simsimi:simsimi00@cluster0.nqr0gqx.mongodb.net/simsimi?retryWrites=true&w=majority'
)

const db = mongoose.connection;

const handleOpen = () => console.log(`Connected to DB`);
const handleError = (error : any) => console.log(`Error on DB Connection : ${error}`);

db.once('open', handleOpen);
db.on('error', handleError);

export * from './models';