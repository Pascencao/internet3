
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
    users:[],
    assamble: function (user) {
        return user.lastname
            + ', '
            + user.Name
            + ' tiene '
            + user.children + ' hijos a la edad de ' + user.age;
    },
    iterate: function () {
        for (var i = 0; i < listUsers.users.length; i++) {
            console.log(listUsers.assamble(listUsers.users[i]));
        }
    },
    setUsers: function (users){
        listUsers.users = users;
    }
}
//listUsers.assamble(users)



$('#clickme').on('click',function(){
    if($('h1').hasClass('active')){
        $('h1').removeClass('active').addClass('disabled');
    } else {
        $('h1').removeClass('disabled').addClass('active');
    }
})