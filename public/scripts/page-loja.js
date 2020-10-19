const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


const lat = document.querySelector('span[data-lat').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;


const map = L.map('mapid',options).setView([lat,lng], 15);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    
).addTo(map);

const icon = L.icon({
    iconUrl: "/images/logo-icon.png",
    iconSize: [58,68],
    iconAnchor: [29 , 68],
    popupAnchor: [170, 2]
})


L.marker([lat, lng],{icon: icon})
.addTo(map)

function selectImage(event){
   const button = event.currentTarget
    
   const buttons = document.querySelectorAll(".images button")
   buttons.forEach(removeActiveClass)

   function removeActiveClass(button){
       button.classList.remove("active")
   }

   const image = button.children[0]
   const imageContainer = document.querySelector(".loja-details > img")
  imageContainer.src = image.src

   button.classList.add('active')

   
}
    