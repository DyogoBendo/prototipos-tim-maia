import { removeClass, addClass } from '../../utils/index.js'

const Chapter = (previewButton, startButton, showPreview) => {
    const container = document.querySelector('.chapters-content')
    const regions = [...document.querySelectorAll('.region')]

    const chapterButton = document.querySelector('#chapter-button')

    let selectedRegion

    const showChapters = () => {
        addClass(container, 'activate')
        addClass(chapterButton, 'activate')

        startButton.style.display = 'none'
    }

    const hideChapters = () => {
        removeClass(container, 'activate')
        removeClass(chapterButton, 'activate')
    }

    regions.forEach(region => {
        region.addEventListener('click', () => {
            regions.forEach(compRegion => {
                previewButton.disabled = false

                if(compRegion != region){
                    removeClass(compRegion, 'choosed')
                }
                else {
                    addClass(region, 'choosed')
                    
                    showPreview(region.dataset.id)
                    hideChapters()
                }
            })
        })
    })

    return { container, selectedRegion, regions, chapterButton, hideChapters, showChapters }
}

export default Chapter