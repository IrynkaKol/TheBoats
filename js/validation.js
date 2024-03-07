function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        return 'Email is required';
    } else if (!emailPattern.test(email)) {
        return 'Invalid Email format';
    } else {
        return ''; 
    }
}


function validateUsername(username) {
   
    const usernamePattern = /^[a-zA-Z0-9]+$/;
    if (username === '') {
        return 'Username is required';
    } else if (!usernamePattern.test(username)) {
        return 'Invalid Username format';
    } else {
        return ''; 
    }
}




function validatePassword(password) {
    
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
    if (password === '') {
        return 'Password is required';
    } else if (!passwordPattern.test(password)) {
        return 'Invalid Password format, password must contain numbers and letters, at least one letter must be uppercase';
    } else {
        return ''; 
    }
}