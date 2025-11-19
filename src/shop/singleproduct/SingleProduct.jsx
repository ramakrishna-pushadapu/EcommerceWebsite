import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../assets/components/PageHeader";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import ProductDisplay from "../productdisplay/ProductDisplay";
import PopularPost from "../popularpost/PopularPost";
import Tags from "../tags/Tags";
import Review from "../review/Review";
import "./SingleProduct.css";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    //  Use correct public path
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error loading product data:", err));
  }, []);

  const result = product.filter((p) => String(p.id) === String(id));

  return (
    <div>
      <PageHeader title="OUR SHOP SINGLE" curPage="Shop / Single Product" />

      <div className="single-product section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="single-product__details">
                  <div className="row align-items-center">
                    {/* Product Image Section */}
                    <div className="col-md-6 col-12">
                      <div className="single-product__thumb">
                        <div className="swiper-container single-product__slider">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="single-product__swiper"
                          >
                            {result.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-product__image">
                                  <img
                                    src={item.img}
                                    alt={item.name || "product"}
                                  />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>

                          {/* Swiper Arrows */}
                          <div className="single-product__prev">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="single-product__next">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Info Section */}
                    <div className="col-md-6 col-12">
                      <div className="single-product__content">
                        {result.map((item) => (
                          <ProductDisplay key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review Section */}
                <div className="single-product__review">
                  <Review />
                </div>
              </article>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4 col-12">
              <aside className="ps-lg-4">
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
