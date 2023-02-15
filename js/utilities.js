function priceAdd(cartId, priceIs, priceAdded){
    document.getElementById(cartId).addEventListener('click', function(){
        const amount = document.getElementById(priceIs).innerText;
        const price = document.getElementById(priceAdded);
        price.innerText = amount;
    })
}