import { createUser } from "../controller/User.con.js";

import { Router } from "express";

const router = Router();

router.post('/user',createUser);

export default router;