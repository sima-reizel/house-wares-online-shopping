import  ProductShow  from "../products/ProductShow";
import { useDispatch, useSelector } from "react-redux";

const MiniBasket=()=>{
let disp=useDispatch();
let basketArr=useSelector(state=>state.order.basketArr);
return(
<>
    <h1>mini</h1>
    {basketArr&&<ul>
     <li>
     {basketArr.map(item=><li key={item.id} >   
     <ProductShow status="MiniBasket" prod={item}/></li>)}
     </li>
    </ul>
    }
</>
)
}

export default MiniBasket;