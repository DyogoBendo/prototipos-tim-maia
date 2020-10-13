import data from '../../../data/data.js'
import WorldMap from '../map/map.js'

import { addClass, removeClass} from '../../utils/index.js'

const createPreviewTemplate = (region) => {
    const {image: { src, alt }, content: { name, continent, capital, languages, subject}} = region

    const isThereMoreThanOne = element => element.lenght > 1

    const content = (`
        <header class="region-header">
            <div class="region-slide">
                <img src="${src}" alt="${alt}" class="region-image">
            </div>
            <h3 class="region-title">${name}</h3>
        </header>
        <main class="region-specific">
            <ul class="specific-list">
                <li class="specific"><strong>Continent: </strong>${continent}</li>
                <li class="specific"><strong>Capital: </strong>${capital}</li>
                <li class="specific"><strong>Languages: </strong>${isThereMoreThanOne(languages) ? languages.join(', ') : languages[0]}</li>
                <li class="specific"><strong>Subject: </strong>${subject}</li>
            </ul>
        </main>
    `)

    return content
}

const Preview = (startButton) => {
    const container = document.querySelector('.region-content')

    const previewButton = document.querySelector('#preview-button')

    previewButton.disabled = true

    const { regions, selectRegion } = WorldMap()


    const hidePreview = () => {
        startButton.style.display = 'none'

        removeClass(container, 'activate')
        removeClass(previewButton, 'activate')
    }

    const showPreview = (regionID) => {
        if(regionID){
            const dataRegion = data[regionID]
            const selectedRegion = selectRegion(regionID)

            const template = createPreviewTemplate(dataRegion)

            regions.forEach(region => region.id !== selectedRegion.id && removeClass(region, 'selected'))

            container.innerHTML = template

            addClass(container, 'activate')
            addClass(previewButton, 'activate')

            startButton.style.display = 'flex'
        }
        else {
            addClass(container, 'activate')

            startButton.style.display = 'flex'
        }  
    }

    
    return { container, previewButton, hidePreview, showPreview }
} 

export default Preview