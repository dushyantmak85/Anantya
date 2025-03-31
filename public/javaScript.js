// Register card

const card1=document.getElementsByClassName('card')[0];
card1.addEventListener('click', function(){
    window.location.href = '/register';
});

//Voter Count card

/*let count = 0;
let countElement = document.querySelector('.count');

function updateCounter() {
    const newCount = count + 1;

    // Create a new span for the new count
    const newElement = document.createElement('span');
    newElement.classList.add('count');
    newElement.textContent = newCount;
    
    // Set initial position and opacity for the new element (starting below)
    newElement.classList.add('count-enter');

    const container = document.querySelector('.counter-container');
    container.appendChild(newElement);

    // Animate old count moving up and fading out
    countElement.classList.add('count-exit');

    // Animate the new count moving from below and appearing
    setTimeout(() => {
        newElement.classList.remove('count-enter');
        newElement.classList.add('count-enter-active');
    }, 50);

    // Remove old element after the transition

    countElement.remove();
   

    // Update count and reference to the new element
    count = newCount;
    countElement = newElement;
}

// Increment every 2 seconds for demonstration
setInterval(updateCounter, 3000);

// Card Container Transition on Scroll 

*/ 

// ECI Updates

const updates = document.querySelector('.card3');
updates.addEventListener('click', function(){
    window.location.href = 'https://www.eci.gov.in/';
});



