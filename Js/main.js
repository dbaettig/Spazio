
MenuPasta = [
    {
        "name": "PASTA ALLA CHITARRA",
        "description": "Salami, tomatsås, prosciutto och pancetta",
        "price": 99
    },
    {
        "name": "PASTA FUNGHI TARTUFO",
        "description": "Champinjoner, grädde, tryffelkräm",
        "price": 99
    },
    {
        "name": "PASTA CARBONARA",
        "description": "Bacon, grädde, lök, svartpeppar",
        "price": 99
    },
    {
        "name": "SPAGHETTI AGLIO OLIO PEPERONCINO",
        "description": "Vitlök, chili, olja, persilja",
        "price": 99
    },
    {
        "name": "LASAGNE AL FORNO",
        "description": "Köttsås på oxkött",
        "price": 99
    },
    {
        "name": "PASTA PESTO",
        "description": "Basilika, olja, pinjenötter, parmesan",
        "price": 99
    }
]

MenuPizza = [
    {
        "name": "Margarita",
        "description": "Tomatsås, mozzarella, basilika",
        "price": "65 / 110"
    },
    {
        "name": "PARMA",
        "description": "Tomatsås, mozzarella, parmesanost, lufttorkad skinka, ruccola",
        "price": "65 / 110"
    },
    {
        "name": "DAVIOLA",
        "description": "Tomatsås, mozzarella, stark salami, oliver",
        "price": "65 / 110"
    },
    {
        "name": "FUNGHI",
        "description": "Tomatsås, mozzarella, svamp, parmesanost",
        "price": "65 / 110"
    },
    {
        "name": "CAPPRICIOSA",
        "description": "Tomatsås, mozzarella, kokt skinka, champinjoner",
        "price": "65 / 110"
    },
    {
        "name": "AGLIO OLIO PEPERONCINO",
        "description": "Tomatsås, mozzarella, chili, vitlök, parmesanost, ruccola",
        "price": "65 / 110"
    },
    {
        "name": "PIZZA TONNIO",
        "description": "Tomatsås, mozzarella, tonfisk, rödlök, kapris",
        "price": "65 / 110"
    },
    {
        "name": "VEGE",
        "description": "Tomatsås, mozzarella, oliver, grillade grönsaker, lök, champinjoner",
        "price": "65 / 110"
    },
    {
        "name": "QUATTRO FORMAGGIO",
        "description": "Tomatsås, 4 ostar",
        "price": "65 / 110"
    },
    {
        "name": "PIZZA TONNIO",
        "description": "Tomatsås, mozzarella, tonfisk, rödlök, kapris",
        "price": "65 / 110"
    },


]
MenuPizzaExtra = [
    {
        "name": "PIZZARULLE",
        "price": "79"
    },
    {
        "name": "MINIPIZZA",
        "price": "50"
    },
    {
        "name": "SALLADER",
        "price": "70"
    },
    {
        "name": "PANINI",
        "price": "70"
    },
    {
        "name": "VEGANSK LASAGNE",
        "price": "89"
    },

]
MenuDrinksWarm = [
    {
        "name": "ESPRESSO",
        "price": "15 / 20"
    },
    {
        "name": "CAFFE MACCHIATO",
        "price": "17 / 22"
    },
    {
        "name": "CAPPUCCINO",
        "price": 25
    },

    {
        "name": "ESPRESSO",
        "price": "15 / 20"
    },
    {
        "name": "CAFFE MACCHIATO",
        "price": "17 / 22"
    },
    {
        "name": "CAPPUCCINO",
        "price": 25
    },

    {
        "name": "ESPRESSO",
        "price": "15 / 20"
    },
    {
        "name": "CAFFE MACCHIATO",
        "price": "17 / 22"
    },
    {
        "name": "CAPPUCCINO",
        "price": 25
    },
]

