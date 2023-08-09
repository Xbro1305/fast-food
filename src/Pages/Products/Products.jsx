import React, { useEffect, useState } from "react";
import "./Products.css";
import { Product } from "../../Components/Product/Product";
import data from "./data.json";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const productTypes = (arr) => {
  return Array.from(new Set(arr.map((item) => item.turi)));
};

export const types = productTypes(data);

export const Products = () => {
  const [pr, setPr] = useState([]);
  const t = useSelector((state) => state.test);
  const { search } = useLocation();
  const test = search?.split("=")[1]?.split("%20").join(" ");

  useEffect(() => {
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(t.toLowerCase())
    );
    setPr(result);
  }, [t]);

  useEffect(() => {
    const result = data.filter((item) => item.turi == test);
    setPr(result.length ? result : data);
  }, [search]);

  return (
    <div className="products">
      <Product data={pr} />
    </div>
  );
};
