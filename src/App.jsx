import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Listing from './components/Listing/Listing';
import Cart from './components/CartDetails/Cart';
import CheckoutPage from './stripe/CheckoutPage';
import OrderConfirmation from './stripe/ConfirmationPage';
import Loading from './components/Loading';
import { GlobalContext, Usecontext } from './contextapi';
import AuthPage from './components/KAAMkiCHEEZE/AuthPage';

function App() {
  return (
    <GlobalContext>
      <MainApp />
    </GlobalContext>
  );
}

const MainApp = () => {
  const { isLoading, setIsLoading } = Usecontext();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    handleStart();
    setTimeout(handleComplete, 3000); // Simulate loading time, replace with actual loading logic

    return () => {
      handleComplete();
    };
  }, [setIsLoading]);

  return (
    isLoading ? (
      <Loading />
    ) : (
      <div className='bg-[#f8f8f8]'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/cat/:id" exact={true} element={<Listing />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/OrderSuccessful' element={<OrderConfirmation />} />
            <Route path='/AuthPage' element={<AuthPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  );
};

export default App;
