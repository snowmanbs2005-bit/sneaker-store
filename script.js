document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');

    // Если элемента нет на странице, выходим
   if (!grid) return;

    // Очищаем сетку
    grid.innerHTML = '';

    products.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <a href="product.html?id=${item.id}" class="product-card-link">
                <img src="${item.img}" alt="${item.name}">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p class="price">$${item.price}</p>
                    <button class="view-btn">Смотреть детали</button>
                </div>
            </a>
        `;
        grid.appendChild(card);
    });
});