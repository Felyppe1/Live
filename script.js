function sendGrade() {
    let input = document.querySelector('#input')
    let grade = input.value
    if (grade > 10 || grade < 0) {
        alert('ERRO.\nPor favor, digite uma nota válida.')
        return
    }
    if (grade == '') {
        alert('Por favor, insira uma nota.')
        return
    }
    input.value = ''
    let paragraph = document.createElement('p')
    paragraph.innerText = 'A nota ' + cont + ' foi ' + grade
    cont = cont + 1
    soma += Number(grade)
    let previewBox = document.querySelector('#preview')
    previewBox.append(paragraph)
}

function calculateGrade() {
    let media = soma / (cont - 1)
    let result = document.querySelector('#result')
    result.innerHTML = 'A média é: ' + media
}

var cont = 1
var soma = 0

let addButton = document.querySelector('#addButton')
addButton.addEventListener('click', ()=>sendGrade())

let calcButton = document.querySelector('#calcButton')
calcButton.addEventListener('click', ()=>calculateGrade())