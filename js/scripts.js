var users = [
    {
        name: 'Pablo',
        lastname: 'ascencao',
        age: 31,
        children: ['Pedro','Juan'],
        email: 'pablo.ascencao@gmail.com'
    },
    { name: 'alejandro1',lastname: 'rausso',age: 25,children: ['hola','como', 'te', 'va'],email: 'ale.russo@otmail.com'},
    { name: 'alejandro2',lastname: 'russso',age: 25,children: ['jorge','augusto','romina'],email: 'ale.russo@otmail.com'},
    { name: 'alejandro2',lastname: 'russso',age: 25,children: ['jorge','augusto','romina'],email: 'ale.russo@otmail.com'},
    {
        name: 'Pablo',
        lastname: 'ascencao',
        age: 31,
        children: ['Pedro','Juan'],
        email: 'pablo.ascencao@gmail.com'
    },
    { name: 'alejandro1',lastname: 'rausso',age: 25,children: ['hola','como', 'te', 'va'],email: 'ale.russo@otmail.com'},
    { name: 'alejandro2',lastname: 'russso',age: 25,children: ['jorge','augusto','romina'],email: 'ale.russo@otmail.com'},
    { name: 'alejandro2',lastname: 'russso',age: 25,children: ['jorge','augusto','romina'],email: 'ale.russo@otmail.com'},
    {
        name: 'Pablo',
        lastname: 'ascencao',
        age: 31,
        children: ['Pedro','Juan'],
        email: 'pablo.ascencao@gmail.com'
    },
    { name: 'alejandro2',lastname: 'russso',age: 25,children: ['jorge','augusto','romina'],email: 'ale.russo@otmail.com'},
    { name: 'alejandro3',lastname: 'rusdso',age: 25,children: [],email: 'ale.russo@otmail.com' }
]

for(var i=0; i < users.length; i++){
    console.log(users[i].lastname + ', ' + users[i].name + ' tiene ' + users[i].children.length + ' hijos ');
}