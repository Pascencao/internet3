
/* function filterByAge(age){
    for(var i=0; i < users.length; i++){
        if ( age => users[i].age ){
            console.log( assamble( users[i] ) );
        }
    }
} */

/* function assamble(user){
    return user.lastname 
            + ', ' 
            + user.name 
            + ' tiene ' 
            + user.children.length + ' hijos a la edad de '+ user.age;
} */

var listUsers = {
    assamble: function (user) {
        return user.lastname
            + ', '
            + user.name
            + ' tiene '
            + user.children + ' hijos a la edad de ' + user.age;
    },
    iterate: function (usersList) {
        for (var i = 0; i < usersList.length; i++) {
            console.log(listUsers.assamble(usersList[i]));
        }
    }
}
listUsers.assamble(users)



