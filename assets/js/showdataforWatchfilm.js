//get data in localStorage
const dataFilm3 = localStorage.getItem("film");
const data3 = JSON.parse(dataFilm3);
let video = document.querySelector(".video");
console.log(video);

let iframeEle = document.querySelector("#videoShow");
// let srcPresentWantShow  = iframeEle.attributes.src.value; 
// srcPresentWantShow = "https://www.youtube.com/watch?v=Q-yxVL2_uiY";
// console.log(srcPresentWantShow)

console.log(data3) 
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
// console.log(urlParams);

const firmId = urlParams.get('firmId');
console.log(firmId)

for (const itemt of data3) {
    if( firmId == itemt.id) {
        srcPresentWantShow = itemt.link_phim;

        video.innerHTML = `
        <iframe width="1200" height="700" frameborder="0" id="videoShow"
        src="${itemt.link_phim}">
        </iframe>
        </br>
        <div class="stars">
            <form action="">
              <input class="star star-5" id="star-5" type="radio" name="star"/>
              <label class="star star-5" for="star-5"></label>
              <input class="star star-4" id="star-4" type="radio" name="star"/>
              <label class="star star-4" for="star-4"></label>
              <input class="star star-3" id="star-3" type="radio" name="star"/>
              <label class="star star-3" for="star-3"></label>
              <input class="star star-2" id="star-2" type="radio" name="star"/>
              <label class="star star-2" for="star-2"></label>
              <input class="star star-1" id="star-1" type="radio" name="star"/>
              <label class="star star-1" for="star-1"></label>
            </form>
          </div>
        `
    }
}

console.log(srcPresentWantShow)