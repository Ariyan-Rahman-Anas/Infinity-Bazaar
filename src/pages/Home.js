import Navbar from "../features/navabar/Navbar";
import ProductList from './../features/product-list/component/ProductList';

export default function Home() {
  return (
    <div>
          <Navbar>
              <ProductList />
      </Navbar>
    </div>
  )
}
