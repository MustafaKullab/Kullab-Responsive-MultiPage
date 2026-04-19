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


// Notafication Move 

// Select The Logo Element 
let logoElement = document.querySelector(".header .logo");

// Select The Notafication Icon 
let notaficationIcon = document.querySelector(".header .logo i");

let readAllElement = document.querySelector(".menu-nota .readAll");

let menuNotafication = document.querySelector(".menu-nota");

// Select The Box Of Notification 
let boxNotification = document.querySelectorAll(".notification-page .notifications-box .box");

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

    //Add Class Read To The Box 
    boxNotification.forEach(box => {
        box.classList.add("read");
    });

    //Update The Opacity Of markAllAsRead
    markAllAsRead.style.opacity = "0.5";

    //Update The Background Of markAllAsRead
    markAllAsRead.style.backgroundColor = "white";

    //Update The Color Of markAllAsRead
    markAllAsRead.style.color = "black";
}

if (sessionStorage.getItem("readAll-state") !== null) {

    if (sessionStorage.getItem("readAll-state") === "read") {
        //Add Class Hide To Logo Element
        logoElement.classList.add("hide");

        //Add Class Read To menuNotafication Element
        menuNotafication.classList.add("read");

        //Add Class Read To The Box 
        boxNotification.forEach(box => {
            box.classList.add("read");
        })
    }
}

document.addEventListener("click", e => {

    if (e.target.classList.contains("overlayNota")) {

        menuNotafication.classList.remove("show");

        e.target.remove();
    }
});
// Notafication Move


//Accept And Decline Move 
//Select Accept And Decline Spans
let acceptOrDecline = document.querySelectorAll(".notifications-box .private .choice span");

//Select The Priveat Box 
let privateBox = document.querySelector(".notification-page .private");
//Select The Logo Element
let logoNotification = document.querySelector(".header .logo");

//Select The First Notification
let firstNotification = document.querySelector(".notification-one");
//Loop On All Choices 
acceptOrDecline.forEach(span => {

    // When Click On Any Choice 
    span.addEventListener("click", e => {

        //Remove The Box Notification
        privateBox.remove();

        //Decrease Notification Counter
        logoNotification.dataset.notification = "5";

        //Delete The First Notification
        firstNotification.remove();

        //Update The Value In Session Storage
        sessionStorage.setItem("notification", "true");
    })
})


if (sessionStorage.getItem("notification") !== null) {
    if (sessionStorage.getItem("notification") === "true") {

        //Remove The Box Notification
        privateBox.remove();

        //Decrease Notification Counter
        logoNotification.dataset.notification = "4";

        //Delete The First Notification
        firstNotification.remove();


    }

}

// Select Read All Button 
let markAllAsRead = document.querySelector(".head-notification .readAll");


// When Click On markAllAsRead 
markAllAsRead.onclick = function () {

    logoNotification.classList.add("hide");

    //Add Class Read To Menu Notafication 
    menuNotafication.classList.add("read");

    //Add Class Read To The Box 
    boxNotification.forEach(box => {
        box.classList.add("read");
    })

    //Update The Opacity Of markAllAsRead
    markAllAsRead.style.opacity = "0.5";

    //Update The Background Of markAllAsRead
    markAllAsRead.style.backgroundColor = "white";

    //Update The Color Of markAllAsRead
    markAllAsRead.style.color = "black";

    //Update Sesion Storage
    sessionStorage.setItem("notification-read", "true");

}

if (sessionStorage.getItem("notification-read") !== null) {

    if (sessionStorage.getItem("notification-read") === "true") {
        logoNotification.classList.add("hide");


        //Add Class Read To Menu Notafication 
        menuNotafication.classList.add("read");

        //Add Class Read To The Box 
        boxNotification.forEach(box => {
            box.classList.add("read");
        });

        //Update The Opacity Of markAllAsRead
        markAllAsRead.style.opacity = "0.5";

        //Update The Background Of markAllAsRead
        markAllAsRead.style.backgroundColor = "white";

        //Update The Color Of markAllAsRead
        markAllAsRead.style.color = "black";
    }
}

if (sessionStorage.getItem("readAll-state") !== null) {

    if (sessionStorage.getItem("readAll-state") === "read") {

        //Update The Opacity Of markAllAsRead
        markAllAsRead.style.opacity = "0.5";

        //Update The Background Of markAllAsRead
        markAllAsRead.style.backgroundColor = "white";

        //Update The Color Of markAllAsRead
        markAllAsRead.style.color = "black";
    }
}
//Accept And Decline Move 