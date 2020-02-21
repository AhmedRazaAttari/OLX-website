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

    // for Ad Type
    var Ad = document.getElementsByName("Adtype");
    if (Ad[0].checked) {
        var Adtype = "CVs & Resumes";
    }
    else if (Ad[1].checked) {
        var Adtype = "Job Offers";
    }
    if (Adtype == undefined) {
        alert("please Select Ad Type")
        return false
    }
    else {
    }

    // for Job Position
    var Position = document.getElementsByName("Positiontype");
    if (Position[0].checked) {
        var Positiontype = "Contract";
    }
    else if (Position[1].checked) {
        var Positiontype = "Full time";
    }
    else if (Position[2].checked) {
        var Positiontype = "Part time";
    }
    else if (Position[3].checked) {
        var Positiontype = "temporary";
    }
    if (Positiontype == undefined) {
        alert("please Select Job Position")
        return false
    }
    else {
    }

    // for Salary Period
    var Salary = document.getElementsByName("Salaryperiod");
    if (Salary[0].checked) {
        var Salaryperiod = "Hourly";
    }
    else if (Salary[1].checked) {
        var Salaryperiod = "Monthly";
    }
    else if (Salary[2].checked) {
        var Salaryperiod = "Weekly";
    }
    else if (Salary[3].checked) {
        var Salaryperiod = "Yearly";
    }
    if (Salaryperiod == undefined) {
        alert("please Select Salary Period")
        return false
    }
    else {
    }

    // For SalaryFrom
    if (document.getElementById("Salaryfrom").value !== "") {
        var Salaryfrom = document.getElementById("Salaryfrom").value;
    }
    else {

    }

    // For SalaryTo
    if (document.getElementById("Salaryto").value !== "") {
        var Salaryto = document.getElementById("Salaryto").value;
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

    if (Salaryfrom !== undefined && Salaryto !== undefined) {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            Adtype: Adtype,
            Position: Positiontype,
            Salaryperiod: Salaryperiod,
            Salaryfrom: Salaryfrom,
            Salaryto: Salaryto,
            title: title,
            description: description,
            state: state,
        })
    }
    else{
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            Adtype: Adtype,
            Position: Positiontype,
            Salaryperiod: Salaryperiod,
            title: title,
            description: description,
            state: state,
        })
    }


    // // then push complete post in All post node with userID

    if(Salaryfrom !== undefined && Salaryto !== undefined){
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            Adtype: Adtype,
            Position: Positiontype,
            Salaryperiod: Salaryperiod,
            Salaryfrom: Salaryfrom,
            Salaryto: Salaryto,
            title: title,
            description: description,
            state: state,
            PostBy: userId
        }).then(() => {
            location.reload()
        })
    }
    else{
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            Adtype: Adtype,
            Position: Positiontype,
            Salaryperiod: Salaryperiod,
            title: title,
            description: description,
            state: state,
            PostBy: userId
        }).then(() => {
            location.reload()
        })
    }
    
        

}

