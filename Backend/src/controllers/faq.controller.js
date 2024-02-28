import Faq from "../models/faq.js";



const createFaq = async (req, res) => {
    const { question, answer } = req.body;
    if (!question || !answer) {
        return res.status(400).send("Please fill all the fields");
    }
    const existingFaq = await Faq.findOne({ question });
    if (existingFaq) {
        return res.status(400).send("FAQ already exists");
    }
    const faq = await Faq.create({ question, answer });
    res.json(faq);
};


const getFaq = async (req, res) => {
    const faqs = await Faq.find();
    res.send(faqs);
};

const getFaqById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send("Please provide FAQ id");
    }
    const faq = await Faq.findById(id);
    if (!faq) {
        return res.status(400).send("FAQ not found");
    }
    res.send(faq);
}

const updateFaq = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send("Please provide FAQ id");
    }
    const { question, answer } = req.body;
    const existingFaq = await Faq.findOne({ question });
    if (existingFaq) {
        return res.status(400).send("FAQ already exists");
    }
    const faq = await Faq.findByIdAndUpdate(id, { question, answer }, { new: true });
    res.json(faq);
};

const deleteFaq = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send("Please provide FAQ id");
    }
    const faq = await Faq.findByIdAndDelete(id);
    res.json(faq);
}

export { createFaq, getFaq, getFaqById, updateFaq, deleteFaq };