
// ***************************************************************************************
// Setting Page sessionStorage Moves 

//Select textArea In Site Control 
let siteControlTextArea = document.querySelector(".site-control textarea");

//When Typing In textArea
siteControlTextArea.oninput = function (e) {

    //Storage The Input Value In Session Storage 
    sessionStorage.setItem("siteControlTextArea", siteControlTextArea.value);

}

//Check If There Is Value In Session Storage
if (sessionStorage.getItem("siteControlTextArea") !== null) {

    //Set The Value In siteControlTextArea
    siteControlTextArea.value = sessionStorage.getItem("siteControlTextArea");
}

//........................................................................................

// Select input Values In GeneralInfo
let firstNameValue = document.querySelector(".general-info .firstName");
let lastNameValue = document.querySelector(".general-info .lastName");

//When Typing In First Name
firstNameValue.oninput = function (e) {

    //Storage The Input Value In Session Storage 
    sessionStorage.setItem("generalInfoFirstName", firstNameValue.value);

}

//Check If There Is Value In Session Storage
if (sessionStorage.getItem("generalInfoFirstName") !== null) {

    //Set The Value In lastNameValue
    firstNameValue.value = sessionStorage.getItem("generalInfoFirstName");
}

//When Typing In Last Name
lastNameValue.oninput = function (e) {

    //Storage The Input Value In Session Storage 
    sessionStorage.setItem("generalInfoLastName", lastNameValue.value);

}

//Check If There Is Value In Session Storage
if (sessionStorage.getItem("generalInfoLastName") !== null) {

    //Set The Value In lastNameValue
    lastNameValue.value = sessionStorage.getItem("generalInfoLastName");
}

//........................................................................................

// Select Inputs Of Social Info 
let usernameTwitter = document.querySelector(".social-info .twitter");
let usernameFacebook = document.querySelector(".social-info .facebook");
let usernameLinkedIn = document.querySelector(".social-info .linkedin");
let usernameYoutube = document.querySelector(".social-info .youtube");

//When Typing In usernameTwitter
usernameTwitter.oninput = function (e) {

    //Storage The Input Value In Session Storage 
    sessionStorage.setItem("usernameTwitter", usernameTwitter.value);

}
//Check If There Is Value In Session Storage
if (sessionStorage.getItem("usernameTwitter") !== null) {

    //Set The Value In usernameTwitter
    usernameTwitter.value = sessionStorage.getItem("usernameTwitter");
}

//When Typing In usernameFacebook
usernameFacebook.oninput = function (e) {

    //Storage The Input Value In Session Storage 
    sessionStorage.setItem("usernameFacebook", usernameFacebook.value);

}
//Check If There Is Value In Session Storage
if (sessionStorage.getItem("usernameFacebook") !== null) {

    //Set The Value In usernameFacebook
    usernameFacebook.value = sessionStorage.getItem("usernameFacebook");
}

//When Typing In usernameLinkedIn
usernameLinkedIn.oninput = function (e) {

    //Storage The Input Value In Session Storage 
    sessionStorage.setItem("usernameLinkedIn", usernameLinkedIn.value);

}
//Check If There Is Value In Session Storage
if (sessionStorage.getItem("usernameLinkedIn") !== null) {

    //Set The Value In usernameLinkedIn
    usernameLinkedIn.value = sessionStorage.getItem("usernameLinkedIn");
}

//When Typing In usernameYoutube
usernameYoutube.oninput = function (e) {

    //Storage The Input Value In Session Storage 
    sessionStorage.setItem("usernameYoutube", usernameYoutube.value);

}
//Check If There Is Value In Session Storage
if (sessionStorage.getItem("usernameYoutube") !== null) {

    //Set The Value In usernameYoutube
    usernameYoutube.value = sessionStorage.getItem("usernameYoutube");
}
// Setting Page sessionStorage Moves
// ***************************************************************************************
