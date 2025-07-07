import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang landing KHÔNG cần Header */}
        <Route path="/" element={<LandingPage />} />

        {/* Các trang còn lại hiển thị Header */}
        <Route
          path="/products"
          element={
            <>
              <Header />
              <ProductListPage />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <CartPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


