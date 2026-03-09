import mongoose, {Schema} from "mongoose";

const testimonialSchema = new Schema ({
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    courseId: {
        type: Schema.ObjectId, ref: "Course",
    },
    userId: {
        type: Schema.ObjectId, ref: "User",
    },
})

export const Testimonial = mongoose.models.Testimonial ?? mongoose.model("Testimonial", testimonialSchema)