let isPressed = false

const mouseEvents = {
    mousedown(){
        this.style.cursor = 'grab'

        isPressed = true
    },
    mousemove(){
        const { clientX: actualX, clientY: actualY }= event
        const { innerWidth: totalWidth, innerHeight: totalHeight } = window
        
        const [ byX, byY ] = [
            ((actualX - totalWidth / 2) * 0.1),
            ((actualY - totalHeight / 2) * 0.1)
        ]

        isPressed && scrollBy(byX, byY)
    },
    mouseup(){
        isPressed = false

        this.style.cursor = 'initial'
    }
}

export default mouseEvents