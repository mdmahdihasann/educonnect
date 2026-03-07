import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
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
        required: true,
    },
    active: {
        type: Boolean,
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
    ]
});

export const Course = mongoose.models.Course ?? mongoose.model("Course", courseSchema);