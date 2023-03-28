function startGame() {
    let btnPlayerPet = document.getElementById('btn-pet');
    btnPlayerPet.addEventListener('click', selectPlayerPet)
}

function selectPlayerPet() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanPlayerPet = document.getElementById('player-pet')

    if(inputHipodoge.checked) {
        document.getElementById('').innerHTML
    } else if(inputCapipepo.checked) {
        alert('capipepo')
    } else if(inputRatigueya.checked) {
        alert('ratigueya')
    } else {
        alert('You must select a pet')
    }
}

window.addEventListener('load', startGame);