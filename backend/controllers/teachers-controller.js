const Teacher = require("./../models/teacher");


const allTeachers = async (req, res) => {
  try {
      let teachers = await Teacher.find().exec();
     if (teachers.length === 0) {
        res.status(404).send({ message: "There were no teachers found!" });
    } 
        res.status(200).send({ teachers });
    }
     catch (err) {
        res.status(500).send({
            message: "There is an error with the database!",
            error: err.message
        });
    }
  }
const singleTeacher = async (req, res) => {
    try {
        let teacher = await Teacher.findById(req.params.userID).exec();
        if(teacher == null || teacher == undefined) {
            res.status(404).json({ message: 'This is an unidentified teacher'})
        }
        res.status(200).json({ teacher, message: 'Here is your teacher'})
    } catch (err) {
        res.status(500).json({ Error: err.message })
    }
}
const addTeacher = async (req, res) => {
  let teacher = req.body;
    try {
        let newTeacher = await Teacher.create(teacher);
        res.status(200).json({ newTeacher, message: "create teacher" });
    } catch (err) {
        res.status(500).json({ Error : err.message });
    }
  }
const updateTeacher = async (req, res) => {
  try{
    let teacher = await Teacher.findByIdAndUpdate(req.params.userID, {$set: req.body}, {new: true}).exec();
    res.status(200).json({ teacher, message: "You have updated your teacher" });
  }
  catch (err) {
    res.status(500).send({ Error : err.message });
  }
};
const deleteTeacher = async (req, res) => {
  try{
    let deletedTeacher = await Teacher.findByIdAndRemove(req.params.userID).exec();
    res.status(200).json({ deletedTeacher, message: "You have deleted your teacher" });
  if (index == undefined) {
    res.status(404).send({ message: "something went wrong" });
  } 
  } catch (err) {
      res.status(500).json({ Error : err.message })
  }
}

module.exports = { allTeachers, singleTeacher, addTeacher, updateTeacher, deleteTeacher }
