
// function getLocation()
// {
//   const result = confirm("Compartilhar sua localização?");
//   if(result==true){

//     const x = document.getElementById("demo");
//     if (navigator.geolocation)
//     {
//         saveLocalizacao = navigator.geolocation.getCurrentPosition(showPosition,showError);
//     }
//     else{
//             x.innerHTML="Geolocalização não é suportada nesse browser.";
//     }
// }
// }

// function showPosition(position)
// {
//     latUser = position.coords.latitude;
//     lngUser = position.coords.longitude;
// }export default { latUser, lngUser}; 



// function showError(error)
// {
// switch(error.code)
//   {
//   case error.PERMISSION_DENIED:
//     x.innerHTML="Usuário rejeitou a solicitação de Geolocalização."
//     break;
//   case error.POSITION_UNAVAILABLE:
//     x.innerHTML="Localização indisponível."
//     break;
//   case error.TIMEOUT:
//     x.innerHTML="O tempo da requisição expirou."
//     break;
//   case error.UNKNOWN_ERROR:
//     x.innerHTML="Algum erro desconhecido aconteceu."
//     break;
//   }
// }

