import fs from 'fs';
import data from '../user.json' assert {type: 'json'};
import path from "path";
import { v4 as uuidv4 } from 'uuid';
// const email= "${user.email}"
const __dirname = path.resolve();
let users = data;


export const getUsers = (req, res) => {
    
    res.send(users)
}

export const createUser = (req, res) => {
const rawData = 
    fs.readFileSync(path.resolve(__dirname, "user.json"),"utf8");
    
    const users = JSON.parse(rawData);
    
    const user = [{
        name: req.body.name,
        email: req.body.email,
        id: uuidv4()
    }];

    users.push(user);
    fs.writeFile(
        path.resolve(__dirname, "user.json"),
        JSON.stringify(users, null, 2),
        "utf8",
        err => {
          if (err) throw err;
          res.send(`waray with the name ${user.name} added to the database`);
        }
    )
};


export const getUser = (req, res) => {
    const { id } = req.params

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id); 

    fs.writeFile(
        path.resolve(__dirname, "user.json"),
        JSON.stringify(users, null, 2),
        "utf8",
        err => {
          if (err) throw err;
          res.send(`waray with the id ${id} deleted from database`);
        }
    )

    
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body

    const user = users.find((user) => user.id === id );
    
    if(name) user.name = name
    if(email)  user.email = email

    fs.writeFile(
        path.resolve(__dirname, "user.json"),
        JSON.stringify(users, null, 2),
        "utf8",
        err => {
          if (err) throw err;
          res.send(`waray with the id ${id} has been updated`);
        }
    )
    
    


}