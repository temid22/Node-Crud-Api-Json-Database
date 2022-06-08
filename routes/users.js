import express from "express";
import fs from 'fs';
import { getUsers, createUser, getUser, deleteUser, updateUser} from '../controllers/users.js';
// import data from '../user.json';
const router = express.Router();

// data = JSON.stringify(data);

router.get('/', getUsers);


router.post('/', createUser);

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

// fs.writeFile("user.json", data, (err) => {
//     if (err) throw err;
//     console.log("done")
// })

export default router;