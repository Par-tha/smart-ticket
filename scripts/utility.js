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

for(const seats of allSeats){
    seats.addEventListener('click', function(e){

        // document.getElementById('seat-number').innerText = seats.innerText;
        // document.getElementById('class-name').innerText = 'Economy';
        // document.getElementById('seat-price').innerText = '1400'

        // const seatChoosen = document.getElementById('seat-shoosen').childNodes[1].innerText;
        
        // console.log(seatChoosen);

        
        const element = document.getElementById('seat-number');
        element.classList.add('hidden');

        const seatNumber = seats.innerText;
        
        const seatChoosen = document.getElementById('all-seat-choosen');
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = seatNumber;
        div.appendChild(p);
        // seatChoosen.appendChild(div);

        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        div.appendChild(p2);
        // seatChoosen.appendChild(div);

        const p3 = document.createElement('p');
        p3.innerText = '1400';
        div.appendChild(p3);

        seatChoosen.appendChild(div);
        
        
        // const p2 = document.createElement('p');
        // p2.innerText = 'Economy';
        // seatChoosen.appendChild(p2);
        
        
        // const p3 = document.createElement('p');
        // p3.innerText = '1400';
        // seatChoosen.appendChild(p3);
        
       
        count = count + 1;
       setInnerText('seat-count', count);

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