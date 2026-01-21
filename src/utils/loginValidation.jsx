const loginValidation = (email,password) =>{
    const emailRegexMatch = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordRegexMatch = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!emailRegexMatch){return "Invalid Email."}
    if(!passwordRegexMatch){return "Invalid Password."}
    return null;
}
export default loginValidation;
