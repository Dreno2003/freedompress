//form validation 


const formvalidation = new Validator("contactform");
formvalidation.addValidation("name", "req", "Please provide your name");
formvalidation.addValidation("email", "req", "Please provide your email");
formvalidation.addValidation("email", "email",
    "Please enter a valid email address");