import { IoIosArrowForward } from "react-icons/io";
import "./Home.css";
import { Link } from "react-router-dom";

const HomeCategories = () => {
  const handleMoveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="w-full pt-20 pb-10 px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header text-center">
            <span
              style={{ letterSpacing: "4px" }}
              className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
            >
              CATEGORY
            </span>
            <h2 className="Noto mt-2 text-2xl font-semibold md:text-4xl lg:text-5xl md:leading-tight">
              Shop By Categories
            </h2>
            <p className="mt-2.5 text-gray-800">
              See how game-changing companies are making the most of every
              engagement with Preline.
            </p>
          </div>

          {/* DATA */}
          <div className="data">
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {/* CARD 1 */}
              <Link
                to="/shop"
                onClick={handleMoveTop}
                className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
              >
                <img
                  alt="category"
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/category1-womens.jpg?v=1714169511"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative bg-gradient-to-t from-gray-900/50 to-transparent pt-32 sm:pt-48 lg:pt-64">
                  <div className="p-4 sm:p-6">
                    <a href="#">
                      <h3 className="mt-0.5 mb-3 max-w-[10rem] text-3xl font-semibold text-white">
                        Women’s Eyewear
                      </h3>

                      <button className="text-lg flex items-center gap-1 font-semibold text-[#e2cc52]">
                        Shop Now
                        <IoIosArrowForward className="font-bold" size={17} />
                      </button>
                    </a>
                  </div>
                </div>
              </Link>

              {/* CARD 2 */}
              <Link
                to="/shop"
                onClick={handleMoveTop}
                className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
              >
                <img
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/category2-mens.jpg?v=1714169511"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="relative bg-gradient-to-t from-gray-900/50 to-transparent pt-32 sm:pt-48 lg:pt-64">
                  <div className="p-4 sm:p-6">
                    <h3 className="mt-0.5 mb-3 max-w-[10rem] text-3xl font-semibold text-white">
                      Men’s Eyewear
                    </h3>

                    <button className="text-lg flex items-center gap-1 font-semibold text-[#e2cc52]">
                      Shop Now
                      <IoIosArrowForward className="font-bold" size={17} />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCategories;
