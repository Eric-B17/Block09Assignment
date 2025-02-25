class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name = ValidationError
    }
}

function validateUsername(username){
    if (username.length < 10){
        throw new ValidationError("This username isn't 10 characters long.");
    }
    return "Username is Valid.";
}

let username = "Hello"

try{
    console.log(validateUsername(username));
}catch(error){
    console.error(`${error.name}: ${error.message}`)
}