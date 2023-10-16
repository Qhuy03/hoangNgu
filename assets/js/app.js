// Show-comment-user CaoHung

// let inputUserCMT = document.querySelector('#input-user-comment');
// let ulShow = document.querySelector("#ul-show-comment");
// let commentUserShow = document.querySelector("#input-comment");

// let valueInputUserCMT;

// inputUserCMT.addEventListener("change" , (event)=> {
//     const tagLi = document.querySelectorAll("#ul-show-comment li");

//     valueInputUserCMT = inputUserCMT.value;

//     let html = `<li>
//                     <div class="action-comment-user">
//                         <div class="left-action-comment-user">
//                             <img src="./assets/images/glx_trade.png" alt="">
//                         </div>
//                             <div class="right-action-comment-user">
//                                 <div class="input-comment" id="input-comment">
//                                     <p>${valueInputUserCMT}</p>
//                                 </div>
//                         </div>
//                      </div>
//                 </li>`;
//     tagLi[tagLi.length -1].insertAdjacentHTML("afterend", html);

// })
// console.log(ulShow);

window.onload = function(){
    let user_login = localStorage.getItem('user_login');
    if(user_login){
        document.getElementById('login').remove();
        document.getElementById('register').remove();
        // var htmlObj = document.getElementsByClassName('action-header')[0];
        // htmlObj.innerHTML = htmlObj.innerHTML + `<a href="#"><i class="fa-regular fa-user">         Hello, Bro!</i></a>`;

        let $profile = document.createElement('a');
        $profile.href = "#";
        $profile.innerHTML = `<i class="fa-regular fa-user">         Hello, Bro!</i>`;

        let $bookMark = document.getElementsByClassName('bookmark-user')[0];
        $bookMark.before($profile);
    }
}




// show-Menu-mobile
        let menuEle = document.querySelector("#menu");
        let menuMobileEle = document.querySelector(".phone-menu");
        console.log(menuEle);
        console.log(menuMobileEle);

        menuMobileEle.addEventListener('click', (event) => {
            // if(menuEle.style.display === "block" || menuEle.style.display === "flex") {
            //     menuEle.style.display  = "none !important";
            // } else {
            //     menuEle.style.display  = "block !important";
            // }
            menuEle.classList.toggle('open');
        });
        // menuEle.style.display = "flex"; 


// Show data
// console.log(jsonFirm);


$data = localStorage.getItem('firm');
// console.log($data);

