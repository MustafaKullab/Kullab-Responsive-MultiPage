
// ********************************************************************************
// Open Image Move 
//Select All Images In Section
let myImages = document.querySelectorAll(".friends .box .avatar img");

//Loop On All Imgs
myImages.forEach(currentImg => {

    //When Click On AnyOne
    currentImg.onclick = function (e) {
        e.preventDefault();
        //Create Overlay-projects
        let overlayProjects = document.createElement("div");

        //Add Class To The Overlay
        overlayProjects.classList.add("overlay-projects");

        //Append The Overlay In The Body
        document.body.appendChild(overlayProjects);

        //Create User Box Element
        let imgBox = document.createElement("div");

        //Add Class User-box To The Element
        imgBox.classList.add("user-box");

        //Create Img Element
        let imgInBox = document.createElement("img");

        //Set The Src 
        imgInBox.src = e.target.src;

        //Put The Image In imgBox
        imgBox.appendChild(imgInBox);

        //Put The Box In The Body
        document.body.appendChild(imgBox);
    }
});

document.addEventListener("click", e => {
    if (e.target.className === "overlay-projects") {

        document.querySelector(".user-box").remove();
        document.querySelector(".overlay-projects").remove();
    }
});
// Users Move
// Open Image Move
// ********************************************************************************

// Remove Move 
//Select All Remove Elements
let allRemoves = document.querySelectorAll(".friends .box .choose .remove");

//Delcare A Variable To Set The Box Of Friend Inside This Variable
let currentRemoveBox = null;

//Loop On All Elements 
allRemoves.forEach(remove => {

    // When Click On Remove Button 
    remove.onclick = function (e) {

        e.preventDefault();

        //Set The Current Friend Value 
        currentRemoveBox = remove.parentElement.parentElement.parentElement;

        //The Name Of Friend 
        let nameFriend = remove.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;

        //Create Img Of Friend
        let imgFriend = document.createElement("img");

        //Update The Src Of Img
        imgFriend.src = remove.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.src;

        //Create Image Box
        let imageBox = document.createElement("div");

        //Add The Class To The Box
        imageBox.classList.add("imgBox-friend");

        //Append The Image In The Box
        imageBox.appendChild(imgFriend);

        //Create Box To Icon xMark
        let boxIconXmark = document.createElement("div");

        // Add Class To The Image Of Friend 
        imgFriend.classList.add("img-friend");

        //Create Remove Popup Box
        let rmvBxPopup = document.createElement("div");


        //Create Overlay To Remove Box 
        let overlayRmv = document.createElement("div");

        //Add Class To Overlay Rmove
        overlayRmv.classList.add("overlay-projects");

        //Add Overlay To The Body
        document.body.appendChild(overlayRmv);

        //Add Class Remove To The Popup
        rmvBxPopup.classList.add("remove-popup");

        //Create Box Of Image And H2 Text 
        let boxImageAndH2 = document.createElement("div");

        //Add Class To The Element
        boxImageAndH2.classList.add("box-image-h2");

        //Create Txt To The Box 
        let h2Txt = document.createElement("h2");

        //Create Txt Node To h2Txt
        let textH2Txt = document.createTextNode(`This Process Will Delete ${nameFriend.textContent} , Are You Sure ?`);

        //Append Text Of H2 In H2 Box
        h2Txt.appendChild(textH2Txt);

        //Append The Image In The Box 
        boxImageAndH2.appendChild(imageBox);

        //Appen Text In The Box
        boxImageAndH2.appendChild(h2Txt);

        //Create Box Of Choice yes/no
        let boxChoice = document.createElement("div");

        //Add Class To The BoxChoice
        boxChoice.classList.add("box-choice");

        //Create Button Yes
        let yesButton = document.createElement("button");

        //Add Class yes-rmv To The Button
        yesButton.classList.add("yes-rmv");

        //Add Txt To The Button
        yesButton.textContent = "Confirm";

        //Create Button No
        let noButton = document.createElement("button");

        //Add Class no-rmv To The Button
        noButton.classList.add("no-rmv");

        //Add Txt To The Button
        noButton.textContent = "Cancel";

        //Appen Yes And No Buttons In The Box
        boxChoice.appendChild(yesButton);
        boxChoice.appendChild(noButton);

        //Append h2Txt In rmvBxPopup 
        rmvBxPopup.appendChild(boxImageAndH2);

        //Append choices In bocChoice 
        rmvBxPopup.appendChild(boxChoice);

        //Append rmvBox In Body
        document.body.appendChild(rmvBxPopup);


    }
});

document.addEventListener("click", e => {

    if (e.target.classList.contains("yes-rmv") && currentRemoveBox) {

        //Remove This Friend
        currentRemoveBox.remove();

        //Remove The Popup
        document.querySelector(".remove-popup").remove();

        //Remove The Overlay
        document.querySelector(".overlay-projects").remove();

        //Set The Value Of The Box Friend To Null
        currentRemoveBox = null;

    }
    if (e.target.classList.contains("no-rmv") || e.target.classList.contains("overlay-projects")) {

        //Remove The Popup
        document.querySelector(".remove-popup").remove();

        //Remove The Overlay
        document.querySelector(".overlay-projects").remove();

        //Set The Value Of The Box Friend To Null
        currentRemoveBox = null;

    }
});

// Remove Move 
