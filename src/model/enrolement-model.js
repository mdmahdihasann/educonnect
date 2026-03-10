import mongoose, { Schema } from "mongoose";

const enrollmentSchema = new Schema({
    enrollment_date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    completion_date: {
        type: Date,
        required: true,
    },
    method: {
        type: String,
        required: true
    },
    course_id: {
        type: Schema.ObjectId,
        ref: "Course"
    },
    student_id: {
        type: Schema.ObjectId,
        ref: "User"
    }
})

export const Enrollment = mongoose.models.Enrollment ?? mongoose.model("Enrollment", enrollmentSchema)