
import guidedLessons from "../models/guidedLessons.js";


const createGuidedLesson = async (req, res) => {
    const { title, description, imageURL } = req.body;
    if (!title || !description || !imageURL) {
        return res.status(400).send("Please fill all the fields");
    }
    const existingGuidedLesson = await guidedLessons.findOne({ title });
    if (existingGuidedLesson) {
        return res.status(400).send("Guided Lesson already exists");
    }
    const guidedLesson = await guidedLessons.create({ title, description, imageURL });
    res.json(guidedLesson);
};

const getGuidedLesson = async (req, res) => {
    // Assuming guidedLessonModel is the model you're using
    const Lessons = await guidedLessons.find();
    // const data = Lessons.map((lesson) => {
    //     return {
    //         id: lesson._id,
    //         title: lesson.title,
    //         description: lesson.description,
    //         imageURL: lesson.imageURL,
    //     };
    // });
    res.send(Lessons);
};


const getGuidedLessonById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send("Please provide Guided Lesson id");
    }
    const guidedLesson = await guidedLessons.findById(id);
    if
    (!guidedLesson) {
        return res.status(400).send("Guided Lesson not found");
    }
    res.send(guidedLesson);
}

const updateGuidedLesson = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send("Please provide Guided Lesson id");
    }
    const { title, description, imageURL } = req.body;
    const guidedLesson = await guidedLessons.findByIdAndUpdate(id, { title, description, imageURL }, { new: true });
    res.json(guidedLesson);
};

const deleteGuidedLesson = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send("Please provide Guided Lesson id");
    }
    const guidedLesson = await guidedLessons.findByIdAndDelete(id);
    res.json(guidedLesson);
}

export { createGuidedLesson, getGuidedLesson, getGuidedLessonById, updateGuidedLesson, deleteGuidedLesson };