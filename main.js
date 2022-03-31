const body = document.querySelector('body');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');
const hide = document.querySelector('.hide');
const noOfPeople = document.querySelector('#people');
let total = document.querySelector('#total');
const reset = document.querySelector('#reset');

percentage = (num, per) => {
    return (num / 100) * per;
};

multi = (num1, num2) => {
    return num1 * num2;
};

btn1.addEventListener('click', () => {
    const bill = parseFloat(document.querySelector('#bill').value);
    // if (bill > 0) {
    //     btn1.removeAttribute('disabled');
    // } else {
    //     btn1.setAttribute('disabled', 'disabled');
    // }
    // bill.value.style.color = 'red '
    tip = parseFloat(percentage(bill, 5));
    const tipAmount = document.querySelector('#tip-amount');
    tipAmount.innerText = tip;

    reset.addEventListener('click', () => {
        tipAmount.innerText = 0;
        tip = '';
    });

    noOfPeople.addEventListener('input', add);

    function add() {
        total.innerText = parseFloat(tip * noOfPeople.value);
    }

    reset.addEventListener('click', () => {
        total.innerText = 0;
    });
});

// btn 2
btn2.addEventListener('click', () => {
    const bill = parseFloat(document.querySelector('#bill').value);

    tip = parseFloat(percentage(bill, 10));
    const tipAmount = document.querySelector('#tip-amount');
    tipAmount.innerText = tip;

    noOfPeople.addEventListener('input', add);

    function add() {
        total.innerText = parseFloat(tip * noOfPeople.value);
    }

    // reset.addEventListener('click', () => {
    //     total.innerText = 0;
    // });
});

// btn 3
btn3.addEventListener('click', () => {
    const bill = parseFloat(document.querySelector('#bill').value);

    tip = parseFloat(percentage(bill, 15));
    const tipAmount = document.querySelector('#tip-amount');
    tipAmount.innerText = tip;

    // reset.addEventListener('click', () => {
    //     tipAmount.innerText = 0;
    //     tip = '';
    // });

    noOfPeople.addEventListener('input', add);

    function add() {
        total.innerText = parseFloat(tip * noOfPeople.value);
    }

    // reset.addEventListener('click', () => {
    //     total.innerText = 0;
    // });
});

// btn 4
btn4.addEventListener('click', () => {
    const bill = parseFloat(document.querySelector('#bill').value);

    tip = parseFloat(percentage(bill, 25));
    const tipAmount = document.querySelector('#tip-amount');
    tipAmount.innerText = tip;

    // reset.addEventListener('click', () => {
    //     tipAmount.innerText = 0;
    //     tip = '';
    // });

    noOfPeople.addEventListener('input', add);

    function add() {
        total.innerText = parseFloat(tip * noOfPeople.value);
    }

    // reset.addEventListener('click', () => {
    //     total.innerText = 0;
    // });
});

// btn 5
btn5.addEventListener('click', () => {
    const bill = parseFloat(document.querySelector('#bill').value);

    tip = parseFloat(percentage(bill, 50));
    const tipAmount = document.querySelector('#tip-amount');
    tipAmount.innerText = tip;

    // reset.addEventListener('click', () => {
    //     tipAmount.innerText = 0;
    //     tip = '';
    // });

    noOfPeople.addEventListener('input', add);

    function add() {
        total.innerText = parseFloat(tip * noOfPeople.value);
    }

    // reset.addEventListener('click', () => {
    //     total.innerText = 0;
    // });
});

const custom = document.querySelector('#custom');

custom.addEventListener('input', add);

function add() {
    let newValue = parseFloat(custom.value);
    tip = parseFloat(percentage(bill, newValue));

    // console.log(parseFloat(custom.value));
    console.log(tip);
}

// if ((noOfPeople = 0)) {
//     hide.style.opacity = '1';
//     hide.style.color = 'red';
// }