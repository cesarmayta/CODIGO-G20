import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Search absolute import documentation for more info and check vite.config.js file for details of configuring vite
import { AdminContextProvider } from "./contexts/AdminContext";
import { Products } from "./pages/dashboard/products/Products";
import { Categories } from "./pages/dashboard/categories/Categories";
import { AdminLayout } from "./components/layouts/AdminLayout/AdminLayout";
import { PublicLayout } from "./components/layouts/PublicLayout/PublicLayout";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/home/search/Search";
import { ProductsList } from "./components/products/productsList/ProductsList";
import { Payments } from "./pages/home/payments/Payments";

const head = document.getElementsByTagName("head")[0];
const facebookMetaData = document.createElement("meta");
facebookMetaData.setAttribute("property", "og:image");
facebookMetaData.setAttribute(
  "content",
  "http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
);
head.appendChild(facebookMetaData);

function App() {
  return (
    <AdminContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="pe" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="buscar" element={<Search />}>
              <Route index element={<ProductsList />} />
              <Route path="novedades" element={<ProductsList />} />
              <Route path="destacados" element={<ProductsList />} />
            </Route>
            <Route path="pagar" element={<Payments />} />
          </Route>
          <Route path="admin-panel" element={<AdminLayout />}>
            <Route index path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
          </Route>
          <Route path="*" element={<Navigate to={"/pe"} />} />
        </Routes>
      </BrowserRouter>
    </AdminContextProvider>
  );
}

export default App;
