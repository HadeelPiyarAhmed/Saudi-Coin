// function coinToss () {
// var coinDetermin = Math.round(Math.random() * 1);
// if (coinDetermin === 0) {
//     document.querySelector("#bottom").classList.add ("bottom");
//     document.querySelector("#top").classList.add ("top");
//     setTimeout(function(){document.querySelector("#top").classList.remove ("top");}, 5000)
//     setTimeout(function(){document.querySelector("#bottom").classList.remove ("bottom");}, 5000)
//     document.querySelector("img").setAttribute ("src", "./images/C2-2.png");
// }
// else {
//     document.querySelector("#bottom").classList.add ("bottom");
//     document.querySelector("#top").classList.add ("top");
//     setTimeout(function(){document.querySelector("#top").classList.remove ("top");}, 5000)
//     setTimeout(function(){document.querySelector("#bottom").classList.remove ("bottom");}, 5000)
//     document.querySelector("img").setAttribute ("src", "./images/C2-1.png")
// }
// }

// coinToss(); 


var x = 0;
var y = 0;

function coinToss () {
var coinDetermin = Math.round(Math.random() * 1);
if (coinDetermin === 0) {
    document.querySelectorAll("img")[0].classList.add ("bottom");
    document.querySelectorAll("img")[1].classList.add ("top");
    setTimeout(function(){document.querySelectorAll("img")[0].classList.remove ("bottom");}, 1000);
    setTimeout(function(){document.querySelectorAll("img")[1].classList.remove ("top");}, 1000);
    setTimeout(function(){document.querySelectorAll("img")[0].setAttribute ("src", "./images/C2-2.png");},1000);
    setTimeout(function(){document.querySelectorAll("img")[1].setAttribute ("src", "./images/C2-1.png");},1000);
    var tails = x+1;
    setTimeout(function(){document.getElementById("#tails").innerHTML = "Tails: " + tails + " ";},1000);
    return x = tails;
}
else {
    var heads;
    document.querySelectorAll("img")[0].classList.add ("bottom");
    document.querySelectorAll("img")[1].classList.add ("top");
    setTimeout(function(){document.querySelectorAll("img")[0].classList.remove ("bottom");}, 1000)
    setTimeout(function(){document.querySelectorAll("img")[1].classList.remove ("top");}, 1000)
    setTimeout(function(){document.querySelectorAll("img")[0].setAttribute ("src", "./images/C2-1.png");},1000)
    setTimeout(function(){document.querySelectorAll("img")[1].setAttribute ("src", "./images/C2-2.png");},1000)
    var heads = y+1;
    setTimeout(function(){document.getElementById("#heads").innerHTML = "Heads: " + heads + " ";},1000);
    return y = heads;
}
}






