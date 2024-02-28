import mongoose,{Schema} from "mongoose";

const guidedLessonsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,      
    },
    imageURL: {
        type: String,
        required: true,
    },
});

const guidedLessons = mongoose.model("guidedLessons", guidedLessonsSchema);
export default guidedLessons;