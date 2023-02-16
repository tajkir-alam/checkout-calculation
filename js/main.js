priceAdd('action-cart', 'action-cam-price', 'action-cam-cost', 'action-cam-quantity');
// increaseAmount('action-cart', 'action-cam-price', 'action-cam-cost');

priceAdd('camera-cart', 'dslr-cam-price', 'dslr-cam-cost', 'dslr-cam-quantity');

priceAdd('drone-cart', 'drone-price', 'drone-cost', 'drone-quantity');

priceAdd('mic-cart', 'mic-price', 'mic-cost', 'mic-quantity');



document.getElementById('coupon-input').addEventListener('keyup', function(){
    if(document.getElementById('coupon-input').value == 'fromRion'){
        const totalAmountString = document.getElementById('total-bill').innerText;
        const totalAmountNumber = parseFloat(totalAmountString);
        const totalAmount = totalAmountNumber * (10/100);
        const totalBill = document.getElementById('total-bill').innerText - totalAmount;
        document.getElementById('total-bill').innerText = totalBill;

        const p = document.createElement('p');
        p.className ='text-slate-500 font-bold ml-2';
        p.innerText = 'Here is your 10% discount';
        document.getElementById('coupon-section').appendChild(p);
        document.querySelectorAll('p')[1].remove();
    }
})

function checkoutBtn(){
    if(document.getElementById('total-bill').innerText != 00){
        document.getElementById('coupon-input').value = "";
        document.getElementById('action-cam-cost').innerText = '00';
        document.getElementById('dslr-cam-cost').innerText = '00';
        document.getElementById('drone-cost').innerText = '00';
        document.getElementById('mic-cost').innerText = '00';
        document.getElementById('total-bill').innerText = '00';
        alert('Your product will be deliver soon... Stay Tune!!!!!');
    }
}

quantity('increase-btn-action-cam', 'action-cam-quantity');
quantity('increase-btn-dslr-cam', 'dslr-cam-quantity');
quantity('increase-btn-drone', 'drone-quantity');
quantity('increase-btn-mic', 'mic-quantity');








document.getElementById('bold').addEventListener('click', function(){
    document.getElementById('text-area').classList.toggle('font-bold');
})
document.getElementById('italic').addEventListener('click', function(){
    document.getElementById('text-area').classList.toggle('italic');
})
document.getElementById('under-line').addEventListener('click', function(){
    document.getElementById('text-area').classList.toggle('underline');
})
document.getElementById('align-left').addEventListener('click', function(){
    document.getElementById('text-area').classList.toggle('text-left');
})
document.getElementById('align-center').addEventListener('click', function(){
    document.getElementById('text-area').classList.toggle('text-center');
})
document.getElementById('align-right').addEventListener('click', function(){
    document.getElementById('text-area').classList.toggle('text-right');
})
document.getElementById('align-justify').addEventListener('click', function(){
    document.getElementById('text-area').classList.toggle('text-justify');
})
document.getElementById('number-style').addEventListener('change', function(e){
    const input = e.target.value;
    document.getElementById('text-area').style.fontSize = input + 'px';
})
document.getElementById('text-transform').addEventListener('click', function(){
    document.getElementById('text-area').classList.toggle('uppercase');
})
document.getElementById('text-color').addEventListener('change', function(e){
    const color = e.target.value
    document.getElementById('text-area').style.color = color;
})


function uploadBtn(){
    if(document.getElementById('text-area').value !== ""){
        alert('Your post is uploaded');
        document.getElementById('text-area').value = "";
    }
}





