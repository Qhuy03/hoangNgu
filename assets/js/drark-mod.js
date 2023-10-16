let btnDankMod = document.querySelector(".dark-mod");
let pageEle = document.querySelector("#page");
// console.log(pageEle);
btnDankMod.addEventListener('click', (event) => {
    // if(pageEle.style.background == "rgba(0,0,0,0.5)") {
        pageEle.classList.toggle("dark-mode")
    // } else {
    //     pageEle.style.background = "rgba(0,0,0,0.5)";
    // }
    // console.log(pageEle.classList)
})