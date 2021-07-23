console.log("hi")//test
//show a Message
window.alert("To Change the Mode From White to black Just click left in Nav on White or Black")

function black() {
    console.log("hey")//test
    document.getElementById("header").style.borderBottomColor = "white";//Header border color changing
    document.getElementById("body").style.backgroundColor = "black";//body background color changing
    document.getElementById("body").style.color = "white";//body color changing
    //changing the color of all the Anchor Tags
    document.getElementById("a").style.color = "white";
    document.getElementById("a1").style.color = "white";
    document.getElementById("a2").style.color = "white";
    document.getElementById("a3").style.color = "white";
    document.getElementById("a4").style.color = "white";
    document.getElementById("a5").style.color = "white";
    document.getElementById("a6").style.color = "white";
    document.getElementById("a7").style.color = "white";
    document.getElementById("a8").style.color = "white";
    document.getElementById("a9").style.color = "white";
    document.getElementById("a10").style.color = "white";
    document.getElementById("a10").style.backgroundColor = "black";
    //***************************************************** */
    document.getElementById("call").style.backgroundColor = "white"
    document.getElementById("hi").style.color = "black";
    /*fotos changing to the black mode */
    document.getElementById("f1-intro").setAttribute("src", "assets/img/blackmode/1.jpg");
    document.getElementById("f2-intro").setAttribute("src", "assets/img/blackmode/2.jpg");
    document.getElementById('f3-intro').setAttribute("src", "assets/img/blackmode/3.jpg");
    document.getElementById('f-show-1').setAttribute("src", "assets/img/blackmode/4.jpg");
    document.getElementById('f-show-2').setAttribute("src", "assets/img/blackmode/5.jpg");
    document.getElementById('f-show-3').setAttribute("src", "assets/img/blackmode/6.jpg");
    document.getElementById('f-show-4').setAttribute("src", "assets/img/blackmode/7.jpg");
    document.getElementById('f-show-5').setAttribute("src", "assets/img/blackmode/8.jpg");
}
/*End of the black Mode Function*/
/*This is the White Mode Function Recovery The Orginal Mode*/
function white() {
    document.getElementById("header").style.borderBottomColor = "black";//Header border color changing
    document.getElementById("body").style.backgroundColor = "white";//body background color changing
    document.getElementById("body").style.color = "black";//body color changing
    //changing the color of all the Anchor Tags
    document.getElementById("a").style.color = "black";
    document.getElementById("a1").style.color = "black";
    document.getElementById("a2").style.color = "black";
    document.getElementById("a3").style.color = "black";
    document.getElementById("a4").style.color = "black";
    document.getElementById("a5").style.color = "black";
    document.getElementById("a6").style.color = "black";
    document.getElementById("a7").style.color = "black";
    document.getElementById("a8").style.color = "black";
    document.getElementById("a9").style.color = "black";
    document.getElementById("a10").style.color = "white";
    document.getElementById("a10").style.backgroundColor = "black";
    //***************************************************** */
    document.getElementById("call").style.backgroundColor = "black"
    document.getElementById("hi").style.color = "white";
    /*fotos changing to the black mode */
    document.getElementById("f1-intro").setAttribute("src", "assets/img/whitemode/wo-left.png");
    document.getElementById("f2-intro").setAttribute("src", "assets/img/whitemode/landspace-mid.png");
    document.getElementById('f3-intro').setAttribute("src", "assets/img/whitemode/man-right.jpg");
    document.getElementById('f-show-1').setAttribute("src", "assets/img/whitemode/adrian-Xft-JdC-Jbc-unsplash.png");
    document.getElementById('f-show-2').setAttribute("src", "assets/img/whitemode/chris-herath-FcvIlm3I2Ts-unsplash.png");
    document.getElementById('f-show-3').setAttribute("src", "assets/img/whitemode/matthew-henry-kX9lb7LUDWc-unsplash.png");
    document.getElementById('f-show-4').setAttribute("src", "assets/img/whitemode/phoebe-strafford-EBbP0Wrbmqs-unsplash.png");
    document.getElementById('f-show-5').setAttribute("src", "assets/img/whitemode/ronan-furuta-ZJ8M0bfiu8U-unsplash.png");
}
/* THE END*/