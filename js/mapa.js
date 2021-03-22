/*let map = L.map('map').setView([40.7277831,-74.0080852],13)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; <a href="https://www.openstreetmap/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
*/
let map = L.map('map').setView([40.7277831,-74.0080852],18)
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution:'Map tiles by<a href="http://stamen.com">Stamen Desing</a>,<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0 </a>&mdash; Map data &copy;<ahref="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains:'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext:'png'
}).addTo(map);
/*Hacer un marcador 
var marker = L.marker([40.7277831,-74.0080852]).addTo(map);*/

let geojson_url = "https://babel.webreactiva.com/labs/arboles_singulares_en_espacios_naturales.geojson"

fetch(
    geojson_url
).then(
    res => res.json()
).then(
    data =>{
        L.geoJson(data).addTo(map)
    }
)
