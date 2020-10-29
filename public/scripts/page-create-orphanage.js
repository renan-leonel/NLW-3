//create map
const map = L.map('mapid').setView([-27.2213925,-49.6433959], 16); // no setview, é latitude longitude, e depois o zoom
// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
})

let marker;

//create and add marker
map.on('click', (event) => {//quando "ouvir" o click, executa a função
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker) // se o marker existir, remove ele

    // add icon layer
    marker = L.marker([lat,lng], { icon })
    .addTo(map)
}) 

// adicionar o campo de fotos
function addPhotoField(){
    // pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    // realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) // -1 pq supondo que tenha 1 field, ele retorna 1, mas queremos a posição 0
    
    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.chldren[0]

    if(input.value == ""){
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();

}

//selecionar sim ou não
function toggleSelect(event){

    // retirar a class .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}

function validade(event){

    //validar se lat e lng estão preenchidos
    const needsLatAndLng = false;
    if(needsLatAndLng){
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
}