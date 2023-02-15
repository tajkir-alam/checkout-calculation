function priceAdd(cartId, priceIs, priceAdded){
    document.getElementById(cartId).addEventListener('click', function(){
        const amount = document.getElementById(priceIs).innerText;
        const price = document.getElementById(priceAdded);
        price.innerText = amount;

        
        

        // Total Sum 
        const actionCamera = document.getElementById('action-cam-cost').innerText;
        const DSLRCamera = document.getElementById('dslr-cam-cost').innerText;
        const mediumDrone = document.getElementById('drone-cost').innerText;
        const coverMic = document.getElementById('mic-cost').innerText;

        const totalAmount = parseFloat(actionCamera) + parseFloat(DSLRCamera) + parseFloat(mediumDrone) + parseFloat(coverMic);
        
        const totalinText = document.getElementById('total-bill');
        // const totalBill = parseFloat(totalinText);
        totalinText.innerText = totalAmount;
    })
}