const isThereClass = (element, className) => element.classList.contains(className)

const addClass = (element, className) => element.classList.add(className)
const removeClass = (element, className) => element.classList.remove(className)

const showPreview = () => {
    const [chapterButton, previewButton , startButton, minizeButton ]= filter.buttons
    const { contents: { chapter: { area: chapter }, previewRegion } } = filter
    
    addClass(previewRegion, 'activate')
    removeClass(chapter, 'activate')

    addClass(previewButton, 'activate')
    removeClass(chapterButton, 'activate')

    startButton.style.display = 'flex'
}

const menu = {
    area: document.querySelector('#menu'),
    hideButton: document.querySelector('#visible-menu'),
    logo: document.querySelector('#logo'),
    changeVisibilityButton: () => {
        const onClickHideButton = event => {
            menu.hideButton.style.transform = 'transform: rotate(0deg)'
            
            const isHiding = menu.area.classList.contains('hide')
        
            menu.logo.src = isHiding ? './assets/images/icons/globalang-smaller.svg' : './assets/images/icons/globalang-larger.svg'
        
            isHiding ? menu.area.classList.remove('hide') : menu.area.classList.add('hide')
        }
        
        menu.hideButton.addEventListener('click', onClickHideButton)
    }
}
const filter = {
    area: document.querySelector('#filter-options'),
    contents: {
        chapter: {
            area: document.querySelector('.chapters-content'),
            regions: [...document.querySelectorAll('.region')],
            changeRegionSelected: () => {
                const { regions } = filter.contents.chapter
                
                regions.forEach(region => {
                    region.addEventListener('click', () => {
                        filter.buttons[1].disabled = false

                        regions.forEach(comparativeRegion => {
                            if(comparativeRegion != region){
                                comparativeRegion.classList.remove('choosed')
                            }
                        })

                        region.classList.add('choosed')

                        showPreview()
                    })
                })
            }
        },
        previewRegion: document.querySelector('.region-content')
    },
    buttons: [
        document.querySelector('#chapter-button'),
        document.querySelector('#preview-button'),
        document.querySelector('.start-chapter'),
        document.querySelector('#minimize-search'),
    ],
    changeContentView: () => {
        const { chapter: { area: chapter }, previewRegion } = filter.contents
        const [ chapterButton, previewButton, startButton ] = filter.buttons

        startButton.style.display = isThereClass(chapter, 'activate') ? 'none' : 'flex'
        
        filter.buttons.forEach(tabButton => {
            tabButton.addEventListener('click', event => {
                if(tabButton.id == chapter.dataset.button){
                    if(!isThereClass(chapter, 'activate')){
                        addClass(chapter, 'activate')
                        removeClass(previewRegion, 'activate')
        
                        addClass(chapterButton, 'activate')
                        removeClass(previewButton, 'activate') 

                        startButton.style.display = 'none'
                    }
                }
                else if(tabButton.id == previewRegion.dataset.button){
                    !isThereClass(previewRegion, 'activate') && showPreview()
                }
            })  
        })
    },
    changeVisibilityView: () => {
        const [chapterButton, previewButton , startButton, minizeButton ]= filter.buttons
        const { area, contents: { chapter: { area: chapter }, previewRegion } } = filter

        let lastContentVisible

        minizeButton.addEventListener('click', () => {
            if(!isThereClass(area, 'minimize')){
                lastContentVisible = chapter.classList.contains('activate') ? chapter : previewRegion

                area.classList.add('minimize')

                chapter.classList.remove('activate')
                previewRegion.classList.remove('activate')

                chapterButton.disabled = true
                previewButton.disabled = true
    
                startButton.style.display = 'none'
            }
            else {
                if(lastContentVisible == chapter){
                    chapter.classList.add('activate')

                    startButton.style.display = 'none'
                }
                else {
                    previewRegion.classList.add('activate')
                    startButton.style.display = 'flex'
                }

                chapterButton.disabled = false
                previewButton.disabled = false

                area.classList.remove('minimize')
            }   
            
            
        })
    }
}

const mapIframe = document.querySelector('iframe')


const zoom = {
    plusButton: document.querySelector('#plus-zoom'),
    minusButton: document.querySelector('#minus-zoom')
}

zoom.plusButton.addEventListener('click', () => {
    const iframe = mapIframe.contentDocument
    const map = iframe.querySelector('#map')  

    const [ maxWidth, maxHeight ] = [3994, 1899]

    const [ actualWidth, actualHeight ] = [
        +(iframe.body.scrollWidth),
        +(iframe.body.scrollHeight)
    ]

    const [ newWidth, newHeight ] = [
        (actualWidth + 100),
        (actualHeight + 100)
    ]

    if(newWidth < maxWidth && newHeight < maxHeight){
        map.style.width = `${newWidth}px`
        map.style.height = `${newHeight}px`
    }

})

zoom.minusButton.addEventListener('click', () => {
    const iframe = mapIframe.contentDocument
    const map = iframe.querySelector('#map')
    
    const [ minWidth, minHeight ] = [1536, 730]

    const [ actualWidth, actualHeight ] = [
        +(iframe.body.scrollWidth),
        +(iframe.body.scrollHeight)
    ]

    const [ newWidth, newHeight ] = [
        (actualWidth - 100),
        (actualHeight - 100)
    ]

    if(newWidth > minWidth && newHeight > minHeight){
        map.style.width = `${newWidth}px`
        map.style.height = `${newHeight}px`
    }
})

filter.buttons[1].disabled = true

menu.changeVisibilityButton()

filter.changeContentView()
filter.changeVisibilityView()

filter.contents.chapter.changeRegionSelected()
