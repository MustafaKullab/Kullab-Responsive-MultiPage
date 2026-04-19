// General Moves 
//Side Bar Move 

//Selection Side Bar
let sideBar = document.querySelector(".side-bar")

//Select Reduction Element
let reductionSidebar = document.querySelector(".side-reduction");

// Create Span On Reduction 
let spanRed = document.createElement("span");

let spanText = document.createTextNode("Collapse");

spanRed.appendChild(spanText);

reductionSidebar.addEventListener("click", e => {

    //Add Class close To The Side Bar
    sideBar.classList.toggle("close");

    if (sideBar.classList.contains("close")) {

        //Set The Background Color To Green
        reductionSidebar.style.backgroundColor = "#11df11";

        //Set Local Storage Value To close
        localStorage.setItem("reduction", "close");

        //remove Text From Reduction
        spanRed.remove();

    } else {

        //Set The Background Color To red
        reductionSidebar.style.backgroundColor = document.documentElement.getAttribute("--red-color");

        localStorage.setItem("reduction", "open");

        //Add Text To Reduction
        reductionSidebar.appendChild(spanRed);
    }
});

//Change The State According By Local Storage Value 
if (localStorage.getItem("reduction") !== null) {

    //If The Value Is close 
    if (localStorage.getItem("reduction") === "close") {

        //Add Class close To The Side Bar 
        sideBar.classList.add("close");

        //Set The Background Color To Green
        reductionSidebar.style.backgroundColor = "#11df11";

    } else {

        //Remove Class close To The Side Bar 
        sideBar.classList.remove("close");

        //Add Text To Reduction
        reductionSidebar.appendChild(spanRed);
    }
}


//Side Bar Move

// ----------------------------------------------------------------------------------

// Notafication Move 

// Select The Logo Element 
let logoElement = document.querySelector(".header .logo");

// Select The Notafication Icon 
let notaficationIcon = document.querySelector(".header .logo i");

// Whenn Click On notaficationIcon 
notaficationIcon.addEventListener("click", e => {

    // Add Class Hide To The logoElement 
    logoElement.classList.add("hide");
});

// Notafication Move

//General Moves