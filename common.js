// Fonction pour charger et afficher les favoris (dans favoris.html)
window.updateFavoritesDisplay = function() {
    const favorites = getFavoriteProducts(); // Utilise la fonction de common.js
    const grid = document.getElementById("favoritesGrid");
    const emptyState = document.getElementById("emptyState");
    
    if (!grid) return;
    
    grid.innerHTML = "";
    
    if (favorites.length === 0) {
        emptyState.classList.add("show");
        return;
    }
    
    emptyState.classList.remove("show");
    
    favorites.forEach(product => {
        grid.innerHTML += `
        <div class="favorite-card" data-id="${product.id}">
            ${product.condition === 'Neuf' ? '<div class="new-badge">Neuf</div>' : ''}
            <img src="${product.img}" alt="${product.name}" class="favorite-image">
            <div class="favorite-info">
                <div class="favorite-category">${product.category}</div>
                <div class="favorite-name">${product.name}</div>
                <div class="favorite-price">${product.price}</div>
                <div class="favorite-description">${product.description || ''}</div>
                <div class="favorite-actions">
                    <button class="action-btn action-cart" onclick="addToCart(${product.id})">
                        <i class="bi bi-cart"></i> Ajouter
                    </button>
                    <button class="action-btn action-remove" onclick="toggleFavorite(${product.id})">
                        <i class="bi bi-trash"></i> Supprimer
                    </button>
                </div>
            </div>
        </div>`;
    });
    
    // Mettre à jour les statistiques
    updateFavoritesStats();
};

// Initialisation de la page favoris
document.addEventListener("DOMContentLoaded", function() {
    // Charger les favoris
    if (typeof window.updateFavoritesDisplay === 'function') {
        window.updateFavoritesDisplay();
    }
    
    // Mettre à jour les statistiques
    updateFavoritesStats();
});