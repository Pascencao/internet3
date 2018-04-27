var users = [
    { name: 'Pablo',lastname: 'ascencao',age: 31,children: ['Pedro','Juan'],email: 'pablo.ascencao@gmail.com'},
    { name: 'alejandro1',lastname: 'rausso',age: 25,children: ['hola','como', 'te', 'va'],email: 'ale.russo@otmail.com'},
    { name: 'alejandro2',lastname: 'russso',age: 25,children: ['jorge','augusto','romina'],email: 'ale.russo@otmail.com'},
    { name: 'alejandro2',lastname: 'russso',age: 25,children: ['jorge','augusto','romina'],email: 'ale.russo@otmail.com'},
    { name: 'Pablo',lastname: 'ascencao',age: 31,children: ['Pedro','Juan'],email: 'pablo.ascencao@gmail.com'},
    { name: 'alejandro1',lastname: 'rausso',age: 25,children: ['hola','como', 'te', 'va'],email: 'ale.russo@otmail.com'},
    { name: 'alejandro2',lastname: 'russso',age: 25,children: ['jorge','augusto','romina'],email: 'ale.russo@otmail.com'},
    { name: 'alejandro2',lastname: 'russso',age: 25,children: ['jorge','augusto','romina'],email: 'ale.russo@otmail.com'},
]

function filterByAge(age){
    for(var i=0; i < users.length; i++){
        if ( age => users[i].age ){
            console.log( assamble( users[i] ) );
        }
    }
}

function assamble(user){
    return user.lastname 
            + ', ' 
            + user.name 
            + ' tiene ' 
            + user.children.length + ' hijos a la edad de '+ user.age;
}