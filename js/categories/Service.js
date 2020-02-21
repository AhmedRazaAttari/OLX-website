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


    // For First Type
    if (dropCategory === "Education & Classes") {
        var type = document.getElementsByName("type");
        if (type[0].checked) {
            var firstType = "Computer";
        }
        else if (type[1].checked) {
            var firstType = "Language Classes";
        }
        else if (type[2].checked) {
            var firstType = "Music & Dance";
        }
        else if (type[3].checked) {
            var firstType = "Tutoring";
        }
        else if (type[4].checked) {
            var firstType = "Other";
        }
        if (firstType == undefined) {
            alert("please Select Type")
            return false
        }
        else {
        }
    }


    // For Second Type
    if (dropCategory === "Electronic & Computer Repair") {
        var typed = document.getElementsByName("Secondtype");
        if (typed[0].checked) {
            var SecondType = "Computer";
        }
        else if (typed[1].checked) {
            var SecondType = "Home Appliances";
        }
        else if (typed[2].checked) {
            var SecondType = "Mobile";
        }
        else if (typed[3].checked) {
            var SecondType = "Other Electronics";
        }
        if (SecondType == undefined) {
            alert("please Select Type")
            return false
        }
        else {
        }
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

    if (dropCategory === "Education & Classes") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            Type: firstType,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }

    else if (dropCategory === "Electronic & Computer Repair") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            Type: SecondType,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }
    else if (dropCategory === "Car Rental" || dropCategory === "Travel & Visa" || dropCategory === "Drivers & Taxi" || dropCategory === "Web Development" || dropCategory === "Movers & Packers" || dropCategory === "Home & Office Repair") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }

    // // then push complete post in All post node with userID

    if (dropCategory === "Education & Classes") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            Type: firstType,
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
    else if (dropCategory === "Electronic & Computer Repair") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            Type: SecondType,
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
    else if (dropCategory === "Car Rental" || dropCategory === "Travel & Visa" || dropCategory === "Drivers & Taxi" || dropCategory === "Web Development" || dropCategory === "Movers & Packers" || dropCategory === "Home & Office Repair") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
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

