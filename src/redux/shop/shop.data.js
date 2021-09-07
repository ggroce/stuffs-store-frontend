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
          photagrapher: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 2,
        name: "Copenhagen",
        imageUrl: "/images/shop-img/caffinatedbeans/copenhagen.jpg",
        price: 9,
        attribution: {
          photagrapher: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 3,
        name: "Guatemala",
        imageUrl: "/images/shop-img/caffinatedbeans/guatemala.jpg",
        price: 10,
        attribution: {
          photagrapher: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 4,
        name: "French Roast",
        imageUrl: "/images/shop-img/caffinatedbeans/french-roast.jpg",
        price: 8,
        attribution: {
          photagrapher: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 5,
        name: "Costa Rican",
        imageUrl: "/images/shop-img/caffinatedbeans/costa-rican.jpg",
        price: 10,
        attribution: {
          photagrapher: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 6,
        name: "Italian Roast",
        imageUrl: "/images/shop-img/caffinatedbeans/italian-roast.jpg",
        price: 14,
        attribution: {
          photagrapher: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 7,
        name: "Colombian Supremo",
        imageUrl: "/images/shop-img/caffinatedbeans/colombian-supremo.jpg",
        price: 9,
        attribution: {
          photagrapher: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 8,
        name: "German Roast",
        imageUrl: "/images/shop-img/caffinatedbeans/german-roast.jpg",
        price: 9,
        attribution: {
          photagrapher: "Ave Calvar",
          link: "https://unsplash.com/@shotbyrain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 9,
        name: "Ethiopian",
        imageUrl: "/images/shop-img/caffinatedbeans/ethiopian.jpg",
        price: 10,
        attribution: {
          photagrapher: "Ave Calvar",
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
          photagrapher: "Tyler Nix",
          link: "https://unsplash.com/@tylernixcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 11,
        name: "Stlend",
        imageUrl: "/images/shop-img/coffeemakers/stlend.jpg",
        price: 25,
        attribution: {
          photagrapher: "Tyler Nix",
          link: "https://unsplash.com/@tylernixcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 12,
        name: "Stainless PourOver",
        imageUrl: "/images/shop-img/coffeemakers/stainless-pourover.jpg",
        price: 30,
        attribution: {
          photagrapher: "Battlecreek Coffee Roasters",
          link: "https://unsplash.com/@battlecreekcoffeeroasters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 13,
        name: "Venus Tran",
        imageUrl: "/images/shop-img/coffeemakers/venus-tran.jpg",
        price: 75,
        attribution: {
          photagrapher: "Thanh Tran",
          link: "https://unsplash.com/@coffee_wanderer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 14,
        name: "Dowan",
        imageUrl: "/images/shop-img/coffeemakers/dowan.jpg",
        price: 20,
        attribution: {
          photagrapher: "William Moreland",
          link: "https://unsplash.com/@relentlessjpg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 15,
        name: "Aeropress",
        imageUrl: "/images/shop-img/coffeemakers/aeropress.jpg",
        price: 35,
        attribution: {
          photagrapher: "William Moreland",
          link: "https://unsplash.com/@relentlessjpg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 16,
        name: "Cafelissimo",
        imageUrl: "/images/shop-img/coffeemakers/cafelissimo.jpg",
        price: 45,
        attribution: {
          photagrapher: "Emma Smith",
          link: "https://unsplash.com/@emmafaithcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 17,
        name: "Simplique",
        imageUrl: "/images/shop-img/coffeemakers/simplique.jpg",
        price: 200,
        attribution: {
          photagrapher: "Wes Walker",
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
          photagrapher: "Elahe Motamedi",
          link: "https://unsplash.com/@elahemotamedi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 19,
        name: "Niche",
        imageUrl: "/images/shop-img/coffeegrinders/niche.jpg",
        price: 120,
        attribution: {
          photagrapher: "Dan Counsell",
          link: "https://unsplash.com/s/photos/coffee-grinder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 20,
        name: "Fellow Ode",
        imageUrl: "/images/shop-img/coffeegrinders/fellow-ode.jpg",
        price: 150,
        attribution: {
          photagrapher: "Erin Agius",
          link: "https://unsplash.com/@erinagius?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 21,
        name: "Electric Burr",
        imageUrl: "/images/shop-img/coffeegrinders/electric-burr.jpg",
        price: 165,
        attribution: {
          photagrapher: "Nathan Dumlao",
          link: "https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
      {
        id: 22,
        name: "Niche 3",
        imageUrl: "/images/shop-img/coffeegrinders/niche-3.jpg",
        price: 185,
        attribution: {
          photagrapher: "Declan Cronin",
          link: "https://unsplash.com/s/photos/coffee-grinder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        },
      },
    ],
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "/images/shop-img/womens/blue-tank.png",
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "/images/shop-img/womens/floral-blouse.png",
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "/images/shop-img/womens/floral-skirt.png",
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "/images/shop-img/womens/red-polka-dot-dress.png",
        price: 80,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "/images/shop-img/womens/striped-sweater.png",
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "/images/shop-img/womens/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "/images/shop-img/womens/white-vest.png",
        price: 20,
      },
    ],
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "/images/shop-img/mens/camo-vest.png",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "/images/shop-img/mens/floral-shirt.png",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "/images/shop-img/mens/long-sleeve.png",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "/images/shop-img/mens/pink-shirt.png",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "/images/shop-img/mens/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "/images/shop-img/mens/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
};

export default SHOP_DATA;
