import { BsCart3 } from "react-icons/bs";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
 


//images
import image from "../assets/images/image-product-1.jpg";
import image1 from "../assets/images/image-product-1-thumbnail.jpg";
import image2 from "../assets/images/image-product-2-thumbnail.jpg";
import image3 from "../assets/images/image-product-3-thumbnail.jpg";
import image4 from "../assets/images/image-product-4-thumbnail.jpg";

function Navbar() {
  const { amount } = useSelector((store) => store.products);
  const { products} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProduct());
  // }, [dispatch, products]);

  return (
    <>
      <div className="  navbar bg-base-100 flex justify-between align-content items-center border-b-2">
        <div className="navbar-start items-center">
          <NavLink to="/" className="text-center items-center hidden lg:flex">
            <img src={logo} alt="" />
          </NavLink>
          <div className="dropdown flex">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/collection" className=" ">
                  Collection
                </NavLink>
              </li>
              <li>
                <NavLink to="./">Men</NavLink>
              </li>
              <li>
                <NavLink>Women</NavLink>
              </li>
              <li>
                <NavLink>About</NavLink>
              </li>
              <li>
                <NavLink>Contact</NavLink>
              </li>
            </ul>
            <NavLink className="text-center items-center flex lg:hidden">
              <img src={logo} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className=" flex gap-10 text-slate-400 hover:underline-offset-auto
          "
          >
            <li>
              <NavLink to="/collections" className=" ">
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink to="/men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/women">Women</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className=" mx-6 px-6 flex items-center gap-10">
            <NavLink className="btn btn-circle btn-md ml-4">
              <div className="indicator">
                <BsCart3 className="h-6 w-6" />
                <span
                  className="badge badge-sm badge-primary indicator-item"
                  defaultChecked={amount === 0 ? false : true}
                >
                  {amount === 0 ? "Empty" : amount}
                </span>
              </div>
            </NavLink>
            <NavLink>
              <img
                src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg"
                alt=""
                className="h-10 w-10 rounded-full"
              />
            </NavLink>
          </div>

          <div
            className={`absolute  top-20 right-cart flex items-end flex-col bg-white shadow-lg w-96 h-72 rounded-lg z-5 ${  amount === false && "hidden"
            }`}
          >
            <h5 className="text-black font-bold py-4 px-8 text-left">Cart</h5>
            <hr className="relative w-full p-0 " />
            {amount === null ? (
              <div className="text-center mt-20 font-bold text-black">
                <p className="ml-20 text-2xl">Your cart is empty</p>
              </div>
            ) : (
              <div className="flex items-center flex-col gap-6 py-8 px-6">
                <div className="flex items-center justify-between gap-2">
                  <img className="w-1/5 rounded-lg" src={image} alt="Shoes" />
                  <div>
                    <p className="text-black text-base mb-2">
                      Fall Limited Edition Sneakers
                    </p>
                    <p>
                      $125.00 x {products};
                      <span className="text-black font-bold">
                        ${125 * amount}.00
                      </span>
                    </p>
                  </div>
                  <button onClick={() => dispatch(removeItems())}>
                    <img src="" alt="" />
                  </button>
                </div>
                <button className="bg-orange-400 btn btn-primary text-white font-bold border-none rounded-md w-full p-4 hover:shadow-lg">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
