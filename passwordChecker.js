function passwordChecker(password) {
    console.log('Checking password:', password);
    console.log('Password length:', password.length);
    
    if (password.length < 8) {
        console.log('Password is too short');
        return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        console.log('Password lacks a special character');
        return false;
    }
    if (!/\d/.test(password)) {
        console.log('Password lacks a digit');
        return false;
    }
    if (/ipl/i.test(password)) {
        console.log('Password contains "IPL"');
        return false;
    }
    console.log('Password is valid');
    return true;
}

module.exports = passwordChecker;