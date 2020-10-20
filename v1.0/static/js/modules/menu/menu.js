import { hasClass } from '../../utils/index.js'

const Menu = () => {
    const menu = document.querySelector('#menu')
    const logo = document.querySelector('#logo')

    const hideButton = document.querySelector('#visible-menu')

    hideButton.addEventListener('click', () => {
        hideButton.style.transform = 'transform: rotate(0deg)'

        if(hasClass(menu, 'hide')){
            logo.src = './assets/images/icons/globalang-smaller.svg'

            menu.classList.remove('hide')
        }
        else {
            logo.src = './assets/images/icons/globalang-larger.svg'

            menu.classList.add('hide')
        }
    })
}

export default Menu