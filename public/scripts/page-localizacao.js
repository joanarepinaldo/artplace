
const map = L.map('mapid').setView([-23.3158112,-51.177262], 15);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    
).addTo(map);

const icon = L.icon({
    iconUrl: "/images/logo-icon.png",
    iconSize: [58,68],
    iconAnchor: [29 , 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}){

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/lojas?id=${id}" > <img src="/images/arrow.svg"> </a>`)

    L.marker([lat,lng],{icon: icon})
    .addTo(map)
    .bindPopup(popup)
}

const localizacaoSpan = document.querySelectorAll('.localizacao span')
localizacaoSpan.forEach(span => {
    const loja = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng

    }
    addMarker(loja)
})


