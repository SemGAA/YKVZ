document.addEventListener('DOMContentLoaded', function() {
    const yearFilter = document.getElementById('news-year');
    const categoryFilter = document.getElementById('news-category');
    const resetFiltersBtn = document.getElementById('reset-news-filters');
    const resetFiltersBtnAlt = document.getElementById('reset-news-btn');
    const newsContainer = document.getElementById('news-container');
    const newsCards = document.querySelectorAll('.news-card');
    const noNews = document.getElementById('no-news');

    function filterNews() {
        const selectedYear = yearFilter.value;
        const selectedCategory = categoryFilter.value;
        let visibleCount = 0;

        newsCards.forEach(card => {
            const cardYear = card.getAttribute('data-year');
            const cardCategory = card.getAttribute('data-category');

            const yearMatch = selectedYear === 'all' || cardYear === selectedYear;
            const categoryMatch = selectedCategory === 'all' || cardCategory === selectedCategory;

            if (yearMatch && categoryMatch) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (visibleCount === 0) {
            noNews.style.display = 'block';
            newsContainer.style.display = 'none';
        } else {
            noNews.style.display = 'none';
            newsContainer.style.display = 'grid';
        }
    }

    function resetFilters() {
        yearFilter.value = 'all';
        categoryFilter.value = 'all';
        filterNews();
    }

    // Event listeners
    yearFilter.addEventListener('change', filterNews);
    categoryFilter.addEventListener('change', filterNews);
    resetFiltersBtn.addEventListener('click', resetFilters);
    resetFiltersBtnAlt.addEventListener('click', resetFilters);

    // Initialize
    filterNews();
});