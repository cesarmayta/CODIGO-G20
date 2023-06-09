import { useContext } from "react";
import { AdminContext } from "../../../contexts/AdminContext";
import { ProductCard } from "../productCard/ProductCard";

export const ProductsList = () => {

    const { productsFiltered } = useContext(AdminContext);

    return productsFiltered.map((product, index) => (
        <ProductCard key={index} product={product} />
    ))
}