const mapboxgl = require('mapbox-gl')

const markerCreator = (type, coordArr) => {
  const markerDomEl = document.createElement('div')
  markerDomEl.style.width = '32px'
  markerDomEl.style.height = '39px'

  switch (type) {
    case 'activity':
      markerDomEl.style.backgroundImage =
        'url(http://i.imgur.com/WbMOfMl.png)'
      break
    case 'hotel':
      markerDomEl.style.backgroundImage =
        'url(http://i.imgur.com/D9574Cu.png)'
      break
    case 'restaurant':
      markerDomEl.style.backgroundImage =
        'url(http://i.imgur.com/cqR6pUI.png)'
      break
    default:
      markerDomEl.style.backgroundImage =
        'url(http://i.imgur.com/WbMOfMl.png)'
  }

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordArr)
}

module.exports = markerCreator
