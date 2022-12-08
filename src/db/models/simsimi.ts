import mongoose, { Document, Schema } from 'mongoose';

export type SimSimi = {
    questions : string[];
    answers : string[];
    name : string;
}

export const simsimiSchema = new Schema(
    {
        name : {
            type: String,
            required: [true, 'SimSimi name is required!'],
        },
        questions : {
            type: [String],
            required: [true, 'SimSimi question is required!'],
        },
        answers : {
            type: [String],
            required: [true, 'SimSimi answers is required!'],
        },
    },
    {timestamps: true}
)

interface SimSimiBaseDocument extends SimSimi,Document{}

export interface SimSimiDocument extends SimSimiBaseDocument {}

export const simsimiModel = mongoose.model<SimSimiDocument>('SimSimi', simsimiSchema);