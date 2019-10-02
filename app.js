
function keycode(){
    let key = event.keyCode;
    console.log(key);

    let ekey = event.key;
    console.log(ekey);

    let code = event.code;
    console.log(code);

    let which = event.which;
    console.log(which);




document.getElementById("eventkey").textContent = ekey;
document.getElementById("eventcode").textContent = code;
document.getElementById("eventwhich").textContent = which;

}