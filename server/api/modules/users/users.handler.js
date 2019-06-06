import mongoose from 'mongoose';

const User = mongoose.model('User');

export function getAllUsers(req, res){
  User.find()
    .then((users) => res.send({data: 'API Works'}))
    .catch(() => res.sendStatus(500))
}

export function addUser(req, res){
  let user = new User(req.body);

  User.create(user)
  .then(user =>{
    res.status(200).json({'user': 'user added successfully'});
  })
  .catch(err =>{
    res.sendStatus(500).json({'user' : 'error => ' + err});
  });
}
