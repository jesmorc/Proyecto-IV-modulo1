/**
 * Created by davsa410 on 2015-01-27.
 */
displayView = function () {
    var x;

    x = document.getElementById("welcomeview");
     document.getElementById("Main").innerHTML = x.innerHTML;


    if (window.localStorage.getItem("login") && window.localStorage.getItem("login")!="undefined") {
        window.alert('Estás logueado!');
    }
};


window.onload = function () {
    displayView();
};

function loginPass(){

    return true;
}
