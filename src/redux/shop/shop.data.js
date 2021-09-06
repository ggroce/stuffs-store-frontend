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
  sneakers: {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "/images/shop-img/sneakers/adidas-nmd.png",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "/images/shop-img/sneakers/yeezy.png",
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "/images/shop-img/sneakers/black-converse.png",
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "/images/shop-img/sneakers/white-nike-high-tops.png",
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "/images/shop-img/sneakers/nikes-red.png",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "/images/shop-img/sneakers/nike-brown.png",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "/images/shop-img/sneakers/nike-funky.png",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "/images/shop-img/sneakers/timberlands.png",
        price: 200,
      },
    ],
  },
  jackets: {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "/images/shop-img/jackets/black-shearling.png",
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "/images/shop-img/jackets/blue-jean-jacket.png",
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "/images/shop-img/jackets/grey-jean-jacket.png",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "/images/shop-img/jackets/brown-shearling.png",
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "/images/shop-img/jackets/brown-trench.png",
        price: 185,
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
