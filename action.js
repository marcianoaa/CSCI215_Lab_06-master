
function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function checkAge() {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');

    var userAge = document.getElementById("age");
    console.log(userAge.value);
    console.log(userAge.value.length);

    if(  userAge.value.includes(".") || userAge.value.length > 3) {
        document.getElementById("age").style.backgroundColor = "red";
        console.log("changed color to red");
    } else {
        document.getElementById("age").style.backgroundColor = "";
        console.log("changed color to white");
    }
}



function checkName(){
    var regExp = new RegExp("<");

    var userName = document.getElementById("name");
    console.log(userName.value);

    if (regExp.test(userName.value)) {
        document.getElementById("name").style.backgroundColor = "red";
        console.log("changed color to red");
    }
    else{
        document.getElementById("name").style.backgroundColor = "";
        console.log("changed color to white");
    }
}

function validate() {
    var email = document.getElementById("email");
    var isEmailGood =  checkEmail(email.value);

    if (isEmailGood){
        myAjaxFunction();
    }
    else{
        alert("The subscription could not be processed. Please check the information again.")
    }

}

function myAjaxFunction() {
    alert("The AJAX has been made!");
    console.clear();
}