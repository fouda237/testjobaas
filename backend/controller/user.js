const User = require("../models/user");

const createUsers = async (req, res) => {
    
    const users =await User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      adress: req.body.adress,
    });
    users.save().then(() => {
        console.log("Message has been saved successfully in the database");
        console.log("This is a post request");
        res.sendStatus(200);
        
    })
    .catch((err) => {
        console.log("There was an error saving the msg object to the database");
        console.log("Sending 500 status code");
        res.sendStatus(500);
    });

};
const getUsers = async(req,res)=>{
  User.find().then(data=>{
    res.status(200).json(data);
  })
.catch(err => {
  res.status(500).send({
    message: "Error updating Tutorial with"+ err
  });


  } )
    
  };
  const getUsersid = async(req,res)=>{
    const id = req.params.id;
    User.findById(id).then(data=>{
      res.status(200).json(data);
    })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Tutorial with"+ err
    });
  
  
    } )
      
    };
    
  const updateUsers = async (req, res) => {
    const users =await User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      adress: req.body.adress,
    });
    if (!users) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
    
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Tutorial was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };
  const deleteUsers = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
  };
  
  
  module.exports = {
    getUsers,
    getUsersid ,
    createUsers,
    updateUsers,
     deleteUsers
  };
  