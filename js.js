document.getElementById('first-class-increase').addEventListener('click', function() {
    increaseInput('input-first-class');
    TotalPriceCount('first-class-increase');
    let currentSubtotal = subtotal('first-class-increase');
    let currenttax = tax(currentSubtotal);

})
document.getElementById('first-class-decrease').addEventListener('click', function() {
    let input = decreaseInput('input-first-class');
    TotalPriceCount('first-class-decrease');
    let currentSubtotal = subtotal('first-class-decrease');
    tax(currentSubtotal);
})
document.getElementById('economy-class-increase').addEventListener('click', function() {
    increaseInput('input-economy-class');
    let totalEconomyPriceCount = TotalPriceCount('economy-class-increase');
    let currentSubtotal = subtotal('economy-class-increase');
    let currenttax = tax(currentSubtotal);

})
document.getElementById('economy-class-decrease').addEventListener('click', function() {
    let input = decreaseInput('input-economy-class');
    TotalPriceCount('economy-class-decrease');
    let currentSubtotal = subtotal('economy-class-decrease');
    tax(currentSubtotal);
})
document.getElementById('book-now').addEventListener('click', function() {
    noneAndBlockDisplay();
    flyingform();
    returnAndDepurture();
    payableAmount();

})

function payableAmount() {
    let getTotalPayableAmount = parseInt(document.getElementById('total').innerText);
    let displayTotalPayableAmount = document.getElementById('total-payable-amount');
    displayTotalPayableAmount.innerText = getTotalPayableAmount;
}

function returnAndDepurture() {
    let getDepartureDate = document.getElementById('departure-date').value;
    let getReturnDate = document.getElementById('return-date').value;
    let displayDeparturedate = document.getElementById('display-departure-date');
    let displayReturnDate = document.getElementById('display-return-date');
    displayDeparturedate.innerText = getDepartureDate;
    displayReturnDate.innerText = getReturnDate;
}

function flyingform() {
    let getflyingFromAddress = document.getElementById('flying-from-input').value;
    let getDisplayFlyingForm = document.getElementById('flying_from');
    getDisplayFlyingForm.innerText = getflyingFromAddress;
    let getFlyingToAdress = document.getElementById('flying-to-input').value;
    let getDisplayFlyingTo = document.getElementById('flying-to');
    getDisplayFlyingTo.innerText = getFlyingToAdress;
}

function noneAndBlockDisplay() {
    let mainSection = document.getElementById('main-sectionn');
    mainSection.style.display = 'none';
    let afterbook = document.getElementById('after-book');
    afterbook.style.display = 'block';
}

function total(taxAndSubtotal) {
    let getTotal = document.getElementById('total');
    getTotal.innerText = taxAndSubtotal;
}

function tax(subtotal) {
    let getTax = document.getElementById('tax');
    let finalTax = (subtotal * .1);
    getTax.innerText = finalTax;
    finalTotal = finalTax + subtotal;
    total(finalTotal);
}

function subtotal(id) {
    let getSubtotal = document.getElementById('subtotal');
    let firstClassTotalPrice = parseInt(document.getElementById('totalfirstclassPrice').innerText);
    let economyClassTotalPrice = parseInt(document.getElementById('totalEconnomyclassPrice').innerText);
    if (id == 'first-class-increase' || 'economy-class-increase') {
        let finalPrice = firstClassTotalPrice + economyClassTotalPrice;
        getSubtotal.innerText = finalPrice;

        return finalPrice;
    } else if (id == 'first-class-decrease' || 'economy-class-decrease') {
        let finalPrice = firstClassTotalPrice - (-economyClassTotalPrice);
        getSubtotal.innerText = finalPrice;
        return finalPrice;
    }
}

function TotalPriceCount(id) {
    let firstClass = document.getElementById('totalfirstclassPrice');
    let firstClassPrice = parseInt(firstClass.innerText);
    let economyClass = document.getElementById('totalEconnomyclassPrice');
    let economyClassPrice = parseInt(economyClass.innerText);
    if (id == 'first-class-increase') {
        let sum = firstClassPrice + 150;
        firstClass.innerText = sum;
        return sum;
    } else if (id == 'economy-class-increase') {
        let sum = economyClassPrice + 100;
        economyClass.innerText = sum;
        return sum;
    } else if (id == 'first-class-decrease') {
        if (firstClassPrice > 0) {
            let sum = firstClassPrice - 150;
            firstClass.innerText = sum;
        } else if (firstClassPrice <= 0) {
            firstClass.innerText = 0;
        }
    } else if (id == 'economy-class-decrease') {
        if (economyClassPrice > 0) {
            let sum = economyClassPrice - 100;
            economyClass.innerText = sum;
        } else if (economyClassPrice <= 0) {
            economyClass.innerText = 0;
        }
    }
}

function decreaseInput(id) {
    let input = document.getElementById(id);
    let inputValue = parseInt(input.value);
    if (inputValue > 0) {
        let finalValue = inputValue - 1;
        input.value = finalValue;
        return finalValue;
    } else {
        let finalValue = 0
        input.value = finalValue;
        return finalValue;
    }
}

function increaseInput(id) {
    let input = document.getElementById(id);
    let inputValue = parseInt(input.value);
    let finalInputValue = inputValue + 1;
    input.value = finalInputValue;
}