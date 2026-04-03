import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    thumbnail: {
        type: String,
        required: false,
    },
    modules: [
        {
            type: Schema.ObjectId,
            ref: "Module"
        }
    ],
    price: {
        type: Number,
        default: 0,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
        required: true,
    },
    category: {
        type: Schema.ObjectId, ref: "Category",
    },
    instructor: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    testimonials: [
        {
            type: Schema.ObjectId,
            ref: "Testimonial"
        }
    ],
    learning: {
        type: [String]
    },
    createdOn: {
        required: true,
        default: Date.now(),
        type: Date
    },
    modifiedOn: {
        required: true,
        default: Date.now(),
        type: Date
    }
});

export const Course = mongoose.models.Course ?? mongoose.model("Course", courseSchema);