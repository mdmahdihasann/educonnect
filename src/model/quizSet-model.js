import mongoose, { Schema } from "mongoose";

const quizSetSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    mark: {
        type: Number,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    quizIds: [
        { type: Schema.ObjectId }
    ],
})

export const QuizSet = mongoose.models.QuizSet ?? mongoose.model("QuizSet", quizSetSchema);