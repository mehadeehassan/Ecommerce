import DiscountCard from "./DiscountCard.jsx";
// women's
import Img13 from "../../assets/DiscountImg/WomenWear/d1.jpg";
import Img14 from "../../assets/DiscountImg/WomenWear/5.webp";
import Img15 from "../../assets/DiscountImg/WomenWear/5.jpg";
import Img16 from "../../assets/DiscountImg/WomenWear/d3.jpg";
import Img17 from "../../assets/DiscountImg/WomenWear/d6.jpg";
import Img18 from "../../assets/DiscountImg/WomenWear/m5.jpg";


export default function DiscountAll() {
    return (
        <div className="mt-14 mb-12 bg-white text-black">
            <div className="container mx-auto mt-20">
                {/* women discount  Section  */}
                <div className="text-center mb-10 max-w-150 mx-auto">
                    <p className="text-sm text-orange-400">Women Discount Wear Products for you</p>
                    <h1 className="text-3xl font-bold">Women's Discount Products</h1>
                    <p className="text-xs text-gray-400">Best Women's discount products for you</p>
                    <div  className="w-20 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
                </div>
    
                {/* Body Section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 place-items-center">
                        <DiscountCard product={{ productPicturePath: Img13, title: "Women's Dress", color: "Golden", price: "$100",discount: "50%" ,rating: 5.0 }} />
                        <DiscountCard product={{ productPicturePath: Img14, title: "Women's Shoes", color: "Black", price: "$200", discount: "75%" ,rating: 4.5 }} />
                        <DiscountCard product={{ productPicturePath: Img15, title : "Women's Casual", color: "Blue", price: "$300", discount: "65%" ,rating: 4.4 }} />
                        <DiscountCard product={{ productPicturePath :Img16, title: "Men's Party", color: "Blue", price: "$400", discount: "40%" ,rating: 4.8 }} />
                        <DiscountCard product={{ productPicturePath : Img17, title: "Women's T-Shirt", color: "Navy", price: "$500", discount: "35%" ,rating: 4.2 }} />
                        <DiscountCard product={{ productPicturePath : Img18, title: "Women's Tops", color: "Sliver", price: "$600", discount: "60%" ,rating: 4.5 }} />
                    </div>
                </div>
            </div> 
        </div>
    );
}