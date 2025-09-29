import { lazy, Suspense } from 'react';
import Home from './pages/Home';

const Products = lazy(() => import('./pages/Product'));

const App = () => {
  return (
    <>
      <Home />

      <Suspense fallback={<h3>Loading....</h3>}>
        <Products />
      </Suspense>
    </>
  );
};

export default App;
