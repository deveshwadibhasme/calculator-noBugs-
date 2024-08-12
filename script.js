const display = document.querySelector('#display')


function showValue(input) {
    display.value += input
}

function allClearValue() {
    display.value = ' ';
}

function clearValue() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    display.value = eval(display.value)
}


document.addEventListener('keyup', (e) => {

    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '/', '*', '-', '+', '.']

    const numKey = keys.some((num) => {
        return num == e.key
    })

    if (numKey) {
        display.value += e.key
    }
    else if (e.key === 'Enter') {
        try {
        function calculate() {
                display.value = eval(display.value)
            }
            calculate();
        }
        catch (error) {
            display.value = 'error'
        }
    }
    else if(e.key === 'Shift'){
        display.value = ' ';
    }
    else if(e.key == 'Backspace'){
        display.value = display.value.toString().slice(0, -1);
    }
    else{
        display.value += 'invalid'
    }
})

