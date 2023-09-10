import express from "express";
import {Delete, Register, Update, getUsers} from '../controllers/Users.js';
const router = express.Router();

router.get('/users', getUsers);
router.post('/register', Register);
router.post('/update', Update);
router.post('/removeuser', Delete);
router.get('/', (req, res) => {
    res.status(200).json({
        status: "ok"
    })
});

export default router;