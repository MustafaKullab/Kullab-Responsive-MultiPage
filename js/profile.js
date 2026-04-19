
//Open Avater Move
//Select The Image 
let imageAvatar = document.querySelector(".profile .image-side img");


// Select The Image Of Header
function openImage(img) {
    //When Click On Image
    img.onclick = function (e) {

        //Create Overlay Element
        let overlayProfile = document.createElement("div")

        //Add Class To The Element
        overlayProfile.classList.add("overlay-popup");

        // Append The Element In Body 
        document.body.appendChild(overlayProfile);

        //Create Box For Image
        let boxImg = document.createElement("div");

        //Add Class To Box Img
        boxImg.classList.add("boxImg-popup");

        //Create New Img 
        let myImg = document.createElement("img");

        //Set The Src Of Img
        myImg.src = img.src;

        //Put The Image In The Box 
        boxImg.appendChild(myImg);

        //Append The Box In Body
        document.body.appendChild(boxImg);
    }

    document.addEventListener("click", e => {

        if (e.target.classList.contains("overlay-popup")) {
            document.querySelector(".overlay-popup").remove();
            document.querySelector(".boxImg-popup").remove();
        }
    })
}

openImage(imageAvatar)
//Open Avater Move

//Progress Move 
//Select The Progress Element
let profileSec = document.querySelector(".profile");

let progressElement = document.querySelector(".profile .progress span");

window.onload = function () {

    let profileTopHeight = profileSec.offsetTop;
    let profileHeoght = profileSec.offsetHeight;
    let windowHeight = this.innerHeight;
    let currentScroll = this.pageYOffset;

    if (currentScroll > (profileHeoght + profileTopHeight) - windowHeight) {
        progressElement.style.width = progressElement.dataset.progress;
    }
}
//Progress Move 
