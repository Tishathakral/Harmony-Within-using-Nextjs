import mongoose,{Schema} from "mongoose";

const FaqSchema = new Schema({
    question: {
        type: String,
        required: true,
        unique: true,
    },
    answer: {
        type: String,
        required: true,
    },
});

const Faq = mongoose.model("Faq", FaqSchema);
export default Faq;