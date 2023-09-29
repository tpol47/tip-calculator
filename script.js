//This is a comment that I want to push to a branch

function calculate15Tip () {
    const totalAmount = parseFloat(document.getElementById('tip-input').value)
    const tipAmount = totalAmount * .15
    const result = document.getElementById('result')
    result.innerText = tipAmount
}

function calculate10Tip () {
    const totalAmount = parseFloat(document.getElementById('tip-input').value)
    const tipAmount = totalAmount * .10
    const result = document.getElementById('result')
    result.innerText = tipAmount
}

function calculate20Tip () {
    const totalAmount = parseFloat(document.getElementById('tip-input').value)
    const tipAmount = totalAmount * .20
    const result = document.getElementById('result')
    result.innerText = tipAmount
}