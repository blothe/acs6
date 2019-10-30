const API_TOKEN = "6kuq9BBAjLqnBhId8FhrtaHQrjVvPBQ0"

export function getLocationApi(){
  const url = "http://api-mobile.promo-29.codeur.online/api/structures/?lg=5.2174416&lat=46.2024726&apikey=" + API_TOKEN
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log())

}
export function getCityApi(){
  const url = "http://api-mobile.promo-29.codeur.online/api/ville/?ville=Nevers&apikey=" + API_TOKEN
  return fetch(url)
   .then((response) => response.json())
   .catch((error) => console.log())
}

export function getDepartementApi() {
  const url = "http://api-mobile.promo-29.codeur.online/api/departement/?departement=01&apikey=" + API_TOKEN
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log())
}

export function getSearchCityApi(text){
  const url = "http://api-mobile.promo-29.codeur.online/api/search-ville/?name=nev&apikey="
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log())
}

export function getSearchDepartementApi() {
  const url = "http://api-mobile.promo-29.codeur.online/api/search-departement/?name=Ain&apikey="
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log())
}
