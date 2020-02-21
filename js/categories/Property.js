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


    // For Type
    if (dropCategory === "Land & Plots") {
        var typed = document.getElementsByName("LandType");
        if (typed[0].checked) {
            var LandType = "Agricultural Land";
        }
        else if (typed[1].checked) {
            var LandType = "Commercial Plots";
        }
        else if (typed[2].checked) {
            var LandType = "Files";
        }
        else if (typed[3].checked) {
            var LandType = "Industrial Land";
        }
        else if (typed[4].checked) {
            var LandType = "Residental Plots";
        }
        if (LandType == undefined) {
            alert("please Select Type")
            return false
        }
        else {
        }
    }


    // For Area Unit
    var AreaUnit = document.getElementsByName("AreaUnit");
    if (AreaUnit[0].checked) {
        var UnitType = "Kanal";
    }
    else if (AreaUnit[1].checked) {
        var UnitType = "Marla";
    }
    else if (AreaUnit[2].checked) {
        var UnitType = "Square Feet";
    }
    else if (AreaUnit[3].checked) {
        var UnitType = "Square Meter";
    }
    else if (AreaUnit[4].checked) {
        var UnitType = "Square Yard";
    }
    if (UnitType == undefined) {
        alert("please Select Area Unit")
        return false
    }
    else {
    }


    // For Area Div
    if (document.getElementById("Area").value !== "") {
        var Area = document.getElementById("Area").value;
    }
    else {
        alert("please Add Area")
        return false;
    }


    // For Bedrooms Div
    if (dropCategory === "Portions & Floors" || dropCategory === "Appartments & Flats" || dropCategory === "Houses") {
        var bed = document.getElementById("Bedrooms");
        var Bedrooms = bed.options[bed.selectedIndex].value;

        if (Bedrooms !== "select") {
        }
        else {
            alert("please select Bedrooms")
            return false;
        }


        // For Bathroom Div
        var bath = document.getElementById("Bathrooms");
        var Bathrooms = bath.options[bath.selectedIndex].value;

        if (Bathrooms !== "select") {
        }
        else {
            alert("please select Bathroom")
            return false;
        }


        // For Furnished
        var Furnished = document.getElementsByName("Furnished");
        if (Furnished[0].checked) {
            var isFurnished = "No";
        }
        else if (Furnished[1].checked) {
            var isFurnished = "Yes";
        }
        if (isFurnished == undefined) {
            alert("please Select Furnished")
            return false
        }
        else {
        }
    }

    if (dropCategory === "Portions & Floors" || dropCategory === "Appartments & Flats") {
        // For floor Div
        var floor = document.getElementById("Floor");
        var selectedFloor = floor.options[floor.selectedIndex].value;

        if (selectedFloor !== "select") {
        }
        else {
            alert("please select floor")
            return false;
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

    if (dropCategory === "Land & Plots") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            Type: LandType,
            AreaUnit: UnitType,
            Area: Area,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }

    else if (dropCategory === "Houses") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            AreaUnit: UnitType,
            Area: Area,
            Bedrooms: Bedrooms,
            Bathrooms: Bathrooms,
            Furnished: isFurnished,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }

    else if (dropCategory === "Appartments & Flats" || dropCategory === "Portions & Floors") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            AreaUnit: UnitType,
            Area: Area,
            Bedrooms: Bedrooms,
            Bathrooms: Bathrooms,
            Furnished: isFurnished,
            FloorLevel: selectedFloor,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }

    else if (dropCategory === "Shops - Offices - Commercial Space") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            AreaUnit: UnitType,
            Area: Area,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }


    // // then push complete post in All post node with userID

    if (dropCategory === "Land & Plots") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            Type: LandType,
            AreaUnit: UnitType,
            Area: Area,
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
    else if (dropCategory === "Houses") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            AreaUnit: UnitType,
            Area: Area,
            Bedrooms: Bedrooms,
            Bathrooms: Bathrooms,
            Furnished: isFurnished,
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
    else if (dropCategory === "Appartments & Flats" || dropCategory === "Portions & Floors") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            AreaUnit: UnitType,
            Area: Area,
            Bedrooms: Bedrooms,
            Bathrooms: Bathrooms,
            Furnished: isFurnished,
            FloorLevel: selectedFloor,
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
    else if (dropCategory === "Shops - Offices - Commercial Space") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            AreaUnit: UnitType,
            Area: Area,
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

