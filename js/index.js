document.getElementById('donate-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('input-donate').value;
    const addMoneyNumber = parseFloat(addMoney);
    

    if (addMoney !== isNaN ) {
      const balance = document.getElementById('amount-is').innerText;
      const balanceNumber = parseFloat(balance);
      const NewBalance = addMoneyNumber + balanceNumber;

      const mainBalanec = document.getElementById('is-money').innerText;
      console.log(mainBalanec);

      const mainBalanceNumber = parseFloat(mainBalanec);
      const addmainbalanec = mainBalanceNumber - addMoneyNumber;
      document.getElementById('is-money').innerText = addmainbalanec;

      document.getElementById('amount-is').innerText = NewBalance;

    } else {
      alert('Please add Money');
    }

    

})