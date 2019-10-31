const API_TOKEN = "6kuq9BBAjLqnBhId8FhrtaHQrjVvPBQ0"

export function getLocationApi(longitude, latitude, structure, handicap){
  let url = "http://api-mobile.promo-29.codeur.online/api/structures/?lg="+longitude+"&lat="+latitude+"&apikey=" + API_TOKEN
  if(structure != 0) url += "&structure="+structure
  if(handicap != 0) url += "&handicap="+handicap

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log())

}
export function getCityApi(city, structure, handicap){
  let url = "http://api-mobile.promo-29.codeur.online/api/ville/?ville="+ city +"&apikey=" + API_TOKEN
  if(structure != 0) url += "&structure="+structure
  if(handicap != 0) url += "&handicap="+handicap

  return fetch(url)
   .then((response) => response.json())
   .catch((error) => console.log())
}

export function getDepartementApi(department, structure, handicap) {
  let url = "http://api-mobile.promo-29.codeur.online/api/departement/?departement="+department+"&apikey=" + API_TOKEN
  if(structure != 0) url += "&structure="+structure
  if(handicap != 0) url += "&handicap="+handicap

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log())
}
