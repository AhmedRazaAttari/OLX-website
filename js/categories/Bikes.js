// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBwOPvUmYdPWyC0dHh0-MK8NQxKnDhcX4s",
    authDomain: "olx-app-10351.firebaseapp.com",
    databaseURL: "https://olx-app-10351.firebaseio.com",
    projectId: "olx-app-10351",
    storageBucket: "olx-app-10351.appspot.com",
    messagingSenderId: "69343859866",
    appId: "1:69343859866:web:d02302c6791a8857"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var userId = localStorage.getItem("uid");
firebase.database().ref("users/" + userId).once("value")
    .then(function (snapshot) {
        document.getElementById("Profile").src = snapshot.val().ProfilePic;
        document.getElementById("UserName").value = snapshot.val().username;
    });


function SubmitAd() {

    var userId = localStorage.getItem("uid");
    var newPostKey = firebase.database().ref().child('posts').push().key;
    var dropCategory = document.getElementById("dropCategory").innerText;
    var MainCategory = document.getElementById("MainCategory").innerText;


    // For Product Related which Brand
    if (dropCategory === "MotorCycles") {
        var e = document.getElementById("Make");
        var make = e.options[e.selectedIndex].value;

        if (make !== "select") {

        }
        else {
            alert("please select Make")
            return false;
        }
    }

    // For year Div
    if (dropCategory === "MotorCycles" || dropCategory === "Scooters") {
        if (document.getElementById("Year").value !== "") {
            var year = document.getElementById("Year").value;
        }
        else {
            alert("please Add Year")
            return false;
        }
    }

    // For KMs Driven Div
    if (dropCategory === "Scooters") {
        if (document.getElementById("KMs-driven").value !== "") {
            var driven = document.getElementById("KMs-driven").value;
        }
        else {
            alert("please Add KMs driven")
            return false;
        }
    }


    // for Condition options
    var condition = document.getElementsByName("Condition");
    if (condition[0].checked) {
        var conditionType = "New";
    }
    else if (condition[1].checked) {
        var conditionType = "Used";
    }
    if (conditionType == undefined) {
        alert("please Select Condition")
        return false
    }
    else {
    }

    // For Product Title
    if (document.getElementById("title").value !== "") {
        var title = document.getElementById("title").value;
    }
    else {
        alert("please Add Title")
        return false;
    }

    // For Description
    if (document.getElementById("description").value !== "") {
        var description = document.getElementById("description").value;
        var lengthofDes = desWordLength - description.length
        document.getElementById("desWordLength").innerHTML = lengthofDes;
        if (description.length < 20) {
            alert("Decription Should be 50 words")
            return false;
        }
        else {

        }
    }
    else {
        alert("please Add description")
        return false;
    }

    // For Product Price

    if (document.getElementById("price").value !== "") {
        var price = document.getElementById("price").value;
        if (price < 2500) {
            alert("Price Should Be Greater Then 2500");
            return false;
        }
        else {
        }
    }
    else {
        alert("please Add Price")
        return false;
    }


    var firstImg = document.getElementById("firstImg").value;
    var secondImg = document.getElementById("secondImg").value;
    var thirdImg = document.getElementById("thirdImg").value;
    var forthImg = document.getElementById("forthImg").value;
    var fifthImg = document.getElementById("fifthImg").value;
    var sixImg = document.getElementById("sixImg").value;
    var sevenImg = document.getElementById("sevenImg").value;
    var eightImg = document.getElementById("eightImg").value;

    if (firstImg !== "" || secondImg !== "" || thirdImg !== "" || forthImg !== "" || fifthImg !== "" || sixImg !== "" || sevenImg !== "" || eightImg !== "") {

    }
    else {
        alert("Please Select atleast One Images")
        return false;
    }

    // For state
    var e = document.getElementById("state");
    var state = e.options[e.selectedIndex].value;

    if (state !== "select") {
    }
    else {
        alert("please Select State")
        return false;
    }



    // // Push Data into Firebase

    // // first push Complete post with condition in CurrentUser node

    if (dropCategory === "MotorCycles") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            ProductBy: make,
            Year : year,
            condition: conditionType,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }
    else if (dropCategory === "Spare Part" || dropCategory === "Bicycles") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            condition: conditionType,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }
    else if (dropCategory === "Scooters") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            Year : year,
            KMsDriven: driven,
            condition: conditionType,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }


    // // then push complete post in All post node with userID

    if (dropCategory === "MotorCycles") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            ProductBy: make,
            Year : year,
            condition: conditionType,
            title: title,
            description: description,
            price: price,
            state: state,
            PostBy: userId
        })
        .then(() => {
            location.reload()
        })
    }
    else if (dropCategory === "Spare Part" || dropCategory === "Bicycles") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            condition: conditionType,
            title: title,
            description: description,
            price: price,
            state: state,
            PostBy: userId
        })
        .then(() => {
            location.reload()
        })
    }
    else if (dropCategory === "Scooters") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            Year : year,
            KMsDriven: driven,
            condition: conditionType,
            title: title,
            description: description,
            price: price,
            state: state,
            PostBy: userId
        })
        .then(() => {
            location.reload()
        })
    }
    
}

