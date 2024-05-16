import React from "react";
import { BsCart3 } from "react-icons/bs";
import image from "../assets/images/image-product-1.jpg";
import image1 from "../assets/images/image-product-1-thumbnail.jpg";
import image2 from "../assets/images/image-product-2-thumbnail.jpg";
import image3 from "../assets/images/image-product-3-thumbnail.jpg";
import image4 from "../assets/images/image-product-4-thumbnail.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  decreaseAmount,
  increaseAmount,
} from "../features/products/productSlice";

function Hero() {
  const dispatch = useDispatch();
  const { products, amount } = useSelector((state) => state.products);

  // Mahsulotni savatga qo'shish funksiyasi
  const handleAddToCart = () => {
    dispatch(addProduct(products));
  };

  return (
    <div className="align-content flex gap-16 pl-12 pr-12 pt-16 pb-20">
      {/* Mahsulot rasmlari */}
      <div>
        <img
          src={image}
          alt=""
          width={400}
          height={350}
          className="rounded-2xl"
        />
        <div className="flex justify-between mt-4">
          <img
            src={image1}
            alt=""
            width={88}
            height={88}
            className="rounded-md"
          />
          <img
            src={image2}
            alt=""
            width={88}
            height={88}
            className="rounded-md"
          />
          <img
            src={image3}
            alt=""
            width={88}
            height={88}
            className="rounded-md"
          />
          <img
            src={image4}
            alt=""
            width={88}
            height={88}
            className="rounded-md"
          />
        </div>
      </div>
      {/* Mahsulot haqida ma'lumotlar */}
      <div className="w-1/3 pt-10">
        <p className="text-orange-500 mb-6 uppercase leading-tight text-xs tracking-widest font-semibold">
          Sneaker Company
        </p>
        <h1 className="h-16 text-3xl font-bold leading-tight mb-8">
          Fall Limited Edition Sneakers
        </h1>
        <p className="leading-6 text-slate-500 w-96">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <h2 className="font-bold text-lg flex gap-5 mt-5 items-center">
          $125.00{" "}
          <span className="rounded bg-orange-200 text-orange-500 text-sm">
            50%
          </span>
        </h2>
        <p className="text-sm line-through text-gray-400 font-medium mt-2">
          $250.00
        </p>
        <div className="mt-8 flex gap-9">
          <div className="rounded-lg bg-slate-200 w-28 items-center justify-center flex gap-4">
            <button
              className="text-orange-500 text-3xl"
              onClick={() => dispatch(decreaseAmount())}
              disabled={amount === 0}
            >
              -
            </button>
            <button>{amount}</button>
            <button
              className="text-orange-500 text-2xl"
              onClick={() => dispatch(increaseAmount())}
            >
              +
            </button>
          </div>
          <button
            className="btn btn-secondary bg-orange-500 w-48 add"
            onClick={handleAddToCart}
          >
            <BsCart3 className="" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
