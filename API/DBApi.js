const API_TOKEN = "6kuq9BBAjLqnBhId8FhrtaHQrjVvPBQ0"

export function getStructureApi(){
  const url = "http://api-mobile.promo-29.codeur.online/api/structures/?lg=5.2174416&lat=46.2024726&apikey=" + API_TOKEN 
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log())

}
