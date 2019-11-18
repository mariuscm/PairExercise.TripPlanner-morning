const mapboxgl = require('mapbox-gl')
const markerCreator = require('./marker')

mapboxgl.accessToken =
  'pk.eyJ1IjoidGlsZGVuZW0iLCJhIjoiY2szNG80ZW5zMTd2ZDNicG00M3JuZTkyYyJ9.jgb9KwxqqXh0g8E0hO5syg'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
})

const marker = markerCreator('restaurant', [-87.6412237, 41.89527])
marker.addTo(map)
