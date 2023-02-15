function priceAdd(cartId, priceIs, priceAdded){
    document.getElementById(cartId).addEventListener('click', function(){
        const amount = document.getElementById(priceIs).innerText;
        const price = document.getElementById(priceAdded);
        price.innerText = amount;
    })
}

// function increaseAmount(cartId, priceIs, priceAdded){
//     document.getElementById(cartId).addEventListener('mouseenter', function(){
//         const valueIncrease = document.getElementById(priceIs).innerText;
//         const value = parseFloat(valueIncrease); 
//         const ok = value *2;
//         const price = document.getElementById(priceAdded);
//         price.innerText = ok;
//     })
// }



// Sum of all Products
function total(){
    const actionCamera = document.getElementById('action-cam-cost');
    const DSLRCamera = document.getElementById('dslr-cam-cost');
    const mediumDrone = document.getElementById('drone-cost');
    const coverMic = document.getElementById('mic-cost');

    const totalAmount = parseFloat(actionCamera) + parseFloat(DSLRCamera) + parseFloat(mediumDrone) + parseFloat(coverMic);
    
    const totalinText = document.getElementById('total-bill');
    const totalBill = parseFloat(totalinText);
    totalBill.innerText = totalAmount;
}