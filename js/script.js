
// Select the dropdown button and the dropdown content
let dropdownBtn = document.querySelectorAll('.dropbtn');
let dropdownContent = document.querySelectorAll('.dropdown-content');
let navContainer = document.querySelector( '.nav-Container' );

// Add click event listener to the dropdown button
dropdownBtn.forEach((e,i)=>{

    e.addEventListener('mouseover', function(e) {
        // Toggle the display of the dropdown content
    
        dropdownContent[i].style.display = 'block'; // Show the dropdown
        navContainer.style.backgroundColor='#efefef';
      
      });

      window.addEventListener('mouseout', function() {
        // Toggle the display of the dropdown content
       
          dropdownContent[i].style.display = 'none'; // Show the dropdown
          navContainer.style.backgroundColor= 'white';
      
      });
})


const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselItems = document.querySelectorAll('.slide-item');
let currentIndex = 0;

// Show the initial slide
carouselItems[currentIndex].classList.add('active');

// Function to show the slide
function showSlide(index) {
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[index].classList.add('active');
}

// Previous Button Click Event
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
});

// Next Button Click Event
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
});



