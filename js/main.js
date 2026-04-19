// General Moves 
// Side Bar Move 

// Selection Side Bar
//Select Side Bar Control
let sideBarControl = document.querySelector(".side-bar .side-bar-control")

//Select Side Bar Control Icon 
let sideBarControlIcon = document.querySelector(".side-bar .side-bar-control i");

// Select The Side Bar 
let sideBar = document.querySelector(".side-bar");

//Select All Span In Ul Links
let ulLinks = document.querySelector(".side-bar .links");

// When CLick On Side Bar Control 
sideBarControl.addEventListener("click", e => {

    //Add Class Close To sideBarControl
    sideBarControl.classList.toggle("close");

    //If SideBarControl Contains Close Class
    if (sideBarControl.classList.contains("close")) {

        //Edit The Class Of Icon 
        sideBarControlIcon.classList.remove("bi-layout-sidebar-inset-reverse");
        sideBarControlIcon.classList.add("bi-layout-sidebar-inset");

        //Add Class Close To The SideBar
        sideBar.classList.add("close");

        //Add Class Hide To UlLinks
        ulLinks.classList.add("hide");

        //Set The Value In Local Storage
        localStorage.setItem("side-bar-state", "close");

    } else {

        //Edit The Class Of Icon 
        sideBarControlIcon.classList.remove("bi-layout-sidebar-inset");
        sideBarControlIcon.classList.add("bi-layout-sidebar-inset-reverse");

        //Remove Class Close To The SideBar
        sideBar.classList.remove("close");

        //Remove Class Hide To UlLinks
        ulLinks.classList.remove("hide");

        //Set The Value In Local Storage
        localStorage.setItem("side-bar-state", "open");
    }

});


//Check If There Is Value In Local Storage
if (localStorage.getItem("side-bar-state") !== null) {

    if (localStorage.getItem("side-bar-state") === "close") {

        //Edit The Class Of Icon 
        sideBarControlIcon.classList.remove("bi-layout-sidebar-inset-reverse");
        sideBarControlIcon.classList.add("bi-layout-sidebar-inset");

        //Add Class Close To The SideBar
        sideBar.classList.add("close");

        //Add Class Hide To UlLinks
        ulLinks.classList.add("hide");

        //Add Class Hide To UlLinks
        ulLinks.classList.add("hide");

    } else {


        //Edit The Class Of Icon 
        sideBarControlIcon.classList.remove("bi-layout-sidebar-inset");
        sideBarControlIcon.classList.add("bi-layout-sidebar-inset-reverse");

        //Remove Class Close To The SideBar
        sideBar.classList.remove("close");

        //Remove Class Hide To UlLinks
        ulLinks.classList.remove("hide");

    }
}

window.onload = function () {
    if (sideBar.classList.contains("close")) {
        sideBarControl.classList.add("close");
    }
}
//Side Bar Move

// ----------------------------------------------------------------------------------


// Notafication Move 

// Select The Logo Element 
let logoElement = document.querySelector(".header .logo");

// Select The Notafication Icon 
let notaficationIcon = document.querySelector(".header .logo i");

let readAllElement = document.querySelector(".menu-nota .readAll");

let menuNotafication = document.querySelector(".menu-nota");

notaficationIcon.addEventListener("click", e => {

    //Open The Menu
    menuNotafication.classList.toggle("show");

    //Create Transparent Overlay
    let overlayNotafication = document.createElement("div");

    overlayNotafication.classList.add("overlayNota");

    document.body.appendChild(overlayNotafication);
});

//When Click On Read Only Remove The Notafication Number
readAllElement.onclick = function () {

    //Add Class Hide To Logo Element
    logoElement.classList.add("hide");

    //Add Class Read To menuNotafication Element
    menuNotafication.classList.add("read");

    //Set The Value In Session Storage
    sessionStorage.setItem("readAll-state", "read");

}

if (sessionStorage.getItem("readAll-state") !== null) {

    if (sessionStorage.getItem("readAll-state") === "read") {
        //Add Class Hide To Logo Element
        logoElement.classList.add("hide");

        //Add Class Read To menuNotafication Element
        menuNotafication.classList.add("read");

    }
}

document.addEventListener("click", e => {

    if (e.target.classList.contains("overlayNota")) {

        menuNotafication.classList.remove("show");

        e.target.remove();
    }
});

//Select The First Notification
let firstNotification = document.querySelector(".notification-one");

if (sessionStorage.getItem("notification-read") !== null) {
    if (sessionStorage.getItem("notification-read") === "true") {

        //Add Class Read To menuNotafication Element
        menuNotafication.classList.add("read");

        //Add Class Hide To Logo Element
        logoElement.classList.add("hide");

    }
}


//Accept Or Decline Move 
// Check The Session Storage If There Is Value 
if (sessionStorage.getItem("notification") !== null) {
    if (sessionStorage.getItem("notification") === "true") {

        //Decrease Notification Counter
        logoElement.dataset.notification = "5";

        //Delete The First Notification
        firstNotification.remove();
    }
}
// Check The Session Storage If There Is Value
//Accept Or Decline Move
// Notafication Move

//General Moves

// ********************************************************************************