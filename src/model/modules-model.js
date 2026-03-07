import mongoose, { Schema } from "mongoose";

const moduleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    course: {
        type: Schema.ObjectId,
        required: true,
    },
    lessonIds: {
        type: [Schema.ObjectId],
        required: false,
    },
})

export const Module = mongoose.models.Module ?? mongoose.model("Module", moduleSchema)