MenuDrinksCold = [
    {
        "name": "ISLATTE",
        "price": 25
    },
    {
        "name": "ISLATTE VANILJ",
        "price": 25
    },
    {
        "name": "ISLATTE HASSELNÖT",
        "price": 25
    },
    {
        "name": "ISLATTE",
        "price": 25
    },
    {
        "name": "ISLATTE VANILJ",
        "price": 25
    },
    {
        "name": "ISLATTE HASSELNÖT",
        "price": 25
    },
    {
        "name": "ISLATTE VANILJ",
        "price": 25
    },



]

displayMenuPasta();

function displayMenuPasta() {
    let PastaList = "";
    for (const Pasta of MenuPasta) {
        PastaList += `
        <div class="pastaContainer">
            <div class="pastainfoContainer">
                <h4 class="pastaName">${Pasta.name}</h4>
                <p class="pastaDescription">${Pasta.description}</p>
             </div>
            <div class="pastaPriceContainer">
                 <p class="pastaPrice">${Pasta.price}kr</p>
            </div>
    </div>
    `
        document.getElementById("menuSection-menu_pasta").innerHTML = PastaList;
        console.log()

    }
}
displayMenuPizza();

function displayMenuPizza() {
    let PizzaList = "";
    for (const Pizza of MenuPizza) {
        PizzaList += `
        <div class="pizzaContainer">
            <div class="pizzainfoContainer">
                <h4 class="pizzaName">${Pizza.name}</h4>
                <p class="pizzaDescription">${Pizza.description}</p>
             </div>
            <div class="pizzaPriceContainer>
                <p class="pizzaPrice">${Pizza.price} kr</p>
            </div>
    </div>
    `
        document.getElementById("menuSection-menu_pizza").innerHTML = PizzaList;
        console.log()

    }
}

// displayMenuPizzaExtra();

// function displayMenuPizzaExtra() {
//     let PizzaExtraList = "";
//     for (const PizzaExtra of MenuPizzaExtra) {
//         PizzaExtraList += `
//         <div class="pizzaExtraContainer">
//                 <h4 class="pizzaExtraName">${PizzaExtra.name}</h4>
//                 <p class="pizzaExtraPrice">${PizzaExtra.price} kr</p>
//     </div>
//     `
//         document.getElementById("menuSection-menu_pizza").innerHTML = PizzaExtraList;
//         console.log()

//     }
// }
displayMenuDrinksWarm();

function displayMenuDrinksWarm() {
    let DrinksWarmList = "";
    for (const DrinksWarm of MenuDrinksWarm) {
        DrinksWarmList += `
        <div class="drinkWarmContainer">
            <h4 class="drinkWarmName">${DrinksWarm.name}</h4>
            <p class="drinkWarmNPrice">${DrinksWarm.price}kr</p>
         </div>
    `
        document.getElementById("menuSection-menu_drinksWarm").innerHTML = DrinksWarmList;
        console.log()

    }
}
displayMenuDrinksCold();

function displayMenuDrinksCold() {
    let DrinksColdList = "";
    for (const DrinksCold of MenuDrinksCold) {
        DrinksColdList += `
        <div class="drinkColdContainer">
            <h4 class="drinkColdName">${DrinksCold.name}</h4>
            <p class="drinkColdPrice">${DrinksCold.price}kr</p>
        </div>
    `
        document.getElementById("menuSection-menu_drinksCold").innerHTML = DrinksColdList;
        console.log()

    }
}


//TAB FUNCTION
// function showStuff(element) {
//     var tabContents = document.getElementsByClassName('tabContent');
//     for (var i = 0; i < tabContents.length; i++) {
//         tabContents[i].style.display = 'none';
//     }

//     var tabContentIdToShow = element.id.replace(/(\d)/g, '-$1');
//     document.getElementById(tabContentIdToShow).style.display = 'block';
// }

//SCROLL FUNCTION

function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
}

document.getElementById("scrollToMenu").addEventListener('click', () => {
    scrollTo(document.getElementById("anchorMenu"));
});
document.getElementById("scrollToCatering").addEventListener('click', () => {
    scrollTo(document.getElementById("anchorCatering"));
});