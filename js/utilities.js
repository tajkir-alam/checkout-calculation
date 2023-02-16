// Checkout Section
function totalBill(){
    const actionCamera = document.getElementById('action-cam-cost').innerText;
    const DSLRCamera = document.getElementById('dslr-cam-cost').innerText;
    const mediumDrone = document.getElementById('drone-cost').innerText;
    const coverMic = document.getElementById('mic-cost').innerText;

    const totalAmount = parseFloat(actionCamera) + parseFloat(DSLRCamera) + parseFloat(mediumDrone) + parseFloat(coverMic);
    
    const totalinText = document.getElementById('total-bill');
    totalinText.innerText = totalAmount;
}

function priceAdd(cartId, priceIs, priceAdded, addQuantity){
    document.getElementById(cartId).addEventListener('click', function(){
        const amount = document.getElementById(priceIs).innerText;
        const price = document.getElementById(priceAdded);
        price.innerText = amount;

        
        

        // Total Sum 
        totalBill();

        // Quantity Value
        const quantityValues = document.getElementById(addQuantity);
        quantityValues.setAttribute('value', '1');       

        const quantityCommons = document.querySelectorAll('.quantity-common');
        for(const quantityCommon of quantityCommons){
            quantityCommon.removeAttribute('disabled');
        }
        
    })
}



// Quantity increase & decrease section
function quantityPlus(plus, productAmount, priceIs, nowPrice){
    document.getElementById(plus).addEventListener('click', function(){
        const previousQuantity = document.getElementById(productAmount).value;
        const currentQuantity = parseInt(previousQuantity) + 1; 
        document.getElementById(productAmount).value = currentQuantity;


        const currentPrice = document.getElementById(priceIs).innerText;
        const updatePrice = parseFloat(currentPrice) * currentQuantity;
        document.getElementById(nowPrice).innerText = updatePrice;
        totalBill();
    })
}

function quantityMinus(plus, productAmount, priceIs, nowPrice){
    document.getElementById(plus).addEventListener('click', function(){
        const previousQuantity = document.getElementById(productAmount).value;
        const currentQuantity = parseInt(previousQuantity) - 1; 
        document.getElementById(productAmount).value = currentQuantity;
        if(document.getElementById(productAmount).value < 1){
            const quantityCommons = document.querySelectorAll('.quantity-common');
            for(const quantityCommon of quantityCommons){
            quantityCommon.setAttribute('disabled', true);
            document.getElementById(productAmount).value = "";
            }
        }
        const currentPrice = document.getElementById(priceIs).innerText;
        const updatePrice = parseFloat(document.getElementById(nowPrice).innerText) - parseFloat(currentPrice);
        document.getElementById(nowPrice).innerText = updatePrice;
        totalBill();
    })
}
