fetch('http://www.omdbapi.com/?s=harry potter&apikey=7deeb310')
.then(response => response.json())
    .then( data => {
        console.log(data)
        data.Search.forEach(function(item) {   
            var body = document.querySelector("body")
            var paragraph = document.createElement("div")
            var paragraph1 = document.createElement("paragraph")
            var paragraph2 = document.createElement("paragraph")
            var image = document.createElement("img")
            paragraph1.innerHTML = item.Title
            paragraph2.innerHTML = item.Year
            image.setAttribute("src", item.Poster)
            body.appendChild(paragraph)
            paragraph.appendChild(paragraph1)
            paragraph.appendChild(paragraph2)
            paragraph.appendChild(image)
         })
    })
    