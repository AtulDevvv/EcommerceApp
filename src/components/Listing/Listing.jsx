import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { Usecontext } from '../../contextapi';
import Product from '../Product';

function Listing() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const { state: { Products } } = Usecontext();
// Applying some functionalities--->>>

const{ filterState:{ byStock,

  sort,
  searchQuery},Filterdispatch} =Usecontext();

const transformProduct=()=>{
let sortedProducts=products;
console.log( " the products are"+sortedProducts)

if(searchQuery){
  sortedProducts=sortedProducts.filter((prod)=>
  prod.productName.toLowerCase().includes(searchQuery)
  );
}
// console.log(sortedProducts)
return sortedProducts;

}





  useEffect(() => {
    // Filter products based on the category id
    const filteredProducts = Products.productData.filter(item => item.cat_name === id);
    // Extract the products from filteredData
    const allProducts = filteredProducts.flatMap(item => 
      item.items.flatMap(item => item.products)
    );
    setProducts(allProducts);
  }, [id, Products]);

  return (
    <div className='product-listing ml-1 '>
      <div className='container'>
        <div className='product-listing flex flex-row gap-10'>
         
          <Sidebar category={id} />
       
          <div className='w-[90vw] h-[100vh] flex flex-wrap gap-10 overflow-y-scroll'>
            {transformProduct().map(product => (
              <Product key={product.id} item={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
