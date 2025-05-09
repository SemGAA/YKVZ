document.addEventListener('DOMContentLoaded', function() {
    const departmentFilter = document.getElementById('department-filter');
    const resetFilterBtn = document.getElementById('reset-vacancy-filter');
    const vacancyCards = document.querySelectorAll('.vacancy-card');
    const noVacancies = document.getElementById('no-vacancies');

    function filterVacancies() {
        const selectedDepartment = departmentFilter.value;
        let visibleCount = 0;

        vacancyCards.forEach(card => {
            const cardDepartment = card.getAttribute('data-department');

            if (selectedDepartment === 'all' || cardDepartment === selectedDepartment) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (visibleCount === 0) {
            noVacancies.style.display = 'block';
        } else {
            noVacancies.style.display = 'none';
        }
    }

    function resetFilters() {
        departmentFilter.value = 'all';
        filterVacancies();
    }

    // Event listeners
    departmentFilter.addEventListener('change', filterVacancies);
    resetFilterBtn.addEventListener('click', resetFilters);

    // Initialize
    filterVacancies();

    // Toggle vacancy details
    vacancyCards.forEach(card => {
        const mainPart = card.querySelector('.vacancy-main');
        mainPart.addEventListener('click', function() {
            const details = card.querySelector('.vacancy-details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
            card.classList.toggle('active');
        });
    });
});