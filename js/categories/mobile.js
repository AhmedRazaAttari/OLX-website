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

var desWordLength = document.getElementById("desWordLength").innerHTML = 1000;
console.log(desWordLength)
var userId = localStorage.getItem("uid");
console.log(userId);
firebase.database().ref("users/" + userId).once("value")
    .then(function (snapshot) {
        document.getElementById("Profile").src = snapshot.val().ProfilePic;
        document.getElementById("UserName").value = snapshot.val().username;
    });

function SubmitAd() {

    var userId = localStorage.getItem("uid");
    var newPostKey = firebase.database().ref().child('posts').push().key;
    var MainCategory = document.getElementById("MainCategory").innerText;
    var dropCategory = document.getElementById("dropCategory").innerHTML;

    // products condition
    var condition = document.getElementsByName("Condition");
    if (condition[0].checked) {
        var conditionType = "new";
    }
    else if (condition[1].checked) {
        var conditionType = "used";
    }
    if (conditionType == undefined) {
        alert("please Select Condition")
        return false
    }
    else {

    }

    //For Product Brand

    if (document.getElementById("dropCategory").innerHTML === "Tablets") {
        var brand = document.getElementsByName("brand");
        if (brand[0].checked) {
            var ProductBrand = "Apple";
        }
        else if (brand[1].checked) {
            var ProductBrand = "Dany Tab";
        }
        else if (brand[2].checked) {
            var ProductBrand = "Q Tab";
        }
        else if (brand[3].checked) {
            var ProductBrand = "Samsung";
        }
        else if (brand[4].checked) {
            var ProductBrand = "Other Tab";
        }
        if (ProductBrand == undefined) {
            alert("please Select Brand");
            return false;
        }
        else {

        }
    }

    // For Type
    if (document.getElementById("dropCategory").innerHTML === "Accessories") {
        var condition = document.getElementsByName("Condition2");
        if (condition[0].checked) {
            var condition2Type = "Mobile";
        }
        else if (condition[1].checked) {
            var condition2Type = "Tablets";
        }
        if (condition2Type == undefined) {
            alert("please Select type")
            return false
        }
        else {

        }
    }

    // for make means product made by which brand

    if (document.getElementById("dropCategory").innerHTML === "Mobile Phones") {
        var a = document.getElementById("Make");
        var make = a.options[a.selectedIndex].value;

        if (make !== "select") {

        }
        else {
            alert("please select Make")
            return false;
        }
    }


    // For Product Title
    if (document.getElementById("title").value !== "") {
        var title = document.getElementById("title").value;
        console.log(title)
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


    var firstImg = document.getElementById("firstImg");
    

    var firstImg = document.getElementById("firstImg").value;
    var secondImg = document.getElementById("secondImg").value;
    var thirdImg = document.getElementById("thirdImg").value;
    var forthImg = document.getElementById("forthImg").value;
    var fifthImg = document.getElementById("fifthImg").value;
    var sixImg = document.getElementById("sixImg").value;
    var sevenImg = document.getElementById("sevenImg").value;
    var eightImg = document.getElementById("eightImg").value;

    if (firstImg !== "" || secondImg !== "" || thirdImg !== "" || forthImg !== "" || fifthImg !== "" || sixImg !== "" || sevenImg !== "" || eightImg !== "") {
        if(firstImg){
            var OneImg = document.getElementById("firstImg")
            var file = OneImg.files[0];
            var storageRef = firebase.storage().ref('images/');
            var fileUpload = storageRef.child(MainCategory + "/" + file.name);
            fileUpload.put(file)
            .then(function (snapshot) {
                console.log(snapshot)
                console.log('Uploaded file!');
            }).then(() => {
                fileUpload.getDownloadURL().then(function(url) {
                    // Insert url into an <img> tag to "download"
                    console.log(url)
                })
            })
        }
        if(secondImg){
            var TwoImg = document.getElementById("secondImg")
            var file = TwoImg.files[0];
            var storageRef = firebase.storage().ref('images/');
            var fileUpload = storageRef.child(MainCategory + "/" + file.name);
            fileUpload.put(file)
            .then(function (snapshot) {
                console.log(snapshot)
                console.log('Uploaded file!');
            }).then(() => {
                fileUpload.getDownloadURL().then(function(url) {
                    // Insert url into an <img> tag to "download"
                    console.log(url)
                })
            })
        }
        if(thirdImg){
            var threeImg = document.getElementById("thirdImg")
            var file = threeImg.files[0];
            var storageRef = firebase.storage().ref('images/');
            var fileUpload = storageRef.child(MainCategory + "/" + file.name);
            fileUpload.put(file)
            .then(function (snapshot) {
                console.log(snapshot)
                console.log('Uploaded file!');
            }).then(() => {
                fileUpload.getDownloadURL().then(function(url) {
                    // Insert url into an <img> tag to "download"
                    console.log(url)
                })
            })
        }
        if(forthImg){
            var FourImg = document.getElementById("forthImg")
            var file = FourImg.files[0];
            var storageRef = firebase.storage().ref('images/');
            var fileUpload = storageRef.child(MainCategory + "/" + file.name);
            fileUpload.put(file)
            .then(function (snapshot) {
                console.log(snapshot)
                console.log('Uploaded file!');
            }).then(() => {
                fileUpload.getDownloadURL().then(function(url) {
                    // Insert url into an <img> tag to "download"
                    console.log(url)
                })
            })
        }
        if(fifthImg){
            var FiveImg = document.getElementById("fifthImg")
            var file = FiveImg.files[0];
            var storageRef = firebase.storage().ref('images/');
            var fileUpload = storageRef.child(MainCategory + "/" + file.name);
            fileUpload.put(file)
            .then(function (snapshot) {
                console.log(snapshot)
                console.log('Uploaded file!');
            }).then(() => {
                fileUpload.getDownloadURL().then(function(url) {
                    // Insert url into an <img> tag to "download"
                    console.log(url)
                })
            })
        }
    }
    else {
        alert("Please Select atleast One Images")
        return false;
    }

    // For state

    var e = document.getElementById("state");
    var strUser = e.options[e.selectedIndex].value;

    if (strUser !== "select") {

    }
    else {
        alert("please Select State")
        return false;
    }


    // Push Data into Firebase

    // first push Complete post with condition in CurrentUser node

    
    if (document.getElementById("dropCategory").innerHTML === "Tablets") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            condition: conditionType,
            brand: ProductBrand,
            title: title,
            description: description,
            price: price,
            state: strUser,
        })
    }
    else if (document.getElementById("dropCategory").innerHTML === "Accessories") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            condition: conditionType,
            Type: condition2Type,
            title: title,
            description: description,
            price: price,
            state: strUser,
        })
    }
    else if (document.getElementById("dropCategory").innerHTML === "Mobile Phones") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            condition: conditionType,
            MakeBy: make,
            title: title,
            description: description,
            price: price,
            state: strUser,
        })
    }
    else {
        console.log("error")
    }


    // then push complete post in All post with node with userID

    if (document.getElementById("dropCategory").innerText === "Tablets") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            condition: conditionType,
            brand: ProductBrand,
            title: title,
            description: description,
            price: price,
            state: strUser,
            PostBy: userId
        })
        // .then(() => {
        //     location.reload()
        // })
    }
    else if (document.getElementById("dropCategory").innerText === "Accessories") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            condition: conditionType,
            Type: condition2Type,
            title: title,
            description: description,
            price: price,
            state: strUser,
            PostBy: userId
        })
            .then(() => {
                location.reload()
            })
    }
    else if (document.getElementById("dropCategory").innerText === "Mobile Phones") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            condition: conditionType,
            MakeBy: make,
            title: title,
            description: description,
            price: price,
            state: strUser,
            PostBy: userId
        })
            .then(() => {
                location.reload()
            })
    }
    else {
        console.log("error")
    }


}

