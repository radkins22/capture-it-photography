import beach from "./beach3.jpg";
import seaFog from "./foggySea.png";
import forest from "./img_forest.jpg";
import mountains from "./mountains.png";

// this page is for the clients monthly photo sale, it contains an array of objects pertaining to the photos chosen
export const PRODUCTS = [

    {
        id: 1,
        productName: "Pacific Ocean Sunset",
        size: "36\" x 30\"",
        price: 299.00,
        productImage: beach,
    },
    {
        id: 2,
        productName: "Serene Rocky Mountains",
        size: "42\" x 36\"",
        price: 399.00,
        productImage: mountains,
    },
    {
        id: 3,
        productName: "Forest Bridge",
        size: "36\" x 30\"",
        price: 299.00,
        productImage: forest,
    },
    {
        id: 4,
        productName: "Foggy Sea at Dawn",
        size: "42\" x 36\"",
        price: 399.00,
        productImage: seaFog,
    }
];