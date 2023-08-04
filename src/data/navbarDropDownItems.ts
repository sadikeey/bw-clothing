import { INavbarDropDownItems } from "../types/data/navbarDropDownItems"

const navbarDropDownItems: INavbarDropDownItems[] = [
  {
    label: "NEW!",
    to: "/",
    subLabel: [
      {
        name: "Category",
        items: [
          {
            label: "View All",
            to: "/",
          },
          {
            label: "Dresses + Skirts",
            to: "store#dresses-skirts",
          },
          {
            label: "Tops",
            to: "store#tops",
          },
          {
            label: "Sweaters",
            to: "store#sweaters",
          },
          {
            label: "Tees",
            to: "store#tees",
          },
          {
            label: "Jackets + Blazers",
            to: "store#jackets-blazers",
          },
          {
            label: "Jeans",
            to: "store#jeans",
          },
          {
            label: "Shorts",
            to: "store#shorts",
          },
          {
            label: "Pants",
            to: "store#pants",
          },
          {
            label: "Petites",
            to: "store#petites",
          },
          {
            label: "Shoes + Accessories",
            to: "store#shoes-accessories",
          },
        ],
      },
      {
        name: "Trending",
        items: [
          {
            label: "Key Cargo",
            to: "store#key-cargo",
          },
          {
            label: "Keep It Neutral",
            to: "store#keep-it-neutral",
          },
          {
            label: "Wide Leg",
            to: "store#wide-leg",
          },
          {
            label: "Fall Lookbook",
            to: "store#fall-lookbook",
          },
          {
            label: "Limited-Edition Collection",
            to: "store#limited-edition-collection",
          },
        ],
      },
      {
        name: "Image",
        items: [
          {
            label: "New Lookbook",
            to: "store#new-lookbook",
            imageLink: "/public/assets/images/navbar/girl1.webp",
          },
          {
            label: "Utility Lookbook",
            to: "store#utility-lookbook",
            imageLink: "/public/assets/images/navbar/girl2.webp",
          },
        ],
      },
    ],
  },
  {
    label: "Clothing",
    to: "/",
    subLabel: [
      {
        name: "Category",
        items: [
          {
            label: "VIEW ALL",
            to: "category",
          },
          {
            label: "TOPS",
            to: "category#tops",
          },
          {
            label: "TEES",
            to: "category#tees",
          },
          {
            label: "SWEATERS",
            to: "category#sweaters",
          },
          {
            label: "JACKETS + BLAZERS",
            to: "category#jackets-blazers",
          },
          {
            label: "SUITING + SEPARATES",
            to: "category#suiting-separates",
          },
          {
            label: "DRESSES + SKIRTS",
            to: "category#dresses-skirts",
          },
          {
            label: "JEANS",
            to: "category#jeans",
          },
          {
            label: "SHORTS",
            to: "category#shorts",
          },
          {
            label: "PANTS",
            to: "category#pants",
          },
          {
            label: "SWIMWEAR",
            to: "category#swimwear",
          },
          {
            label: "PETITES",
            to: "category#petites",
          },
        ],
      },
      {
        name: "Featured",
        items: [
          {
            label: "Best Seller",
            to: "featured#best-seller",
          },
          {
            label: "THE PRET COLLECTION",
            to: "featured#pret-collection",
          },
          {
            label: "ICONIC WHITE + BLACK",
            to: "featured#iconic-white-black",
          },
          {
            label: "STYLE CONNECT",
            to: "featured#style-connect",
          },
        ],
      },
      {
        name: "Image",
        items: [
          {
            label: "Black + White Collection",
            to: "store#bw-collection",
            imageLink: "assets/images/navbar/girl2.webp",
          },
          {
            label: "tops",
            to: "store#tops",
            imageLink: "assets/images/navbar/girl1.webp",
          },
        ],
      },
    ],
  },
  {
    label: "Dresses",
    to: "/",
    subLabel: [
      {
        name: "Category",
        items: [
          {
            label: "View All",
            to: "/",
          },
          {
            label: "Dresses + Skirts",
            to: "store#dresses-skirts",
          },
          {
            label: "Tops",
            to: "store#tops",
          },
          {
            label: "Sweaters",
            to: "store#sweaters",
          },
          {
            label: "Tees",
            to: "store#tees",
          },
          {
            label: "Jackets + Blazers",
            to: "store#jackets-blazers",
          },
          {
            label: "Jeans",
            to: "store#jeans",
          },
          {
            label: "Shorts",
            to: "store#shorts",
          },
          {
            label: "Pants",
            to: "store#pants",
          },
          {
            label: "Petites",
            to: "store#petites",
          },
          {
            label: "Shoes + Accessories",
            to: "store#shoes-accessories",
          },
        ],
      },
      {
        name: "Trending",
        items: [
          {
            label: "Key Cargo",
            to: "store#key-cargo",
          },
          {
            label: "Keep It Neutral",
            to: "store#keep-it-neutral",
          },
          {
            label: "Wide Leg",
            to: "store#wide-leg",
          },
          {
            label: "Fall Lookbook",
            to: "store#fall-lookbook",
          },
          {
            label: "Limited-Edition Collection",
            to: "store#limited-edition-collection",
          },
        ],
      },
      {
        name: "Image",
        items: [
          {
            label: "New Lookbook",
            to: "store#new-lookbook",
            imageLink: "assets/images/navbar/girl1.webp",
          },
          {
            label: "Utility Lookbook",
            to: "store#utility-lookbook",
            imageLink: "assets/images/navbar/girl2.webp",
          },
        ],
      },
    ],
  },
  {
    label: "Work Wear",
    to: "/",
    subLabel: [
      {
        name: "Category",
        items: [
          {
            label: "VIEW ALL",
            to: "category",
          },
          {
            label: "TOPS",
            to: "category#tops",
          },
          {
            label: "TEES",
            to: "category#tees",
          },
          {
            label: "SWEATERS",
            to: "category#sweaters",
          },
          {
            label: "JACKETS + BLAZERS",
            to: "category#jackets-blazers",
          },
          {
            label: "SUITING + SEPARATES",
            to: "category#suiting-separates",
          },
          {
            label: "DRESSES + SKIRTS",
            to: "category#dresses-skirts",
          },
          {
            label: "JEANS",
            to: "category#jeans",
          },
          {
            label: "SHORTS",
            to: "category#shorts",
          },
          {
            label: "PANTS",
            to: "category#pants",
          },
          {
            label: "SWIMWEAR",
            to: "category#swimwear",
          },
          {
            label: "PETITES",
            to: "category#petites",
          },
        ],
      },
      {
        name: "Featured",
        items: [
          {
            label: "Best Seller",
            to: "featured#best-seller",
          },
          {
            label: "THE PRET COLLECTION",
            to: "featured#pret-collection",
          },
          {
            label: "ICONIC WHITE + BLACK",
            to: "featured#iconic-white-black",
          },
          {
            label: "STYLE CONNECT",
            to: "featured#style-connect",
          },
        ],
      },
      {
        name: "Image",
        items: [
          {
            label: "Black + White Collection",
            to: "store#bw-collection",
            imageLink: "assets/images/navbar/girl2.webp",
          },
          {
            label: "tops",
            to: "store#tops",
            imageLink: "assets/images/navbar/girl1.webp",
          },
        ],
      },
    ],
  },
  {
    label: "Denim",
    to: "/",
    subLabel: [
      {
        name: "Category",
        items: [
          {
            label: "View All",
            to: "/",
          },
          {
            label: "Dresses + Skirts",
            to: "store#dresses-skirts",
          },
          {
            label: "Tops",
            to: "store#tops",
          },
          {
            label: "Sweaters",
            to: "store#sweaters",
          },
          {
            label: "Tees",
            to: "store#tees",
          },
          {
            label: "Jackets + Blazers",
            to: "store#jackets-blazers",
          },
          {
            label: "Jeans",
            to: "store#jeans",
          },
          {
            label: "Shorts",
            to: "store#shorts",
          },
          {
            label: "Pants",
            to: "store#pants",
          },
          {
            label: "Petites",
            to: "store#petites",
          },
          {
            label: "Shoes + Accessories",
            to: "store#shoes-accessories",
          },
        ],
      },
      {
        name: "Trending",
        items: [
          {
            label: "Key Cargo",
            to: "store#key-cargo",
          },
          {
            label: "Keep It Neutral",
            to: "store#keep-it-neutral",
          },
          {
            label: "Wide Leg",
            to: "store#wide-leg",
          },
          {
            label: "Fall Lookbook",
            to: "store#fall-lookbook",
          },
          {
            label: "Limited-Edition Collection",
            to: "store#limited-edition-collection",
          },
        ],
      },
      {
        name: "Image",
        items: [
          {
            label: "New Lookbook",
            to: "store#new-lookbook",
            imageLink: "assets/images/navbar/girl1.webp",
          },
          {
            label: "Utility Lookbook",
            to: "store#utility-lookbook",
            imageLink: "assets/images/navbar/girl2.webp",
          },
        ],
      },
    ],
  },
  {
    label: "Shoes + Accessories",
    to: "/",
    subLabel: [
      {
        name: "Category",
        items: [
          {
            label: "VIEW ALL",
            to: "category",
          },
          {
            label: "TOPS",
            to: "category#tops",
          },
          {
            label: "TEES",
            to: "category#tees",
          },
          {
            label: "SWEATERS",
            to: "category#sweaters",
          },
          {
            label: "JACKETS + BLAZERS",
            to: "category#jackets-blazers",
          },
          {
            label: "SUITING + SEPARATES",
            to: "category#suiting-separates",
          },
          {
            label: "DRESSES + SKIRTS",
            to: "category#dresses-skirts",
          },
          {
            label: "JEANS",
            to: "category#jeans",
          },
          {
            label: "SHORTS",
            to: "category#shorts",
          },
          {
            label: "PANTS",
            to: "category#pants",
          },
          {
            label: "SWIMWEAR",
            to: "category#swimwear",
          },
          {
            label: "PETITES",
            to: "category#petites",
          },
        ],
      },
      {
        name: "Featured",
        items: [
          {
            label: "Best Seller",
            to: "featured#best-seller",
          },
          {
            label: "THE PRET COLLECTION",
            to: "featured#pret-collection",
          },
          {
            label: "ICONIC WHITE + BLACK",
            to: "featured#iconic-white-black",
          },
          {
            label: "STYLE CONNECT",
            to: "featured#style-connect",
          },
        ],
      },
      {
        name: "Image",
        items: [
          {
            label: "Black + White Collection",
            to: "store#bw-collection",
            imageLink: "assets/images/navbar/girl2.webp",
          },
          {
            label: "tops",
            to: "store#tops",
            imageLink: "assets/images/navbar/girl1.webp",
          },
        ],
      },
    ],
  },
  {
    label: "What to Wear",
    to: "/",
    subLabel: [
      {
        name: "Category",
        items: [
          {
            label: "View All",
            to: "/",
          },
          {
            label: "Dresses + Skirts",
            to: "store#dresses-skirts",
          },
          {
            label: "Tops",
            to: "store#tops",
          },
          {
            label: "Sweaters",
            to: "store#sweaters",
          },
          {
            label: "Tees",
            to: "store#tees",
          },
          {
            label: "Jackets + Blazers",
            to: "store#jackets-blazers",
          },
          {
            label: "Jeans",
            to: "store#jeans",
          },
          {
            label: "Shorts",
            to: "store#shorts",
          },
          {
            label: "Pants",
            to: "store#pants",
          },
          {
            label: "Petites",
            to: "store#petites",
          },
          {
            label: "Shoes + Accessories",
            to: "store#shoes-accessories",
          },
        ],
      },
      {
        name: "Trending",
        items: [
          {
            label: "Key Cargo",
            to: "store#key-cargo",
          },
          {
            label: "Keep It Neutral",
            to: "store#keep-it-neutral",
          },
          {
            label: "Wide Leg",
            to: "store#wide-leg",
          },
          {
            label: "Fall Lookbook",
            to: "store#fall-lookbook",
          },
          {
            label: "Limited-Edition Collection",
            to: "store#limited-edition-collection",
          },
        ],
      },
      {
        name: "Image",
        items: [
          {
            label: "New Lookbook",
            to: "store#new-lookbook",
            imageLink: "assets/images/navbar/girl1.webp",
          },
          {
            label: "Utility Lookbook",
            to: "store#utility-lookbook",
            imageLink: "assets/images/navbar/girl2.webp",
          },
        ],
      },
    ],
  },
  {
    label: "Sale",
    to: "/",
    subLabel: [
      {
        name: "Category",
        items: [
          {
            label: "VIEW ALL",
            to: "category",
          },
          {
            label: "TOPS",
            to: "category#tops",
          },
          {
            label: "TEES",
            to: "category#tees",
          },
          {
            label: "SWEATERS",
            to: "category#sweaters",
          },
          {
            label: "JACKETS + BLAZERS",
            to: "category#jackets-blazers",
          },
          {
            label: "SUITING + SEPARATES",
            to: "category#suiting-separates",
          },
          {
            label: "DRESSES + SKIRTS",
            to: "category#dresses-skirts",
          },
          {
            label: "JEANS",
            to: "category#jeans",
          },
          {
            label: "SHORTS",
            to: "category#shorts",
          },
          {
            label: "PANTS",
            to: "category#pants",
          },
          {
            label: "SWIMWEAR",
            to: "category#swimwear",
          },
          {
            label: "PETITES",
            to: "category#petites",
          },
        ],
      },
      {
        name: "Featured",
        items: [
          {
            label: "Best Seller",
            to: "featured#best-seller",
          },
          {
            label: "THE PRET COLLECTION",
            to: "featured#pret-collection",
          },
          {
            label: "ICONIC WHITE + BLACK",
            to: "featured#iconic-white-black",
          },
          {
            label: "STYLE CONNECT",
            to: "featured#style-connect",
          },
        ],
      },
      {
        name: "Image",
        items: [
          {
            label: "Black + White Collection",
            to: "store#bw-collection",
            imageLink: "assets/images/navbar/girl2.webp",
          },
          {
            label: "tops",
            to: "store#tops",
            imageLink: "assets/images/navbar/girl1.webp",
          },
        ],
      },
    ],
  },
  {
    label: "Outlet",
    to: "/",
    subLabel: [
      {
        name: "Category",
        items: [
          {
            label: "View All",
            to: "/",
          },
          {
            label: "Dresses + Skirts",
            to: "store#dresses-skirts",
          },
          {
            label: "Tops",
            to: "store#tops",
          },
          {
            label: "Sweaters",
            to: "store#sweaters",
          },
          {
            label: "Tees",
            to: "store#tees",
          },
          {
            label: "Jackets + Blazers",
            to: "store#jackets-blazers",
          },
          {
            label: "Jeans",
            to: "store#jeans",
          },
          {
            label: "Shorts",
            to: "store#shorts",
          },
          {
            label: "Pants",
            to: "store#pants",
          },
          {
            label: "Petites",
            to: "store#petites",
          },
          {
            label: "Shoes + Accessories",
            to: "store#shoes-accessories",
          },
        ],
      },
      {
        name: "Trending",
        items: [
          {
            label: "Key Cargo",
            to: "store#key-cargo",
          },
          {
            label: "Keep It Neutral",
            to: "store#keep-it-neutral",
          },
          {
            label: "Wide Leg",
            to: "store#wide-leg",
          },
          {
            label: "Fall Lookbook",
            to: "store#fall-lookbook",
          },
          {
            label: "Limited-Edition Collection",
            to: "store#limited-edition-collection",
          },
        ],
      },
      {
        name: "Image",
        items: [
          {
            label: "New Lookbook",
            to: "store#new-lookbook",
            imageLink: "assets/images/navbar/girl2.webp",
          },
          {
            label: "Utility Lookbook",
            to: "store#utility-lookbook",
            imageLink: "assets/images/navbar/girl1.webp",
          },
        ],
      },
    ],
  },
]

export default navbarDropDownItems
