priceAdd('action-cart', 'action-cam-price', 'action-cam-cost');
// increaseAmount('action-cart', 'action-cam-price', 'action-cam-cost');

priceAdd('camera-cart', 'dslr-cam-price', 'dslr-cam-cost');

priceAdd('drone-cart', 'drone-price', 'drone-cost');

priceAdd('mic-cart', 'mic-price', 'mic-cost');


function checkoutBtn(){
    if(document.getElementById('total-bill').innerText != 00){
        alert('Your product will be deliver soon... Stay Tune!!!!!');
    }
}