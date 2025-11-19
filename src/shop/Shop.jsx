import React, { useState, useEffect } from "react";
import PageHeader from "../assets/components/PageHeader";
import ProductCards from "./productscards/ProductCards";
import Pagination from "./pagination/Pagination";
import Search from "./search/Search";
import ShopCategory from "./shopcategory/ShopCategory";
import PopularPost from "./popularpost/PopularPost";
import Tags from "./tags/Tags";
import "../shop/Shop.css";

const showResults = "Showing 01 - 12 of 139 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [Data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  // Fetch products from public/products.json
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setProducts(data);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  //  Category list
  const menuItems = ["All", ...new Set(Data.map((item) => item.category))];

  //  Filter by category
  const filterItem = (curCat) => {
    setSelectedCategory(curCat);

    if (curCat === "All") {
      setProducts(Data);
    } else {
      const newItems = Data.filter((item) => item.category === curCat);
      setProducts(newItems);
    }

    setFilteredProducts([]);
    setCurrentPage(1);
  };

  //  Handle search
  const handleFilter = (filtered) => {
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  //  Pagination
  const totalItems = filteredProducts.length > 0 ? filteredProducts : products;
  const totalPages = Math.ceil(totalItems.length / productsPerPage);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = totalItems.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />

      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">

            {/*  Left Section */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between align-items-center">
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                    <a onClick={() => setGridList(true)} style={{ cursor: 'pointer' }}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a onClick={() => setGridList(false)} style={{ cursor: 'pointer' }}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                {/*  Product Cards */}
                <div className={`product-wrapper ${GridList ? "grid-layout" : "list-layout"}`}>
                  <ProductCards GridList={GridList} products={currentProducts} />
                </div>

                {/*  Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  goToPage={goToPage}
                />
              </article>
            </div>

            {/*  Right Sidebar */}
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} onFilter={handleFilter} />
                <ShopCategory
                  filterItem={filterItem}
                  menuItems={menuItems}
                  selectedCategory={selectedCategory}
                />
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

export default Shop;
