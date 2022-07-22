import Student from "../models/Student.js";





/**
 * @access public
 * @route /api/student
 * @method GET
 */
export const getAllStudents = async (req, res) => {

    try {
        const students = await student.find();
        res.status(200).json(students);
            
    } catch (error) {
        console.log(error);
    }
    

}


/**
 * @access public
 * @route /api/student/:id
 * @method POST
 */
 export const getSingleStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await student.findById(id);
        res.status(200).json(student);
            
    } catch (error) {
        console.log(error);
    }
    
}

/**
 * @access public
 * @route /api/student
 * @method POST
 */
 export const createStudent = async (req, res) => {
    
    try{
         const student = await student.find(req.body);
        res.status(200).json(student);
    }catch(error){
        console.log(error);
    }
    
}




/**
 * @access public
 * @route /api/student
 * @method PUT/PATCH
 */
 export const updateStudent = (req, res) => {
    res.send('i am form PUT/PATCH');
}




/**
 * @access public
 * @route /api/student/:id
 * @method DELETE
 */
 export const deleteStudent = (req, res) => {
    res.send('i am form DELETE');
}
