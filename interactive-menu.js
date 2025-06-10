const menuItems = {
    breakfast: [
        {
            name: "Pancake Stack",
            description: "Fluffy pancakes served with syrup and butter",
            price: "$6.99",
            image: "pancakes.jpeg"
        },
        {
            name: "Avocado Toast",
            description: "Toasted sourdough topped with avocado and spices",
            price: "$5.50",
            image: "avocado-toast.jpeg"
        }
    ],
    lunch: [
        {
            name: "Grilled Cheese Sandwich",
            description: "Classic sandwich with gooey cheese and golden crust",
            price: "$7.00",
            image: "grilled-cheese.jpeg"
        },
        {
            name: "Veggie Wrap",
            description: "Fresh veggies rolled in a tortilla wrap",
            price: "$6.25",
            image: "veggie-wrap.jpeg"
        }
    ],
    beverages: [
        {
            name: "Cappuccino",
            description: "Rich espresso with steamed milk and foam",
            price: "$3.75",
            image: "cappuccino.jpeg"
        },
        {
            name: "Iced Tea",
            description: "Chilled tea with a hint of lemon",
            price: "$2.50",
            image: "iced-tea.jpeg"
        }
    ]
};

function showCategory(category) {
    const container = document.getElementById("menu-content");
    container.innerHTML = "";

    const items = menuItems[category];
    const section = document.createElement("div");
    section.className = "menu-category";

    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";

        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
        `;

        section.appendChild(div);
    });

    container.appendChild(section);
}

// Load breakfast by default
window.addEventListener("DOMContentLoaded", () => showCategory("breakfast"));