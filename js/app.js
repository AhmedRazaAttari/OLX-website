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
console.log(firebase.auth())
console.log(firebase.database());

$("#login").click(function (e) {
    $("#loginform").show();
    document.body.style.overflow = "hidden";
    document.body.style.cursor = "default";
    e.stopPropagation();
});

$("#loginform").click(function (e) {
    e.stopPropagation();
});

$(document).click(function () {
    $("#loginform").hide();
    document.body.style.overflow = "auto";
    document.body.style.cursor = "auto";
});

$("#close").click(function () {
    $("#loginform").hide();
    document.body.style.overflow = "auto";
    document.body.style.cursor = "auto";
})







function fblogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user)
        console.log(user.email);
        console.log(user.displayName);
        console.log(user.photoURL);
        console.log(user.uid);
        localStorage.setItem("uid", user.uid)

        firebase.database().ref('users/' + user.uid).set({
            username: user.displayName,
            useremail: user.email,
            ProfilePic: user.photoURL,
            userFrom: "Facebook"
        })
        location.reload()

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        console.log(errorMessage)
        // ...
    });
}

function GoogleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user)
        console.log(user.email);
        console.log(user.displayName);
        console.log(user.photoURL);
        console.log(user.uid);
        localStorage.setItem("uid", user.uid)

        firebase.database().ref('users/' + user.uid).set({
            username: user.displayName,
            useremail: user.email,
            ProfilePic: user.photoURL,
            userFrom: "Google"
        })
        location.reload()

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorMessage)
    });
}


function emaillogin() {
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "block";
}

function Next() {

    var inputValue = document.getElementById("email").value;

    document.getElementById("firstStep").style.display = "none";
    document.getElementById("secondStep").style.display = "block";

    var actionCodeSettings = {

        url: 'http://localhost:8000/index.html',
        // This must be true.
        handleCodeInApp: true,
    };
    firebase.auth().sendSignInLinkToEmail(inputValue, actionCodeSettings)
        .then(function () {
            console.log("Email link send to your email please check")
            window.localStorage.setItem('emailForSignIn', inputValue);
        })
        .catch(function (error) {
            // Some error occurred, you can inspect the code: error.code
            console.log(error);
        });

    // Confirm the link is a sign-in with email link.
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {

        var email = window.localStorage.getItem('emailForSignIn');
        
        firebase.auth().signInWithEmailLink(email, window.location.href)
            .then(function (result) {
                console.log(result)
                console.log("user signin Succesfully");
                // Clear email from storage.
                window.localStorage.removeItem('emailForSignIn');
            })
            .catch(function (error) {
                console.log("signin not succesfull")
                console.log(error)
            });
    }

}


firebase.database().ref("Allposts").once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        childSnapshot.forEach(function (anotherChildSnapshot) {
            anotherChildSnapshot.forEach(function (anAnotherChildSnapshot) {
            var childKey = anAnotherChildSnapshot.key;
            var childData = anAnotherChildSnapshot.val();

            console.log(childData)
            console.log(childData.PostBy);

            // ...

            if (childData.PostBy === firebase.auth().currentUser.uid) {
                console.log("Current User Post")
            }
            else {
                var mainDiv = document.getElementById("Allposts");
                var underDiv = document.createElement("div");
                underDiv.setAttribute("class", "dynamicPost");
                var img = document.createElement("img");
                img.src = "http://localhost:8000/images/car%20img.jpg";
                img.setAttribute("height", "170px");
                img.setAttribute("width", "100%")
                var detailDiv = document.createElement("div");
                detailDiv.setAttribute("class", "detail");
                var detailUnderDiv = document.createElement("div");
                var h3 = document.createElement("h3");
                var firstb = document.createElement("b");
                firstb.innerText = "Rs" + " " + childData.price;
                var secondb = document.createElement("b");
                secondb.innerText = childData.title + "\n";
                var firstp = document.createElement("p");
                var maxLength = 18;
                var trimmedString = childData.description.substr(0, maxLength);
                firstp.innerText = trimmedString + "..." + "\n";
                var secondp = document.createElement("p");
                secondp.innerText = childData.state + "\n";
                var iconDiv = document.createElement("div");
                var a = document.createElement("a");
                a.setAttribute("href", "#")
                a.setAttribute("id", "heart")
                var i = document.createElement("i");
                i.setAttribute("class", "fas fa-heart");
                mainDiv.appendChild(underDiv);
                underDiv.appendChild(img);
                underDiv.appendChild(detailDiv);
                detailDiv.appendChild(detailUnderDiv);
                detailUnderDiv.appendChild(h3);
                h3.appendChild(firstb);
                detailUnderDiv.appendChild(secondb);
                detailUnderDiv.appendChild(firstp);
                detailUnderDiv.appendChild(secondp);
                detailDiv.appendChild(iconDiv);
                iconDiv.appendChild(a);
                a.appendChild(i)

            }
        })
    })
    });
});


function Deactivate() {
    alert("deactivate")
    var user = firebase.auth().currentUser;
    user.delete().then(function () {
        // User deleted.
        console.log("user is Deleted");
    }).catch(function (error) {
        // An error happened.
        console.log("nahi hua jani error a gya".error)
    });

}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("comment").style.display = "";
        document.getElementById("bell").style.display = "";
        document.getElementById("moreOption").style.display = "";
        document.getElementById("saleBtn").style.pointerEvents = "";
        document.getElementById("login").style.display = "none";
        if(window.location.pathname == '/index.html'){
            document.getElementById("loginform").style.display = "none";
        }
    } else {
        document.getElementById("comment").style.display = "none";
        document.getElementById("bell").style.display = "none";
        document.getElementById("moreOption").style.display = "none";
        document.getElementById("saleBtn").style.pointerEvents = "none"
        if(window.location.pathname == '/index.html'){
            document.getElementById("loginform").style.display = "none";
        }
        document.getElementById("login").style.display = "";
    }
});


function logout() {
    firebase.auth().signOut().then(function () {
        console.log("Sign-out successful.")
        localStorage.removeItem("uid")
        window.location.href = "../index.html"
    }).catch(function (error) {
        console.log("An error happened".error);
    });
}

