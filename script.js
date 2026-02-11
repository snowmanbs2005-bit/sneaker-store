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
            <a href="product.html?id=${item.id}" style="text-decoration: none; color: inherit;">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="price">$${item.price}</p>
            </a>
        `;
        grid.appendChild(card);
    });
});