function passwordTest() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let secpassword = document.getElementById("secpassword").value;
    if (username == '') {
        alert("USERNAME IS NOT DETECTED.");
    } else if (password == '') {
         alert("PASSWORD IS NOT DETECTED.");
    } else if (username == '' && password == '') {
         alert("PASSWORD NOR USERNAME DETECTED.");
    } else if (password !== secpassword) {
         alert("Passwords do NOT match.");
    } else if (password.length < 8) {
         alert("Password does not have enough characters.");
    }
    // debugger;
    if(check(password)) {
        alert("You're all set.");
    }
    //  else {
    //     alert("You're all set.");
    // }
}

function showPassword() {
    let visible = document.getElementById("password");
    let secVisible = document.getElementById("secpassword");
    if (visible.type === "password") {
        visible.type = "text";
    } else {
        visible.type = "password";
    }
    if (secVisible.type === "password") {
        secVisible.type = "text";
    } else {
        secVisible.type = "password"
    }
}

function check(password) {
    let special = ['!', '@', '#', '$', '%', '&']
    let numberLimit = document.getElementById("numberLimit");
    let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let space = [' ', '  ' ,'\b', '\t', '\n', '\v', '\f', '\r', '\"', '\'', '\\'];
    let pass = {
        numberLimit: false,
        specialChar: false,
        upperCase: false,
        lowerCase: false,
        numberDetection: false,
        spaceDetection: false
    };

    if (password.length >= 12) {
        numberLimit.style.color = "green";
        pass.numberLimit = true;
    } else if (password.length >= 8) {
        numberLimit.style.color = "yellow";
        pass.numberLimit = true;
    } else {
        numberLimit.style.color = "red";
        pass.numberLimit = false;
    }

    let specialChar = document.getElementById("specialChar");
    for (let i = 0; i < password.length; i++) {
        if (special.includes(password[i])) {
            specialChar.style.color = "green";
            pass.specialChar = true;
            break;
        } else {
            specialChar.style.color = "red";
        }
    }

    let upperCase = document.getElementById('upperCase');
    for (let i = 0; i < password.length; i++) {
        if (upper.includes(password[i])) {
            upperCase.style.color = "green";
            pass.upperCase = true;
            break;
        } else {
            upperCase.style.color = "red";
        }
    }

    let lowerCase = document.getElementById('lowerCase');
    for (let i = 0; i < password.length; i++) {
        if (lower.includes(password[i])) {
            lowerCase.style.color = "green";
            pass.lowerCase = true;
            break;
        } else {
            lowerCase.style.color = "red";
        }
    }

    let numberDetection = document.getElementById('numberDetection');
    for (let i = 0; i < password.length; i++) {
        if (number.includes(password[i])) {
            numberDetection.style.color = "green";
            pass.numberDetection = true;
            break;
        } else {
            numberDetection.style.color = "red";
        }
    }
    
    let spaceDetection = document.getElementById('spaceDetection');
    for (let i = 0; i < password.length; i++) {
        if (space.includes(password[i])) {
            spaceDetection.style.color = "red";
            pass.spaceDetection = true;
        } else {
            spaceDetection.style.color = "green";
        }
    }

    return pass.numberLimit && pass.specialChar && pass.upperCase && pass.lowerCase && pass.numberDetection && !pass.spaceDetection;

}