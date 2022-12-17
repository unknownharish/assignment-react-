import mongoose from 'mongoose'


const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number, required: true
    },
    sex: {
        type: String, required: true
    },
    complaints: {
        type: String, required: true
    },
    diagnose: {
        type: String, required: true
    },
    medicine: {
        type: [
            {
                name: { type: String, required: true },
                dosage: { type: String, required: true },
                qty: { type: Number, required: true },
                duration: { type: String, required: true },
                consuption: { type: String, required: true },
            },


        ]
    },




});



// const model = mongoose.model('data',schema)
export const Info = mongoose.models.data || mongoose.model("data", schema);