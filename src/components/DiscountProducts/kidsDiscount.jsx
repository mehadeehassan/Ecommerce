import DiscountCard from "./DiscountCard.jsx";
// kids
import Img1 from "../../assets/DiscountImg/kids/k1.avif";
import Img2 from "../../assets/DiscountImg/kids/k2.avif";
import Img3 from "../../assets/DiscountImg/kids/k3.avif";
import Img4 from "../../assets/DiscountImg/kids/k4.webp";
import Img5 from "../../assets/DiscountImg/kids/k5.webp";
import Img6 from "../../assets/DiscountImg/kids/k6.webp";


export default function DiscountAll() {
    return (
        <div className="mt-14 mb-12 bg-white text-black">
            <div className="container mx-auto mt-20">
                {/* women discount  Section  */}
                <div className="text-center mb-10 max-w-150 mx-auto">
                    <p className="text-sm text-orange-400">Kids Discount Products for you</p>
                    <h1 className="text-3xl font-bold">Kids Top Products</h1>
                    <p className="text-xs text-gray-400">Best Kids discount products for you</p>
                    <div  className="w-20 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
                </div>
    
                {/* Body Section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 place-items-center">
                        <DiscountCard product={{ productPicturePath: Img1, title: "Kids T-Shirt", color: "Green", price: "$100",discount: "70%" ,rating: 5.0 }} />
                        <DiscountCard product={{ productPicturePath: Img2, title: "Kids Formal", color: "White", price: "$200", discount: "15%" ,rating: 4.5 }} />
                        <DiscountCard product={{ productPicturePath: Img3, title : "Kids Casual", color: "Blue", price: "$300", discount: "50%" ,rating: 4.4 }} />
                        <DiscountCard product={{ productPicturePath :Img4, title: "Kids Party", color: "Pink", price: "$400", discount: "40%" ,rating: 4.8 }} />
                        <DiscountCard product={{ productPicturePath : Img5, title: "Kids T-Shirt", color: "Red", price: "$500", discount: "35%" ,rating: 4.2 }} />
                        <DiscountCard product={{ productPicturePath : Img6, title: "Kids Jeans", color: "Gray", price: "$600", discount: "30%" ,rating: 4.5 }} />
                    </div>
                </div>
            </div> 
        </div>
    );
}