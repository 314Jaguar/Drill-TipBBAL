document.addEventListener('DOMContentLoaded', () => {
    // Increment the visitor count every time the page is loaded
    incrementVisitorCount();

    // Display the current visitor count
    displayVisitorCount();

    // Add event listener to the All Time Viewership button
    document.getElementById('all-time-viewers-btn').addEventListener('click', displayAllTimeViewership);
});

function incrementVisitorCount() {
    if (localStorage.getItem('visitorCount')) {
        let visitorCount = parseInt(localStorage.getItem('visitorCount'));
        localStorage.setItem('visitorCount', visitorCount + 1);
    } else {
        localStorage.setItem('visitorCount', 1);
    }
}

function displayVisitorCount() {
    let visitorCount = localStorage.getItem('visitorCount');
    document.getElementById('visitor-count').textContent = visitorCount;
}

function displayAllTimeViewership() {
    let visitorCount = localStorage.getItem('visitorCount');
    alert(`All Time Viewership: ${visitorCount}`);
}
