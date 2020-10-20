import Chapter from './chapter.js'
import Preview from './preview.js'
import WorldMap from '../map/map.js'

import { addClass, hasClass, removeClass } from '../../utils/index.js'

const Filter = () => {
    const container = document.querySelector('#filter-options')
    const startButton = document.querySelector('.start-chapter')
    const minimizeButton = document.querySelector('#minimize-search')

    let lastContentVisibled

    const { container: preview, previewButton, hidePreview, showPreview  } = Preview(startButton)
    const { container: chapter, chapterButton, hideChapters, showChapters} = Chapter(previewButton, startButton ,showPreview)
    const { onSelectRegion } = WorldMap(showPreview, hideChapters)


    showChapters()
    onSelectRegion()

    chapterButton.addEventListener('click', () => {
        showChapters()
        hidePreview()
    })

    previewButton.addEventListener('click', () => {
        showPreview()
        hideChapters()
    })

    minimizeButton.addEventListener('click', () => {
        if(!hasClass(container, 'minimize')){
            lastContentVisibled = hasClass(chapter, 'activate') ? chapter : preview

            addClass(container, 'minimize')

            removeClass(chapter, 'activate')
            removeClass(preview, 'activate')

            chapterButton.disabled = true
            previewButton.disabled = true

            startButton.style.display = 'none'
        }
        else {
            lastContentVisibled == chapter ? showChapters() : showPreview()

            chapterButton.disabled = false
            previewButton.disabled = false

            removeClass(container, 'minimize')
        }
    }) 

    
}

export default Filter