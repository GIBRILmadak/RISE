// Talent tree toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Toggle category expansion
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const toggle = this.querySelector('.category-toggle');
            const subcategory = this.nextElementSibling;

            if (subcategory.classList.contains('hidden')) {
                subcategory.classList.remove('hidden');
                toggle.textContent = '▼';
            } else {
                subcategory.classList.add('hidden');
                toggle.textContent = '▶';
            }
        });
    });

    // Toggle subcategory expansion
    const subcategoryHeaders = document.querySelectorAll('.subcategory-header');
    subcategoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const toggle = this.querySelector('.subcategory-toggle');
            const nextSibling = this.nextElementSibling;

            // Find all talent-items that belong to this subcategory
            const talentItems = [];
            let sibling = nextSibling;
            while (sibling && sibling.classList.contains('talent-item')) {
                talentItems.push(sibling);
                sibling = sibling.nextElementSibling;
            }

            const isHidden = talentItems.length > 0 && talentItems[0].classList.contains('hidden');

            talentItems.forEach(item => {
                if (isHidden) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });

            toggle.textContent = isHidden ? '▼' : '▶';
        });
    });

    // Handle save button
    const saveButton = document.querySelector('.submit-btn');
    saveButton.addEventListener('click', function() {
        const selectedTalents = [];
        const checkboxes = document.querySelectorAll('.talent-checkbox:checked');

        checkboxes.forEach(checkbox => {
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            if (label) {
                selectedTalents.push(label.textContent);
            }
        });

        if (selectedTalents.length > 0) {
            alert(`Talents sauvegardés: ${selectedTalents.join(', ')}`);
            // Here you would typically send the data to a server
        } else {
            alert('Veuillez sélectionner au moins un talent.');
        }
    });
});