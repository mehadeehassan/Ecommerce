import DiscountCard from "./DiscountCard.jsx";

// kids
import Img1 from "../../assets/DiscountImg/kids/k1.avif";
import Img2 from "../../assets/DiscountImg/kids/k2.avif";
import Img3 from "../../assets/DiscountImg/kids/k3.avif";
import Img4 from "../../assets/DiscountImg/kids/k4.webp";
import Img5 from "../../assets/DiscountImg/kids/k5.webp";
import Img6 from "../../assets/DiscountImg/kids/k6.webp";

// men's
import Img7 from "../../assets/DiscountImg/men/w2.webp";
import Img8 from "../../assets/DiscountImg/men/m1.webp";
import Img9 from "../../assets/DiscountImg/men/p.jpg";
import Img10 from "../../assets/DiscountImg/men/s.avif";
import Img11 from "../../assets/DiscountImg/men/s1.jpg";
import Img12 from "../../assets/DiscountImg/men/w1.jpg";

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
            <div className="container mx-auto">
                <div className="text-center mb-40 max-w-150 mx-auto">
                <h1 className="text-5xl font-extrabold">All Discount Products</h1>
                    <div  className="w-00 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
                </div>
            </div>

            <div className="container mx-auto">
                {/* kids discount Section */}
                <div className="text-center mb-10 max-w-150 mx-auto">
                    <p className="text-sm text-orange-400">Kids Discount Products for you</p>
                    <h1 className="text-3xl font-bold">Kids Discount Products</h1>
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

            <div className="container mx-auto mt-20">
                {/* Men's discount Section */}
                <div className="text-center mb-10 max-w-150 mx-auto">
                    <p className="text-sm text-orange-400">Men Discount Wear Products for you</p>
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