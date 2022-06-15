// import fs from 'fs';
import data from '../user.json' assert {type: 'json'};
import { v4 as uuidv4 } from 'uuid';

// const email= "${user.email}"

let users = data;


export const getUsers = (req, res) => {
    
    //  res.send(users.toString())
    // fs.readFile("user.json", "utf-8", (err, users) => {
    //     if (err) throw err;
        
    // })
    res.send(users)
}

export const createUser = (req, res) => {
    
    const user = req.body

    users.push({ ...user, id: uuidv4() });

    // fs.writeFile("user.json", users, (err) =>{
    //     if (err) throw err;
    // })

    res.send(`waray with the name ${user.name} added to the database`)
}

export const getUser = (req, res) => {
    const { id } = req.params

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id); 

    res.send(`waray with the id ${id} deleted from database`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body

    const user = users.find((user) => user.id === id );
    
    if(name) user.name = name
    if(email)  user.email = email
    
    res.send(`waray with the id ${id} has been updated`);


}