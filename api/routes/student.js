import express from 'express';
import { createStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent } from '../middlewares/studentController.js';




// init Route
const Router = express.Router();


// Route
Router.route('/').get(getAllStudents).post(createStudent);
Router.route('/:id').get(getSingleStudent).delete(deleteStudent).put(updateStudent).patch(updateStudent);


// export Default Router
export default Router;


