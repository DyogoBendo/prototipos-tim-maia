import WorldMap from '../map/map.js'

const Zoom = () => {
    const plusButton = document.querySelector('#plus-zoom')
    const minusButton = document.querySelector('#minus-zoom')

    const { container, changeSize } = WorldMap()

    const [ maxWidth, maxHeight ] = [ 4608, 2191 ]
    const [ minWidth, minHeight ] = [ 1536, 730 ]

    plusButton.addEventListener('click', () => {
        const iframe = document.querySelector('iframe').contentDocument
        
        const [ actualWidth, actualHeight ] = [
            +(iframe.body.scrollWidth),
            +(iframe.body.scrollHeight)
        ]
    
        const [ newWidth, newHeight ] = [
            (actualWidth + 100),
            (actualHeight + 100)
        ]
    
        if(newWidth < maxWidth && newHeight < maxHeight){
            changeSize(newWidth, newHeight)
        }
    })

    minusButton.addEventListener('click', () => {
        const iframe = document.querySelector('iframe').contentDocument

        const [ actualWidth, actualHeight ] = [
            +(iframe.body.scrollWidth),
            +(iframe.body.scrollHeight)
        ]

        console.table([+(iframe.body.scrollWidth),
            +(iframe.body.scrollHeight)])
    
        const [ newWidth, newHeight ] = [
            (actualWidth - 100),
            (actualHeight - 100)
        ]
    
        if(newWidth > minWidth && newHeight > minHeight)
            changeSize(newWidth, newHeight)
    })
}

export default Zoom