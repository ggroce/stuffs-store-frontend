// No longer called by the store.  Code retreives this data from firebase.

const SHOP_DATA = {
  caffinatedBeans: {
    id: 1,
    title: "Caffinated Beans",
    routeName: "caffinatedbeans",
    items: [
      {
        id: 1,
        name: "Viennese",
        imageUrl: "/images/shop-img/caffinatedbeans/viennese.jpg",
        price: 12,
        attribution: {
          photographer: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 2,
        name: "Copenhagen",
        imageUrl: "/images/shop-img/caffinatedbeans/copenhagen.jpg",
        price: 9,
        attribution: {
          photographer: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 3,
        name: "Guatemala",
        imageUrl: "/images/shop-img/caffinatedbeans/guatemala.jpg",
        price: 10,
        attribution: {
          photographer: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 4,
        name: "French Roast",
        imageUrl: "/images/shop-img/caffinatedbeans/french-roast.jpg",
        price: 8,
        attribution: {
          photographer: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 5,
        name: "Costa Rican",
        imageUrl: "/images/shop-img/caffinatedbeans/costa-rican.jpg",
        price: 10,
        attribution: {
          photographer: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 6,
        name: "Italian Roast",
        imageUrl: "/images/shop-img/caffinatedbeans/italian-roast.jpg",
        price: 14,
        attribution: {
          photographer: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 7,
        name: "Colombian Supremo",
        imageUrl: "/images/shop-img/caffinatedbeans/colombian-supremo.jpg",
        price: 9,
        attribution: {
          photographer: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 8,
        name: "German Roast",
        imageUrl: "/images/shop-img/caffinatedbeans/german-roast.jpg",
        price: 9,
        attribution: {
          photographer: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 9,
        name: "Ethiopian",
        imageUrl: "/images/shop-img/caffinatedbeans/ethiopian.jpg",
        price: 10,
        attribution: {
          photographer: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
    ],
  },
  coffeeMakers: {
    id: 2,
    title: "Coffee Makers",
    routeName: "coffeemakers",
    items: [
      {
        id: 10,
        name: "Cosori",
        imageUrl: "/images/shop-img/coffeemakers/cosori.jpg",
        price: 50,
        attribution: {
          photographer: "Tyler Nix",
          link: "https://unsplash.com/@tylernixcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 11,
        name: "Stlend",
        imageUrl: "/images/shop-img/coffeemakers/stlend.jpg",
        price: 25,
        attribution: {
          photographer: "Tyler Nix",
          link: "https://unsplash.com/@tylernixcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 12,
        name: "Stainless PourOver",
        imageUrl: "/images/shop-img/coffeemakers/stainless-pourover.jpg",
        price: 30,
        attribution: {
          photographer: "Battlecreek Coffee Roasters",
          link: "https://unsplash.com/@battlecreekcoffeeroasters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 13,
        name: "Venus Tran",
        imageUrl: "/images/shop-img/coffeemakers/venus-tran.jpg",
        price: 75,
        attribution: {
          photographer: "Thanh Tran",
          link: "https://unsplash.com/@coffee_wanderer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 14,
        name: "Dowan",
        imageUrl: "/images/shop-img/coffeemakers/dowan.jpg",
        price: 20,
        attribution: {
          photographer: "William Moreland",
          link: "https://unsplash.com/@relentlessjpg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 15,
        name: "Aeropress",
        imageUrl: "/images/shop-img/coffeemakers/aeropress.jpg",
        price: 35,
        attribution: {
          photographer: "William Moreland",
          link: "https://unsplash.com/@relentlessjpg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 16,
        name: "Cafelissimo",
        imageUrl: "/images/shop-img/coffeemakers/cafelissimo.jpg",
        price: 45,
        attribution: {
          photographer: "Emma Smith",
          link: "https://unsplash.com/@emmafaithcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 17,
        name: "Simplique",
        imageUrl: "/images/shop-img/coffeemakers/simplique.jpg",
        price: 200,
        attribution: {
          photographer: "Wes Walker",
          link: "https://unsplash.com/@southwes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
    ],
  },
  coffeeGrinders: {
    id: 3,
    title: "Coffee Grinders",
    routeName: "coffeegrinders",
    items: [
      {
        id: 18,
        name: "JavaPresse",
        imageUrl: "/images/shop-img/coffeegrinders/javapresse.jpg",
        price: 75,
        attribution: {
          photographer: "Elahe Motamedi",
          link: "https://unsplash.com/@elahemotamedi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 19,
        name: "Niche",
        imageUrl: "/images/shop-img/coffeegrinders/niche.jpg",
        price: 120,
        attribution: {
          photographer: "Dan Counsell",
          link: "https://unsplash.com/s/photos/coffee-grinder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 20,
        name: "Fellow Ode",
        imageUrl: "/images/shop-img/coffeegrinders/fellow-ode.jpg",
        price: 150,
        attribution: {
          photographer: "Erin Agius",
          link: "https://unsplash.com/@erinagius?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 21,
        name: "Electric Burr",
        imageUrl: "/images/shop-img/coffeegrinders/electric-burr.jpg",
        price: 165,
        attribution: {
          photographer: "Nathan Dumlao",
          link: "https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 22,
        name: "Niche 3",
        imageUrl: "/images/shop-img/coffeegrinders/niche-3.jpg",
        price: 185,
        attribution: {
          photographer: "Declan Cronin",
          link: "https://unsplash.com/s/photos/coffee-grinder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
    ],
  },
  ceramicMugs: {
    id: 4,
    title: "Ceramic Mugs",
    routeName: "ceramicmugs",
    items: [
      {
        id: 23,
        name: "Square Boy",
        imageUrl: "/images/shop-img/ceramicmugs/square-boy.jpg",
        price: 17,
        attribution: {
          photographer: "John Forson",
          link: "https://unsplash.com/@jonforson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 24,
        name: "Adventure Begins",
        imageUrl: "/images/shop-img/ceramicmugs/adventure-begins.jpg",
        price: 20,
        attribution: {
          photographer: "S Migaj",
          link: "https://unsplash.com/@simonmigaj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 25,
        name: "Sixteen Miles",
        imageUrl: "/images/shop-img/ceramicmugs/sixteen-miles.jpg",
        price: 15,
        attribution: {
          photographer: "Sixteen Miles Out",
          link: "https://unsplash.com/@sixteenmilesout?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 26,
        name: "Polechonska",
        imageUrl: "/images/shop-img/ceramicmugs/polechonska.jpg",
        price: 12,
        attribution: {
          photographer: "Patrycja Polechonska",
          link: "https://unsplash.com/@ppolecho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 27,
        name: "Bevel",
        imageUrl: "/images/shop-img/ceramicmugs/bevel.jpg",
        price: 16,
        attribution: {
          photographer: "Noah Buscher",
          link: "https://unsplash.com/@noahbuscher?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 28,
        name: "Dark Rustic",
        imageUrl: "/images/shop-img/ceramicmugs/dark-rustic.jpg",
        price: 15,
        attribution: {
          photographer: "Jakob Owens",
          link: "https://unsplash.com/@jakobowens1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 29,
        name: "Cookies and Cream",
        imageUrl: "/images/shop-img/ceramicmugs/cookies-and-cream.jpg",
        price: 11,
        attribution: {
          photographer: "Kitera Dent",
          link: "https://unsplash.com/@kitera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
    ],
  },
  coffeeThermoses: {
    id: 5,
    title: "Coffee Thermoses",
    routeName: "coffeethermoses",
    items: [
      {
        id: 30,
        name: "Silver Canteen",
        imageUrl: "/images/shop-img/coffeethermoses/silver-canteen.jpg",
        price: 35,
        attribution: {
          photographer: "Arūnas Naujokas",
          link: "https://unsplash.com/@new_memel_photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 31,
        name: "Liftoff",
        imageUrl: "/images/shop-img/coffeethermoses/liftoff.jpg",
        price: 20,
        attribution: {
          photographer: "Jeffrey Brandjes",
          link: "https://unsplash.com/@jeffreyfotografie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 32,
        name: "Clima",
        imageUrl: "/images/shop-img/coffeethermoses/clima.jpg",
        price: 25,
        attribution: {
          photographer: "Rohan",
          link: "https://unsplash.com/@rohanphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 33,
        name: "Thermos",
        imageUrl: "/images/shop-img/coffeethermoses/thermos.jpg",
        price: 25,
        attribution: {
          photographer: "Ostap Senyuk",
          link: "https://unsplash.com/@kintecus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 34,
        name: "All Nighter",
        imageUrl: "/images/shop-img/coffeethermoses/all-nighter.jpg",
        price: 15,
        attribution: {
          photographer: "Bluewater Sweden",
          link: "https://unsplash.com/@bluewaterglobe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
    ],
  },
};

export default SHOP_DATA;
