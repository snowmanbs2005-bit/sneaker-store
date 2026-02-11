const products = [
    {
        name: "Samba OG Shoes",
        price: "$80",
        img: "Samba_OG_Shoes_Green_JP9500_01_00_standard.avif",
        desc: "Классика в зеленом цвете"
    },
    {
        name: "Liberty London Samba OG",
        price: "$85",
        img: "adidas_Liberty_London_Samba_OG_Shoes_Pink_JQ2008_01_00_standard.avif",
        desc: "Эксклюзивная расцветка Pink / Cloud White"
    },
    {
        name: "F50 SPARKFUSION Cleats",
        price: "$75",
        img: "F50_SPARKFUSION_LEAGUE_Mid_Cut_Firm_Ground_-_Artificial_Ground_Soccer_Cleats_Kids_White_KJ1438_22_model.avif",
        desc: "Для будущих чемпионов"
    },
    {
        name: "FIFA World Cup 26™ Ball",
        price: "$170",
        img: "FIFA_World_Cup_26tm_Trionda_Pro_Ball_White_JD8021_HM1.avif",
        desc: "Официальный мяч чемпионата"
    }
];

const grid = document.getElementById('product-grid');

products.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <p class="price">${item.price}</p>
        <button>Добавить в корзину</button>
    `;
    grid.appendChild(card);
});