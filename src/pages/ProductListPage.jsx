import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Header from '../components/Header'; // ✅ Bước 3: import Header
import './ProductListPage.css';

const plants = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 25, category: 'Indoor', image: 'https://i.imgur.com/uYxRZ.jpg' },
  { id: 2, name: 'Snake Plant', price: 15, category: 'Indoor', image: 'https://i.imgur.com/HjoGy7Z.jpg' },
  { id: 3, name: 'Aloe Vera', price: 10, category: 'Succulent', image: 'https://i.imgur.com/HvURuWh.jpg' },
  { id: 4, name: 'ZZ Plant', price: 20, category: 'Low Light', image: 'https://i.imgur.com/bTyQRSY.jpg' },
  { id: 5, name: 'Spider Plant', price: 12, category: 'Indoor', image: 'https://i.imgur.com/yNNskOB.jpg' },
  { id: 6, name: 'Jade Plant', price: 18, category: 'Succulent', image: 'https://i.imgur.com/Zv8Ep4Q.jpg' }
];

function ProductListPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <>
      <div className="product-list">
        <h2>🪴 Our Plants</h2>

        {['Indoor', 'Succulent', 'Low Light'].map(category => (
          <div key={category}>
            <h3>{category}</h3>
            <div className="product-grid">
              {plants.filter(p => p.category === category).map(plant => (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button
                    disabled={isInCart(plant.id)}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {isInCart(plant.id) ? 'In Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductListPage;
