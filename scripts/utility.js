function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}


const allSeats = document.getElementsByClassName('seat-btn');
let count = 0;
let price = 0;

for(const seats of allSeats){
    seats.addEventListener('click', function(e){

       
        const element = document.getElementById('seat-number');
        element.classList.add('hidden');

        const seatNumber = seats.innerText;
        
        const allSeatChoosen = document.getElementById('all-seat-choosen');
        
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
        
    
        count = count + 1;
       setInnerText('seat-count', count);
       price = price + 1400;
       setInnerText('total-cost', price)


    })
}



function setInnerText (id, value){
    // console.log(id , value)
    document.getElementById(id).innerText = value;
}




// function setBackgroundColor(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400');
// }

// function removeBackgroundColor(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('bg-orange-400');
// }