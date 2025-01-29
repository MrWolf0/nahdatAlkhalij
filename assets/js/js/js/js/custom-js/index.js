function updateCountdown() {
    const auctionEndDate = new Date('2024-11-22T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = now - auctionEndDate;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "Auction Ended";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    updateNumber('days', days);
    updateNumber('hours', hours);
    updateNumber('minutes', minutes);
    updateNumber('seconds', seconds);
}

function updateNumber(elementId, value) {
    document.getElementById(elementId).textContent = value.toString().padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();


document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 60) { // Adjust the scroll threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});