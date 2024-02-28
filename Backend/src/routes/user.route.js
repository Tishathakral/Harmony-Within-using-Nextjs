import { Router } from "express";
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUserById,
  loginUser,
} from "../controllers/user.controller.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.post("/signup", createUser);
router.get("/", getUser);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/login", loginUser);


export default router;
