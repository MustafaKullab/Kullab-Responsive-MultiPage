
//Yearly Targets Move

// Select Yearly Targets Section 
let yearlyTargets = document.querySelector(".yearly-targets");

//Select All Span In Progress 
let yearlyTargetsSpan = document.querySelectorAll(".target-box .details .progress span");

window.onscroll = function () {

    //Var To Determine The Top Height Of The Section
    let yearlyTargetsTop = yearlyTargets.offsetTop;

    //Var To Determine The Height Of The Section
    let yearlyTargetsHeight = yearlyTargets.offsetHeight;

    //Var To Determine The Height Of The Window 
    let windowHeight = this.innerHeight;

    //Var To Determine The Value Of Current Scroll 
    let windowCurrentScroll = this.pageYOffset;

    if (windowCurrentScroll > (yearlyTargetsTop + yearlyTargetsHeight) - windowHeight) {
        yearlyTargetsSpan.forEach(span => {

            //Fill Each Span 
            span.style.width = span.dataset.progress;
        })
    }
}
//Yearly Targets Move 

// ***************************************************************************************

//Last Tasks Move

//Select All Box Tasks
let taskBox = document.querySelectorAll(".tasks-box .box");

//Select All Trash Icone 
let trashIcon = document.querySelectorAll(".tasks-box .box .icon .delete");

// Loop On All Trash Icon 
trashIcon.forEach(trash => {

    //When Click On Any Trash Icon Except Disable Icon
    trash.addEventListener("click", e => {

        if (!e.target.parentElement.parentElement.classList.contains("disable")) {

            //Remove The Parent Element Of Trash Container
            e.target.parentElement.parentElement.remove();
        }
    });
});

//Last Tasks Move

// ***************************************************************************************

// ***************************************************************************************
// Quick Draft Move 
//Select The Input Title 
let titleInput = document.querySelector(".quick-draft form input");

//Select Text Area Element
let textArea = document.querySelector(".quick-draft form textarea");

//When Type Any Thing In titleInput
titleInput.oninput = function () {

    // Set The Value In sessionStorage
    sessionStorage.setItem("title-input", titleInput.value);

}

//When Type Any Thing In textArea
textArea.oninput = function () {

    // // Set The Value In sessionStorage
    sessionStorage.setItem("text-area", textArea.value);
}


//If There Is Value On Session Storage 
if (sessionStorage.getItem("title-input") !== null) {

    //Put The Value In The Input Field
    titleInput.value = sessionStorage.getItem("title-input");
}

//If There Is Value On Session Storage
if (sessionStorage.getItem("text-area") !== null) {

    //Put The Value In The Input Field
    textArea.value = sessionStorage.getItem("text-area");
}
// Quick Draft Move
// ***************************************************************************************
