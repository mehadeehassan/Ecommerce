import DiscountCard from "./DiscountCard.jsx";
// men's
import Img7 from "../../assets/DiscountImg/men/w2.webp";
import Img8 from "../../assets/DiscountImg/men/m1.webp";
import Img9 from "../../assets/DiscountImg/men/p.jpg";
import Img10 from "../../assets/DiscountImg/men/s.avif";
import Img11 from "../../assets/DiscountImg/men/s1.jpg";
import Img12 from "../../assets/DiscountImg/men/w1.jpg";


export default function DiscountAll() {
    return (
        <div className="mt-14 mb-12 bg-white text-black">
            <div className="container mx-auto mt-20">
                {/* women discount  Section  */}
                <div className="text-center mb-10 max-w-150 mx-auto">
                    <p className="text-sm text-orange-400">Men's Discount Products for you</p>
                    <h1 className="text-3xl font-bold">Men's Discount Products</h1>
                    <p className="text-xs text-gray-400">Best Men's discount products for you</p>
                    <div  className="w-20 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
                </div>
    
                {/* Body Section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 place-items-center">
                        <DiscountCard product={{ productPicturePath: Img7, title: "Men's Watch", color: "Golden", price: "$100",discount: "50%" ,rating: 5.0 }} />
                        <DiscountCard product={{ productPicturePath: Img8, title: "Men's Shoes", color: "Black", price: "$200", discount: "75%" ,rating: 4.5 }} />
                        <DiscountCard product={{ productPicturePath: Img9, title : "Men's Casual", color: "Blue", price: "$300", discount: "65%" ,rating: 4.4 }} />
                        <DiscountCard product={{ productPicturePath :Img10, title: "Men's Party", color: "Blue", price: "$400", discount: "40%" ,rating: 4.8 }} />
                        <DiscountCard product={{ productPicturePath : Img11, title: "Men's T-Shirt", color: "Navy", price: "$500", discount: "35%" ,rating: 4.2 }} />
                        <DiscountCard product={{ productPicturePath : Img12, title: "Men's Watch", color: "Sliver", price: "$600", discount: "60%" ,rating: 4.5 }} />
                    </div>
                </div>
            </div> 
        </div>
    );
}