// Toggle CRUD
let div_create = document.getElementById("div_create");
let div_update = document.getElementById("div_update");
let div_delete = document.getElementById("div_delete");
div_create.hidden = false;
div_update.hidden = true;
div_delete.hidden = true;

let current_div = div_create;
const callToActionBtns = document.querySelectorAll(".btn_crud_menu");
callToActionBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        callToActionBtns.forEach(f => f.classList.remove('active'));
        e.target.classList.toggle("active");

        current_div.hidden = true;  
        if(btn.classList[1] === "create") {
            current_div = div_create;
            current_div.hidden = false;
        }
        if(btn.classList[1] === "update") {
            current_div = div_update;
            current_div.hidden = false;
        }
        else if(btn.classList[1] === "delete") {
            current_div = div_delete;
            current_div.hidden = false;
        }
    });
});

// Toggle Menu
let open_btn = document.querySelector(".open_btn");
let close_btn = document.querySelector(".close_btn");
let menu = document.querySelector(".menu");

open_btn.addEventListener("click", function () {
    menu.classList.toggle("is-active");
});
close_btn.addEventListener("click", function () {
    menu.classList.toggle("is-active");
});