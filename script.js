search=()=>{
    movieName=c.value;
    console.log(c.value);
    fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=86f41fe5`)
    .then(data=>data.json())
     .then(data=>displayData(data))
     .catch(err=>
        alert("error")
        
    )
}
function displayData(data){

    let htmlData=`
    <div class="info">
        <img src=${data.Poster} class="poster">
        <div>
            <h2>${data.Title}</h2>
            <div class="rating">
                <img src="./images/star.png">
                <h4>${data.imdbRating}</h4>
            </div>
            <div class="details">
                <span>${data.Rated}</span>
                <span>${data.Year}</span>
                <span>${data.Runtime}</span>
            </div>
            <div class="genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
            </div>
        </div>
    </div>
    <p>${data.Plot}</p>
    <p><strong>Director</strong>&nbsp;:&nbsp${data.Director}</p>
    <p><strong>Stars</strong>&nbsp;:&nbsp${data.Actors}</p>
    <p><strong>Language</strong>&nbsp;:&nbsp${data.Language}</p>

    
`
result.innerHTML=htmlData;
}