import { Router } from "express";

import {
  createGuidedLesson,
  deleteGuidedLesson,
  getGuidedLesson,
  getGuidedLessonById,
  updateGuidedLesson,
} from "../controllers/guidedLessons.controller.js";

const router = Router();

router.post("/", createGuidedLesson);
router.get("/", getGuidedLesson);
router.get("/:id", getGuidedLessonById);
router.put("/:id", updateGuidedLesson);
router.delete("/:id", deleteGuidedLesson);

export default router;
