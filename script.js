

function loginBtnClick(element) {
    if(element.innerText == "Logout") {
        element.innerText = "Login";
    }else {
        element.innerText = "Logout";
    }
}


function defBtnClick(element) {
    element.remove();
}


function likeBtnClick() {
    alert("Ninja was liked!");
}
