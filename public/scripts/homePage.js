const closeX = document.querySelector('[name=close]')
const openSearch = document.querySelector('a.linkBotao')
const modalPage = document.querySelector('div.modal')


openSearch.addEventListener('click', () => modalPage.classList.remove('hide'))
closeX.addEventListener('click', () => modalPage.classList.add('hide'))