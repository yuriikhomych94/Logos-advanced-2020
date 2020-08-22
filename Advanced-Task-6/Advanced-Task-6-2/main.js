const btn = document.getElementById('add')
const movie = document.getElementById('movie')

function getData() {
    const xml = new XMLHttpRequest();

    xml.open('GET', `http://www.omdbapi.com/?s=${movie.value}&apikey=36460e13`, true);
    xml.onreadystatechange = function() {
        if(xml.readyState === 4 && xml.status === 200) {
            parseData(xml.responseText);
        }
    }
    xml.send();    
}


function parseData(result) {
    const data = JSON.parse(result)
    console.log(data)
    movie.value = '';
 

    function createCard() {
        for (let i = 0; i < data.Search.length; i++) {
        
        let div = document.createElement('div');
        
        div.className = 'cards'
        div.innerHTML = `<img src="${data.Search[i].Poster}"><div class="title"><h5>${data.Search[i].Title}</h5></div><div class="year"><h6>${data.Search[i].Year}</h6></div><button onclick="moreDetails(${i})" type="button" class="btn btn-success btn2" data-toggle="modal" data-target=".bd-example-modal-xl">More details</button>`
        
        document.querySelector('.container-xl').append(div)
        }
    }
    createCard();
}



btn.addEventListener('click', function() {
    getData();

})


























