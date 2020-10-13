import mouseEvents from './modules/mouseEvents.js'

const map = document.querySelector('#map')

Object.keys(mouseEvents).forEach(eventName => document.body.addEventListener(eventName, mouseEvents[eventName]))
