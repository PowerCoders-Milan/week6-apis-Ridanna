
//Berlin

fetch('https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=c4992f47cf4dd8f547ddd7e3349ebdfb')
.then(response => response.json())
.then(data => {
        var body = document.querySelector("body")
        var p = document.querySelector("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description

    });

//London

 fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=c4992f47cf4dd8f547ddd7e3349ebdfb')
.then(response => response.json())
.then(data => {
        var body = document.querySelector("body")
        var p = document.querySelector("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description

    });
