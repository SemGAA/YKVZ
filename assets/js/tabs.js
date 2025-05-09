document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(e) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        const tabId = this.getAttribute('data-tab');
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }

    // Add event listeners
    tabButtons.forEach(btn => btn.addEventListener('click', switchTab));
});