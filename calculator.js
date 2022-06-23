var operation = prompt("Please Enter operator you want to perform\n e.g '+-*/' ")
function addNum() {
    if (operation === '+') {
        let number_1 = prompt('Number 1')
        let number_2 = prompt(`Number 2\n ${number_1} ${operation}`)
        let result = (Number(number_1) + Number(number_2))
        alert(`This result is : ${result}`)
    }

}
function minusNum() {
    if (operation === '-') {
        let number_1 = prompt('Number 1')
        let number_2 = prompt(`Number 2\n ${number_1} ${operation}`)
        let result = (Number(number_1) - Number(number_2))
        alert(`This result is : ${result}`)
    }

}
function divideNum() {
    if (operation === '/') {
        let number_1 = prompt('Number 1')
        let number_2 = prompt(`Number 2\n ${number_1} ${operation}`)
        let result = (Number(number_1) / Number(number_2))
        alert(`This result is : ${result}`)
    }

}
function mutiplyNum() {
    if (operation === '*') {
        let number_1 = prompt('Number 1')
        let number_2 = prompt(`Number 2\n ${number_1} ${operation}`)
        let result = (Number(number_1) * Number(number_2))
        alert(`This result is : ${result}`)
    }

}
addNum()
minusNum()
divideNum()
mutiplyNum()