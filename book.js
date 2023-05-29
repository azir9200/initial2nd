const day = 4;
switch (day) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursay");
    case 4:
        console.log("Friday");
}

const age = 68;
if (age < 5 || age >= 65) {
    console.log("free");
} else if (age < 10) {
    console.log("$10")
} else if (age < 65) {
    console.log("$20")
}


const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD")
} else {
    console.log("INCORRECT FORMET")
}