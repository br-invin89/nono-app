const places = require('./test-stations.json')
const placesOnMap = require('./test-gmarkers.json')

export function searchPlacesOnMap() {
  return placesOnMap
}

export function searchPlaces() {
  return { places }
}
