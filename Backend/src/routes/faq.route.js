import { Router } from "express";
import {
  createFaq,
  deleteFaq,
  getFaq,
  getFaqById,
  updateFaq,
} from "../controllers/faq.controller.js";

const router = Router();

router.post("/", createFaq);
router.get("/", getFaq);
router.get("/:id", getFaqById);
router.put("/:id", updateFaq);
router.delete("/:id", deleteFaq);
export default router;
