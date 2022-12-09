import mongoose, { Document, Schema } from 'mongoose';

export interface TalkSet {
    question : string;
    answer : string;
}
export type SimSimi = {
    talkSets : TalkSet[];
    name : string;
}

export const simsimiSchema = new Schema(
    {
        name : {
            type: String,
            required: [true, 'SimSimi name is required!'],
        },
        talkSets : {
            type : [{
                question : String,
                answer : String
            }],
            required : [true, 'SimSimi talkSets are required!']
    }
    },
    {timestamps: true}
)

interface SimSimiBaseDocument extends SimSimi,Document{}

export interface SimSimiDocument extends SimSimiBaseDocument {}

export const simsimiModel = mongoose.model<SimSimiDocument>('SimSimi', simsimiSchema);