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
    if (dropCategory === "Cars" || dropCategory === "Cars On Installments") {
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
    if (dropCategory === "Cars" || dropCategory === "Cars On Installments" || dropCategory === "Buses, Vans & Trucks" || dropCategory === "Rikshaw & Chingchi") {
        if (document.getElementById("Year").value !== "") {
            var year = document.getElementById("Year").value;

        }
        else {
            alert("please Add Year")
            return false;
        }
    }

    // For KMs Driven Div

    if (dropCategory === "Cars" || dropCategory === "Buses, Vans & Trucks" || dropCategory === "Rikshaw & Chingchi") {
        if (document.getElementById("KMs-driven").value !== "") {
            var driven = document.getElementById("KMs-driven").value;
        }
        else {
            alert("please Add KMs driven")
            return false;
        }
    }

    // For Fuel Options

    if (dropCategory === "Cars") {
        var fuel = document.getElementsByName("fuel");
        if (fuel[0].checked) {
            var fuelType = "CNG";
        }
        else if (fuel[1].checked) {
            var fuelType = "Diesel";
        }
        else if (fuel[2].checked) {
            var fuelType = "Hybrid";
        }
        else if (fuel[3].checked) {
            var fuelType = "LPG";
        }
        else if (fuel[4].checked) {
            var fuelType = "Petrol";
        }
        if (fuelType == undefined) {
            alert("please Select Fuel")
            return false
        }
        else {
        }
    }

    // for Condition options

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

    // for product Registerd city
    if (dropCategory === "Cars On Installments") {
        var transmission = document.getElementsByName("transmission");
        if (transmission[0].checked) {
            var transmissionType = "Automatic";
        }
        else if (transmission[1].checked) {
            var transmissionType = "Manual";
        }
        if (transmissionType == undefined) {
            alert("please Select transmission")
            return false
        }
        else {
        }
    }

    // for your product is register or not
    if (dropCategory === "Cars On Installments") {
        var Registered = document.getElementsByName("Registered");
        if (Registered[0].checked) {
            var isRegistered = "yes";
        }
        else if (Registered[1].checked) {
            var isRegistered = "no";
        }
        if (isRegistered == undefined) {
            alert("please Select you product is register or not")
            return false
        }
        else {
        }
    }

    // For Down Payment Div
    if (dropCategory === "Cars On Installments") {
        if (document.getElementById("Payment").value !== "") {
            var Payment = document.getElementById("Payment").value;

        }
        else {
            alert("please Add Down Payment")
            return false;
        }
    }

    // For Monthly Installment Div
    if (dropCategory === "Cars On Installments") {
        if (document.getElementById("Installment").value !== "") {
            var Installment = document.getElementById("Installment").value;

        }
        else {
            alert("please Add Monthly Installment ")
            return false;
        }
    }

    // For Installment Plan Div
    if (dropCategory === "Cars On Installments") {
        var a = document.getElementById("Plan");
        var plan = a.options[a.selectedIndex].value;

        if (plan !== "select") {

        }
        else {
            alert("please select Installment Plan")
            return false;
        }
    }

    // For Financer Type
    if (dropCategory === "Cars On Installments") {
        var Financer = document.getElementsByName("FinancerType");
        if (Financer[0].checked) {
            var FinancerType = "Bank";
        }
        else if (Financer[1].checked) {
            var FinancerType = "Non Banking Company";
        }
        if (FinancerType == undefined) {
            alert("please Select Financer Type")
            return false
        }
        else {

        }
    }

    // For Transaction Type
    if (dropCategory === "Cars On Installments") {
        var Transaction = document.getElementsByName("TransactionType");
        if (Transaction[0].checked) {
            var TransactionType = "Financing";
        }
        else if (Transaction[1].checked) {
            var TransactionType = "Leasing";
        }
        if (TransactionType == undefined) {
            alert("please Select Transaction Type")
            return false
        }
        else {

        }
    }

    // For Register In Div
    if (dropCategory === "Cars") {
        var z = document.getElementById("Register");
        var register = z.options[z.selectedIndex].value;

        if (register !== "select") {

        }
        else {
            alert("please select city of register")
            return false;
        }
    }

    // For Type
    if (dropCategory === "Spare Parts") {
        var type = document.getElementsByName("type");
        if (type[0].checked) {
            var PartsType = "Car Parts";
        }
        else if (type[1].checked) {
            var PartsType = "Other Parts";
        }
        if (PartsType == undefined) {
            alert("please Select Spare Parts Type")
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

    if (dropCategory === "Cars") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            ProductBy: make,
            Year : year,
            KMsDriven : driven,
            Fuel: fuel,
            condition: conditionType,
            RegisteredCity: register,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }
    else if (dropCategory === "Cars On Installments") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            ProductBy: make,
            Year : year,
            condition: conditionType,
            Transmission: transmissionType,
            isRegistered: isRegistered,
            DownPayment : Payment,
            MonthlyIns: Installment,
            InstallmentPlan : plan,
            FinancerType : FinancerType,
            TransactionType: TransactionType,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }
    else if (dropCategory === "Car Accessories" || dropCategory === "Other Vehicles") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            condition: conditionType,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }
    else if (dropCategory === "Spare Parts") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            condition: conditionType,
            PartOf: PartsType,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }
    else if (dropCategory === "Buses, Vans & Trucks" || dropCategory === "Rikshaw & Chingchi") {
        firebase.database().ref("users/" + userId).child("posts/" + MainCategory + "/" + dropCategory + "/" + newPostKey).set({
            Year : year,
            KMsDriven : driven,
            condition: conditionType,
            title: title,
            description: description,
            price: price,
            state: state,
        })
    }


    // // then push complete post in All post node with userID

    if (dropCategory === "Cars") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            ProductBy: make,
            Year : year,
            KMsDriven : driven,
            Fuel: fuel,
            condition: conditionType,
            RegisteredCity: register,
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
    else if (dropCategory === "Cars On Installments") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            ProductBy: make,
            Year : year,
            condition: conditionType,
            Transmission: transmissionType,
            isRegistered: isRegistered,
            DownPayment : Payment,
            MonthlyIns: Installment,
            InstallmentPlan : plan,
            FinancerType : FinancerType,
            TransactionType: TransactionType,
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
    else if (dropCategory === "Car Accessories" || dropCategory === "Other Vehicles") {
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
    else if (dropCategory === "Spare Parts") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            condition: conditionType,
            PartOf: PartsType,
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
    else if (dropCategory === "Buses, Vans & Trucks" || dropCategory === "Rikshaw & Chingchi") {
        firebase.database().ref("Allposts/" + MainCategory).child(dropCategory + "/" + newPostKey).set({
            Year : year,
            KMsDriven : driven,
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

