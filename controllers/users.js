const email= "${user.email}"

let users = [];


export const getUsers = (req, res) => {
    
    res.send(users)
}

export const createUser = (req, res) => {
    
    const user = req.body

    users.push({ ...user, id: `${user.email}`});

    res.send(`Waray with the name ${user.name} added to the database`);
}

export const getUser = (req, res) => {
    const { id } = req.params;

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