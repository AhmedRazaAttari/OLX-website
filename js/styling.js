
$('#testing #upperCategory').click(function (e) {
    var txt = $(e.target).text();
    console.log(txt)
    localStorage.setItem("mainCategory", txt)
});

$('#testingDrop a').click(function (e) {
    var txt2 = $(e.target).text();
    console.log(txt2)
    localStorage.setItem("dropCategory", txt2);
});

if ($("#MainCategory").length > 0) {
    document.getElementById("MainCategory").innerHTML = localStorage.getItem("mainCategory");
    var secondCat = document.getElementById("dropCategory").innerHTML = localStorage.getItem("dropCategory");
}


    if (secondCat === "Tablets") {
        $("#condition").show();
        $("#MakeBrand").hide();
        $("#type").show();
        $("#SecondCond").hide()
    }
    else if (secondCat === "Accessories") {
        $("#condition").show();
        $("#MakeBrand").hide();
        $("#type").hide();
        $("#SecondCond").show()
    }
    else if (secondCat === "Mobile Phones") {
        $("#condition").show();
        $("#MakeBrand").show();
        $("#type").hide();
        $("#SecondCond").hide();
    }
    else if (secondCat === "Cars") {
        $("#MakeBrand").show();
        $("#yearDiv").show();
        $("#drivenDiv").show();
        $("#fuel").show();
        $("#condition").show();
        $("#transmission").hide();
        $("#Registered").hide();
        $("#DownPayment").hide();
        $("#Installment").hide();
        $("#InstallmentPlan").hide();
        $("#FinancerType").hide();
        $("#TransactionType").hide();
        $("#RegisterIn").show();
        $("#type").hide();
    }
    else if (secondCat === "Cars On Installments") {
        $("#MakeBrand").show();
        $("#yearDiv").show();
        $("#drivenDiv").hide();
        $("#fuel").hide();
        $("#condition").show();
        $("#transmission").show();
        $("#Registered").show();
        $("#DownPayment").show();
        $("#Installment").show();
        $("#InstallmentPlan").show();
        $("#FinancerType").show();
        $("#TransactionType").show();
        $("#RegisterIn").hide();
        $("#type").hide();
    }
    else if (secondCat === "Car Accessories") {
        $("#MakeBrand").hide();
        $("#yearDiv").hide();
        $("#drivenDiv").hide();
        $("#fuel").hide();
        $("#condition").show();
        $("#transmission").hide();
        $("#Registered").hide();
        $("#DownPayment").hide();
        $("#Installment").hide();
        $("#InstallmentPlan").hide();
        $("#FinancerType").hide();
        $("#TransactionType").hide();
        $("#RegisterIn").hide();
        $("#type").hide();
    }
    else if (secondCat === "Spare Parts") {
        $("#MakeBrand").hide();
        $("#yearDiv").hide();
        $("#drivenDiv").hide();
        $("#fuel").hide();
        $("#condition").show();
        $("#transmission").hide();
        $("#Registered").hide();
        $("#DownPayment").hide();
        $("#Installment").hide();
        $("#InstallmentPlan").hide();
        $("#FinancerType").hide();
        $("#TransactionType").hide();
        $("#RegisterIn").hide();
        $("#type").show();
    }
    else if (secondCat === "Buses, Vans & Trucks") {
        $("#MakeBrand").hide();
        $("#yearDiv").show();
        $("#drivenDiv").show();
        $("#fuel").hide();
        $("#condition").show();
        $("#transmission").hide();
        $("#Registered").hide();
        $("#DownPayment").hide();
        $("#Installment").hide();
        $("#InstallmentPlan").hide();
        $("#FinancerType").hide();
        $("#TransactionType").hide();
        $("#RegisterIn").hide();
        $("#type").hide();
    }
    else if (secondCat === "Rikshaw & Chingchi") {
        $("#MakeBrand").hide();
        $("#yearDiv").show();
        $("#drivenDiv").show();
        $("#fuel").hide();
        $("#condition").show();
        $("#transmission").hide();
        $("#Registered").hide();
        $("#DownPayment").hide();
        $("#Installment").hide();
        $("#InstallmentPlan").hide();
        $("#FinancerType").hide();
        $("#TransactionType").hide();
        $("#RegisterIn").hide();
        $("#type").hide();
    }
    else if (secondCat === "Other Vehicles") {
        $("#MakeBrand").hide();
        $("#yearDiv").hide();
        $("#drivenDiv").hide();
        $("#fuel").hide();
        $("#condition").show();
        $("#transmission").hide();
        $("#Registered").hide();
        $("#DownPayment").hide();
        $("#Installment").hide();
        $("#InstallmentPlan").hide();
        $("#FinancerType").hide();
        $("#TransactionType").hide();
        $("#RegisterIn").hide();
        $("#type").hide();
    }
    else if (secondCat === "Land & Plots") {
        $("#type").show();
        $("#AreaUnit").show();
        $("#AreaDiv").show();
        $("#BedroomsDiv").hide();
        $("#BathroomsDiv").hide();
        $("#Furnished").hide();
        $("#FloorDiv").hide();
    }
    else if (secondCat === "Houses") {
        $("#type").hide();
        $("#AreaUnit").show();
        $("#AreaDiv").show();
        $("#BedroomsDiv").show();
        $("#BathroomsDiv").show();
        $("#Furnished").show();
        $("#FloorDiv").hide();
    }
    else if (secondCat === "Appartments & Flats") {
        $("#type").hide();
        $("#AreaUnit").show();
        $("#AreaDiv").show();
        $("#BedroomsDiv").show();
        $("#BathroomsDiv").show();
        $("#Furnished").show();
        $("#FloorDiv").show();
    }
    else if (secondCat === "Shops - Offices - Commercial Space") {
        $("#type").hide();
        $("#AreaUnit").show();
        $("#AreaDiv").show();
        $("#BedroomsDiv").hide();
        $("#BathroomsDiv").hide();
        $("#Furnished").hide();
        $("#FloorDiv").hide();
    }
    else if (secondCat === "Portions & Floors") {
        $("#type").hide();
        $("#AreaUnit").show();
        $("#AreaDiv").show();
        $("#BedroomsDiv").show();
        $("#BathroomsDiv").show();
        $("#Furnished").show();
        $("#FloorDiv").show();
    }
    else if (secondCat === "MotorCycles") {
        $("#MakeBrand").show();
        $("#yearDiv").show();
        $("#drivenDiv").hide();
        $("#condition").show();
    }
    else if (secondCat === "Spare Part") {
        $("#MakeBrand").hide();
        $("#yearDiv").hide();
        $("#drivenDiv").hide();
        $("#condition").show();
    }
    else if (secondCat === "Bicycles") {
        $("#MakeBrand").hide();
        $("#yearDiv").hide();
        $("#drivenDiv").hide();
        $("#condition").show();
    }
    else if (secondCat === "Scooters") {
        $("#MakeBrand").hide();
        $("#yearDiv").show();
        $("#drivenDiv").show();
        $("#condition").show();
    }
    else if (secondCat === "Education & Classes") {
        $("#type").show();
        $("#Secondtype").hide();
    }
    else if (secondCat === "Electronic & Computer Repair") {
        $("#type").hide();
        $("#Secondtype").show();
    }
    else if (secondCat === "Books & Magazines") {
        $("#type").show();
    }
    else if (secondCat === "Clothes") {
        $("#type").show();
    }
    else if (secondCat === "Footwear") {
        $("#type").show();
    }
    else if (secondCat === "Watches") {
        $("#type").show();
    }

    

