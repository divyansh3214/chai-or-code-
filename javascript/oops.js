const user={
    username:"John",
    password:"1234",
    signedIn:true,
    getUserName:function(){
        console.log(this.username);
        console.log(this);
    }
}   
console.log(user.getUserName());

//constructor function
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    };
}

// Example usage:
const user1 = new User("Divyansh", 5, true);
const user2 = new User("Jane", 2, false);

user1.greeting(); // Output: Welcome Divyansh
user2.greeting(); // Output: Welcome Jane

