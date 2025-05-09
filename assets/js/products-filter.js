document.addEventListener('DOMContentLoaded', function() {
    const productTypeFilter = document.getElementById('product-type');
    const productCategoryFilter = document.getElementById('product-category');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const resetFiltersBtnAlt = document.getElementById('reset-filters-btn');
    const productsContainer = document.getElementById('products-container');
    const productCards = document.querySelectorAll('.product-card');
    const noResults = document.getElementById('no-results');

    function filterProducts() {
        const selectedType = productTypeFilter.value;
        const selectedCategory = productCategoryFilter.value;
        let visibleCount = 0;

        productCards.forEach(card => {
            const cardType = card.getAttribute('data-type');
            const cardCategory = card.getAttribute('data-category');

            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const categoryMatch = selectedCategory === 'all' || cardCategory === selectedCategory;

            if (typeMatch && categoryMatch) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (visibleCount === 0) {
            noResults.style.display = 'block';
            productsContainer.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            productsContainer.style.display = 'grid';
        }
    }

    function resetFilters() {
        productTypeFilter.value = 'all';
        productCategoryFilter.value = 'all';
        filterProducts();
    }

    // Event listeners
    productTypeFilter.addEventListener('change', filterProducts);
    productCategoryFilter.addEventListener('change', filterProducts);
    resetFiltersBtn.addEventListener('click', resetFilters);
    resetFiltersBtnAlt.addEventListener('click', resetFilters);

    // Initialize
    filterProducts();
});