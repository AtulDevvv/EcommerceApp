import { createContext, useReducer ,useContext ,useState} from "react";
import data from "../components/data/data"
import { bestselling } from "../components/data/data";



const reducer1=(state,action)=>{

  switch(action.type){
    case 'AddToCart':
      return{
        ...state ,cart:[...state.cart, {...action.payload,qty:1}]
      };
      case 'RemoveFromCart':
  return {
    ...state,
    cart: state.cart.filter((prod) => prod.id !== action.payload)
  };
  case 'CHANGE_CART_QTY':
    return {
      ...state,
      cart:state.cart.filter((c)=>c.id===action.payload.id?(c.qty=action.payload.qty):c.qty)
    }
    case 'toatl_price':
      return {
        ...state, 
        totalPrice: action.payload
      };
     default:
      return state;
  }
}
const Prodreducer=(state,action)=>{
  switch(action.type){
    case 'SORT_BY_PRICE':
      return {...state, sort:action.payload};
     
     
        case 'FILTER_BY_RATING':
          return{
              ...state,byRating:action.payload
          };
          case'Filter_by_Search':
          return{
            ...state,searchQuery:action.payload
          };
          case ' Clear_Filter':
            return{
              byStock:false,
    byFastDelivery:false,
    byRating:0,
    searchQuery:'',
            };
    defalut:
    return state
  }
}

const context=createContext();

const GlobalContext=({children})=>{
  
  

  const[state,dispatch]=useReducer(reducer1,{
    Products:data,
    cart:[],
    totalPrice:0
  })

  const [filterState,Filterdispatch]=useReducer(Prodreducer,{
    byStock:false,
    byFastDelivery:false,
    byRating:0,
    searchQuery:'',


  });

  const [isLoading, setIsLoading] = useState(false);
 return <context.Provider value={{state,dispatch,filterState,Filterdispatch,bestselling,isLoading,setIsLoading}} >
  {children}
</context.Provider>
}


 const Usecontext=()=>{
return useContext(context);
}


export  { GlobalContext, Usecontext };