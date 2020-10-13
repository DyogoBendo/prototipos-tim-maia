const WorldMap = () => {
    const container = document.querySelector('iframe').contentDocument.querySelector('#map')
    const regions = [...container.querySelectorAll('.clickable')]

    const selectRegion = (id) => container.querySelector(`#${id}`)

    const changeSize = (width, height) => {
        container.style.width = `${width}px`
        container.style.height = `${height}px`
    }
    
    return { container, regions, changeSize , selectRegion }
}
export default WorldMap 