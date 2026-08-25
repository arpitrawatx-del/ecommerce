import iphoneImage from "../assets/images/iphone.png";
import samsungImage from "../assets/images/samsung.png";
import macbookImage from "../assets/images/macbook.png";
import hpImage from "../assets/images/hp.png";

const products = [
    {
        id: 1,
        title: "iphone",
        price: 70000,
        category: "Mobile",
        image: iphoneImage,
        description: "latest iphone "
    },
    {
        id: 2,
        title: "Samsung S24",
        price: 1300000,
        category: "Mobile",
        image: samsungImage,
        description: "latest Samsung  "
    },
    {
        id: 3,
        title: "macbook",
        price: 145000,
        category: "Laptop",
        image: macbookImage,
        description: "latest macbook "
    },
    {
        id: 4,
        title: "hp",
        price: 70000,
        category: "Laptop",
        image: hpImage,
        description: "cheapest Hp "
    }
];

export default products;
