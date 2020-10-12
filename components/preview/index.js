const createPreviewTemplate = (styles, { src, alt }, { title, contents }) => {
    const template = document.createElement('template')
    const shadow = template.attachShadow({ mode: 'open' })

    const content = (`
        ${styles}
        <header class="region-header">
            <div class="region-slideshow">
                <img src="${src}" alt="${alt}" class="image-region">
            </div>
            <h3 class="region-title">${title}</h3>
        </header>
        <main class="region-continent">
            <ol class="content-list">
                ${contents.forEach(content => `<li class="content"><span>${content.title}: </span>${content.text}</li>`)}
            </ol>
        </main>
    `)

    shadow.innerHTML = content
}

export default createPreviewTemplate