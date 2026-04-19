
//General Moves
// ***************************************************************************

// progress Move 
// Select the Section Of Progress 
let sectionBox = document.querySelector(".wrapper .proj-box");

//Select The All Spans Of Progress
let allSpans = document.querySelectorAll(".proj-box .details .progress span");

// When Scroll 
window.onload = function () {

    //Select The Top Height Of The SectionBox
    let sectionBoxTopHeight = sectionBox.offsetTop;

    //Select The Height Of The SectionBox
    let sectionBoxHeight = sectionBox.offsetHeight;

    //Select The Height Of The Window
    let windowHeight = this.innerHeight;

    //Select The Current Scroll
    let currentScroll = this.pageYOffset;

    //If We In Section
    if (currentScroll > (sectionBoxTopHeight + sectionBoxHeight) - windowHeight) {

        //Fill Each Span Progress
        allSpans.forEach(span => {

            span.style.width = span.dataset.progress;
        })
    }

}

// progress Move 

// Users Move 
//Select All Users 
let allUsers = document.querySelectorAll(".proj-box .users li a img");

//Loop On All Users
allUsers.forEach(user => {

    //When Click On AnyOne
    user.onclick = function (e) {
        e.preventDefault();
        //Create Overlay-projects
        let overlayProjects = document.createElement("div");

        //Add Class To The Overlay
        overlayProjects.classList.add("overlay-projects");

        //Append The Overlay In The Body
        document.body.appendChild(overlayProjects);

        //Create User Box Element
        let userBox = document.createElement("div");

        //Add Class User-box To The Element
        userBox.classList.add("user-box");

        //Create Img Element
        let userImg = document.createElement("img");

        //Set The Src 
        userImg.src = e.target.src;

        //Put The Image In UserBox
        userBox.appendChild(userImg);

        //Put The Box In The Body
        document.body.appendChild(userBox);
    }
});

document.addEventListener("click", e => {
    if (e.target.className === "overlay-projects") {

        document.querySelector(".user-box").remove();
        document.querySelector(".overlay-projects").remove();
    }
});
// Users Move 