if (window.location.pathname == '/index.html') {
    console.log("user location is index.html")

}
else if (window.location.pathname == '/pages/sale.html') {
    console.log("user location is sale.html")

    $(".mobileMenu").click(function () {
        $(".MobileDropdown").show();
        $(".VehicleDropdown").hide();
        $(".ProSaleDropdown").hide();
        $(".ProRentDropdown").hide();
        $(".BikeDropdown").hide();
        $(".ServicesDropdown").hide();
        $(".JobsDropdown").hide();
        $(".BookDropdown").hide();
        $(".FashionDropdown").hide();
    })
    $(".vehiclesMenu").click(function () {
        $(".VehicleDropdown").show();
        $(".MobileDropdown").hide();
        $(".ProSaleDropdown").hide();
        $(".ProRentDropdown").hide();
        $(".BikeDropdown").hide();
        $(".ServicesDropdown").hide();
        $(".JobsDropdown").hide();
        $(".BookDropdown").hide();
        $(".FashionDropdown").hide();
    })

    $(".ProSaleMenu").click(function () {
        $(".ProSaleDropdown").show();
        $(".MobileDropdown").hide();
        $(".VehicleDropdown").hide();
        $(".ProRentDropdown").hide();
        $(".BikeDropdown").hide();
        $(".ServicesDropdown").hide();
        $(".JobsDropdown").hide();
        $(".BookDropdown").hide();
        $(".FashionDropdown").hide();
    })

    $(".ProRentMenu").click(function () {
        $(".ProRentDropdown").show();
        $(".MobileDropdown").hide();
        $(".VehicleDropdown").hide();
        $(".ProSaleDropdown").hide();
        $(".BikeDropdown").hide();
        $(".ServicesDropdown").hide();
        $(".JobsDropdown").hide();
        $(".BookDropdown").hide();
        $(".FashionDropdown").hide();
    })

    $(".BikeMenu").click(function () {
        $(".BikeDropdown").show();
        $(".MobileDropdown").hide();
        $(".VehicleDropdown").hide();
        $(".ProSaleDropdown").hide();
        $(".ProRentDropdown").hide();
        $(".ServicesDropdown").hide();
        $(".JobsDropdown").hide();
        $(".BookDropdown").hide();
        $(".FashionDropdown").hide();
    })

    $(".ServicesMenu").click(function () {
        $(".ServicesDropdown").show();
        $(".MobileDropdown").hide();
        $(".VehicleDropdown").hide();
        $(".ProSaleDropdown").hide();
        $(".BikeDropdown").hide();
        $(".BikeDropdown").hide();
        $(".JobsDropdown").hide();
        $(".BookDropdown").hide();
        $(".FashionDropdown").hide();
    })

    $(".JobsMenu").click(function () {
        $(".JobsDropdown").show();
        $(".MobileDropdown").hide();
        $(".VehicleDropdown").hide();
        $(".ProSaleDropdown").hide();
        $(".BikeDropdown").hide();
        $(".ServicesDropdown").hide();
        $(".ServicesDropdown").hide();
        $(".BookDropdown").hide();
        $(".FashionDropdown").hide();
    })

    $(".BookMenu").click(function () {
        $(".BookDropdown").show();
        $(".MobileDropdown").hide();
        $(".VehicleDropdown").hide();
        $(".ProSaleDropdown").hide();
        $(".BikeDropdown").hide();
        $(".ServicesDropdown").hide();
        $(".JobsDropdown").hide();
        $(".JobsDropdown").hide();
        $(".FashionDropdown").hide();
    })

    $(".FashionMenu").click(function () {
        $(".FashionDropdown").show();
        $(".MobileDropdown").hide();
        $(".VehicleDropdown").hide();
        $(".ProSaleDropdown").hide();
        $(".BikeDropdown").hide();
        $(".ServicesDropdown").hide();
        $(".JobsDropdown").hide();
        $(".BookDropdown").hide();
        $(".BookDropdown").hide();
    })


}
else if (window.location.pathname == '/pages/My%20Aid.html') {
    console.log("user location is My Aid.html")

}
else if (window.location.pathname == '/pages/Setting.html') {

    $("#privacy").click(function () {
        $("#privacyTable").show();
        $("#NotifyTable").hide()
        $("#PersonalTable").hide()
    })

    $("#Notifications").click(function () {
        $("#privacyTable").hide();
        $("#PersonalTable").hide()
        $("#NotifyTable").show()
    })

    $("#general").click(function () {
        $("#privacyTable").hide();
        $("#NotifyTable").hide();
        $("#PersonalTable").show()
    })

    document.getElementById("NotifyTable").style.display = "none"
    document.getElementById("PersonalTable").style.display = "none"



    var userId = localStorage.getItem("uid");
    firebase.database().ref("users/" + userId).once("value")
        .then(function (snapshot) {
            document.getElementById("profilePic").src = snapshot.val().ProfilePic;
            document.getElementById("email").innerText = snapshot.val().useremail;
            document.getElementById("username").innerText = snapshot.val().username;
        });
}
