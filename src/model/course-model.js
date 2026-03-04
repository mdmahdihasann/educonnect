import mongoose, { Schema } from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    modules: {
        type: [Schema.Types.ObjectId],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    instructor: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    quizzes: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    testimonials: {
        type: [Schema.Types.ObjectId],
        required: false,
    },
});

export const Course =  mongoose.connection.models.Course ?? mongoose.connection.model("Course", courseSchema);