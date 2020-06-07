const stateSelector = document.querySelector('select[name=uf]')
const listItem = document.querySelector('#lista-item')
let sendItems = document.querySelector('[name=itens]')
let selectedItems = []

function setStates(){
    const stateUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    
    fetch(stateUrl)
    .then(response => response.json())
    .then(data => {
        for(state of data){
            stateSelector.innerHTML += `<option value ="${state.id}">${state.nome}</option>`
        }
    })
}

function setCities(e){
    const citySelector = document.querySelector('select[name=cities]')
    const stateName = document.querySelector('[name=states]')
    
    const indexOfSelectedState = e.target.selectedIndex
    stateName.value = e.target.options[indexOfSelectedState].text
    
    let { value } = e.target
    citySelector.innerHTML = '<option value="">-- Selecione uma cidade --</option>'
    citySelector.disabled = true
    
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value}/distritos`)
        .then(response => response.json())
        .then(data => {
            for(city of data){
                citySelector.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
        })
    citySelector.disabled = false
}

function setItens(e){
    const clickedItem = e.target
    if (clickedItem.classList.contains('card-item')){
        if(clickedItem.classList.contains('selected')){
            clickedItem.classList.remove('selected')
            selectedItems = selectedItems.filter( item => clickedItem.id !== item) 
        }
        else {
            clickedItem.classList.add('selected')
            selectedItems.push(clickedItem.id)
        } 
    }
    sendItems.value = selectedItems
}

window.addEventListener('load', () => setStates())

stateSelector.addEventListener('change', event => setCities(event) )

listItem.addEventListener('click', event => setItens(event))
