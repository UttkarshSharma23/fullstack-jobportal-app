import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    title: {
        type: string,
        required: true,
    },
    description: {
        type: string,
        required: true,
    },
    requirements: {
        type: string,
        required: true,
    },
    salary: {
        type: number,
        required: true,
    },
    location: {
        type: string,
        required: true,
    },
    jobType: {
        type: string,
        required: true,
    },
    // number of job positions count
    position: {
        type: number,
        required: true,
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    applications:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Application'
            }
        ]
},{timeStamps:true});

export const Job = mongoose.model("Job",jobSchema);