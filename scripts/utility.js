function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

let seatLeft = parseInt(document.getElementById('seat-left').innerText);
const allSeats = document.getElementsByClassName('seat-btn');
let count = 0;
let price = 0;

for(const seats of allSeats){
    seats.addEventListener('click', function(e){

        // no seat choosen hide
        const element = document.getElementById('seat-number');
        element.classList.add('hidden');

        const seatNumber = seats.innerText;
        
        const allSeatChoosen = document.getElementById('all-seat-choosen');

        // seat selected color
        e.target.style.backgroundColor = '#84dc7661';
        e.target.setAttribute ='selected';
        
        // created seat, class and seat price in div
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = seatNumber;
        div.appendChild(p);
        

        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        div.appendChild(p2);
        

        const p3 = document.createElement('p');
        p3.innerText = '1400';
        div.appendChild(p3);

        allSeatChoosen.appendChild(div);
        div.classList.add('flex', 'justify-between','mb-3')
        
        // seat count
        count = count + 1;
       setInnerText('seat-count', count);
       
        // price
       price = price + 1400;
       setInnerText('total-cost', price);

        // seat left
        
        seatLeft = seatLeft - 1 ;
        setInnerText('seat-left', seatLeft);

        
        const totalPrice = parseInt(document.getElementById('total-cost').innerText);
       if(totalPrice > 5600){
        alert('Max Select Four Seats');
        return ;
       }
       
    })
}

// cupon apply button
document.getElementById('cupon-text').addEventListener('keyup', function(e){
    const text = e.target.value;
    const cuponApplyBtn = document.getElementById('cupon-apply-btn');
    

    // cupon NEW15 and COUPLE20 
    if(text === 'NEW15'){
        cuponApplyBtn.style.backgroundColor = '#1DD100';
        cuponApplyBtn.removeAttribute('disabled')
        
        
    }
    else if(text === 'COUPLE20'){
        cuponApplyBtn.style.backgroundColor = '#1DD100';
        cuponApplyBtn.removeAttribute('disabled');
    }
    else{
        cuponApplyBtn.setAttribute('disabled', true);
    }

})



function apply(){
    console.log(text)
        
    }



function setInnerText (id, value){
    document.getElementById(id).innerText = value;
}