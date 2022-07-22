const express = require('express');
const { v4: uuidv4 } = require('uuid');


const router = express.Router();

let users = [
    {
        firstName: 'Test',
        lastName: 'Test LastName',
        age: 1234
    }
];



router.get('/', (req,res) => {
    res.send(users);
});

function addUser(req,res){

    const user = req.body;
    users.push({...user, userIdid: uuidv4()});
    res.send(users)
}

router.post('/', addUser);

// function getSingleUser(req, res){
//     const id = req.params.id;
//     const singleUser = users.find(user => user.userId === id);
//     res.send(JSON.stringify(singleUser));
// }

router.get('/:id', (req, res) =>{
    const sentId = req.params.id;
    const requestedUser = users.find(user => user.userId === parseInt(sentId));
    res.send(JSON.stringify(requestedUser));
});

function deleteUser(req, res){
    const id = req.params.id;
    console.log(id)
    users.filter(user => user.userId !== id);
    res.send(`User with the id ${id} has been deleted`);
}

router.delete('/:id', deleteUser);

function updateUser(req, res){
    const id = req.params.id;

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;

    const user = users.find(user => user.userId === id);
    console.log(req.body);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
}

router.patch('/:id', updateUser);

module.exports =  router;