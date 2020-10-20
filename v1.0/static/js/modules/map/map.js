import { addClass, removeClass } from '../../utils/index.js'

const WorldMap = (showPreview, hideChapters) => {
    const container = document.querySelector('iframe').contentDocument.querySelector('#map')
    const regions = [...container.querySelectorAll('.clickable')]

    const selectRegion = (id) => container.querySelector(`#${id}`)

    const changeSize = (width, height) => {
        container.style.width = `${width}px`
        container.style.height = `${height}px`
    }
    
    const onSelectRegion = () => {
        regions.forEach(region => region.addEventListener('click', () => {
            showPreview(region.id)
            hideChapters()
    
            regions.forEach(comp => comp != region ? removeClass(comp, 'selected') : addClass(region, 'selected'))
        }))
    }

    return { container, regions, onSelectRegion ,changeSize , selectRegion }
}
export default WorldMap 