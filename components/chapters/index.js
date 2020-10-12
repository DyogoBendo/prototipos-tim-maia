const createChapterTemplate = (styles, { title, regions }) => {
    const template = document.createElement('template')
    const shadow = template.attachShadow({ mode: 'open' })
    
    const content = (`
        ${styles}
        <div class="continent-group">
            <h3 class="continent-title">${title}</h3>
            <ol class="regions">
                ${regions.forEach(region => `<li class="region" data-id="${region.id}">${region.name}</li>`)}
            </ol>
        </div>
    `)

    shadow.innerHTML = content
}

export default createChapterTemplate