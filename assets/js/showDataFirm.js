
$getData = localStorage.getItem("film")
let contentMainLeftEle = document.querySelectorAll(".container-content-itemt");
let contentTrendingEle = document.querySelector(".container-content-trending");
resultContentMainLeftEle = '';
resultcontentTrendingEle = '';
// console.log(a);
// console.log(JSON.parse($data));

let data = JSON.parse($getData);

// console.log(value);

//đổ cho leftContent

for (const itemt of data) {
    resultContentMainLeftEle += `
    <div class="itemt">
        <a href="./infomationFirm.php?filmId=${itemt.id}">
            <img src="${itemt.anh_phim}" alt="">
            <div class="icont-hover"><i class="fas fa-play-circle"></i></div>
        </a>
    </div>`;
}



//đổ cho trending header
// for (const item of data) {
//     resultcontentTrendingEle += `
//                         <div class="content-trending-firm">
//                             <a href="./infomationFirm.html">
//                                 <img src="${item.anh_phim}" alt="">
//                                 <div class="icont-hover"><i class="fas fa-play-circle"></i></div>
//                             </a>
//                         </div> 
//                         `
// }


let contentEtemt1 = contentMainLeftEle[0];
let contentEtemt2 = contentMainLeftEle[1];
// console.log(contentEtemt2)


contentEtemt1.innerHTML = resultContentMainLeftEle;
contentEtemt2.innerHTML = resultContentMainLeftEle;
// contentTrendingEle.innerHTML = resultcontentTrendingEle;

// console.log(resultcontentTrendingEle)


// console.log(itemtEle)

window.onload = function exampleFunction() {
    console.log('The Script will load now.');
}