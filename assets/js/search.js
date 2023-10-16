window.addEventListener('load',() => {
    const searchContent = document.querySelector(".content-search");
    const searchInput = document.querySelector(".input-search");
    searchContent.style.display = "none";

    const listFilms = JSON.parse(localStorage.getItem("film"));

    const renderFilm = (list) => {
        console.log(list,listFilms)
        const innerSearchContent = searchContent.querySelector(".content-trending-firm");
        innerSearchContent.innerHTML = "";

        const html = list.map(item => {
            return `
            <div class="content-trending-firm">
            <a href="./infomationFirm.php">
                <img src="${item["anh_phim"]}" alt="">
                <div class="icont-hover"><i class="fas fa-play-circle"></i></div>
            </a>
            </div>
            `
        });
        innerSearchContent.innerHTML = html.join("");
    }

    searchInput.oninput = event => {
        const value = event.target.value;
        if (!value) {
            searchContent.style.display = "none";
            return;
        }
        console.log(event.target.value);
        
        renderFilm(listFilms.filter(item => item["ten_phim"].toLowerCase().includes(value.toLowerCase())))
        searchContent.style.display = "block";
    }
})