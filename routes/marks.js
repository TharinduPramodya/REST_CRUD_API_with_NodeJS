const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/create',(req,res,next) =>{
    let marks = req.body;
    query = "insert into marks (name,email,mark) values(?,?,?)";
    connection.query(query,[marks.name,marks.email,marks.mark],(err,results) =>{
        if(!err){
          return res.status(500).json({message: "marks Added Successfully"});
        }
        else
        return res.status(500).json(err);
    })
})

router.get('/read',(req,res,next) =>{
  var query = "select *from marks";
  connection.query(query,(err,results) =>{
      if(!err){
        return res.status(200).json(results);
      }
      else
      return res.status(500).json(err);
  })
})

router.patch('/update/:id', (req, res, next) => {
  const id = req.params.id;
  let marks = req.body;
  var query = "update marks set name=?, email=?, mark=? where id=?";
  connection.query(query, [marks.name, marks.email, marks.mark, id], (err, results) => {
    if (!err) {
      if (results.affectedRows == 0) {
        return res.status(404).json({ message: "marks id not found" });
      }
      return res.status(200).json({ message: "marks Updated Successfully" });
    } else {
      return res.status(500).json(err);
    }
  });
});

router.delete('/delete/:id', (req, res, next) => {
  const id = req.params.id;
  var query = "delete from marks where id=?";
  connection.query(query,[id],(err,results) =>{
      if(!err){
        if (results.affectedRows == 0) {
          return res.status(404).json({ message: "marks id not found" });
        }
        return res.status(200).json({ message: "marks Deleted Successfully" });
      } else {
        return res.status(500).json(err);
      }
    });
  });





module.exports = router;