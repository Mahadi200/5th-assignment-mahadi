document.getElementById('donate-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('input-donate').value;
    const addMoneyNumber = parseFloat(addMoney);
    
    
    if (addMoney !== '-') {
      const balance = document.getElementById('amount-is').innerText;
    const balanceNumber = parseFloat(balance);
      const NewBalance = addMoneyNumber + balanceNumber;
     
      document.getElementById('amount-is').innerText = NewBalance;

    } else {
      alert('Please add Money');
    }

    

})