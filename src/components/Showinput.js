import React,{useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import shoppingdata from './shoppingdata';

function Showinput(props) {
    const location = useLocation();
    const propsData = location.state;
;
    const [shop,setShop] = useState(shoppingdata);
    const [item,setItem] = useState("1");
   const [selected,setSelected] = useState([]);
   const [check,setCheck] = useState(1);
const Addtobag = (e,el)=>{
  e.preventDefault();
  setSelected([...selected,el]);


   
}
const Add = (e,v,i)=>{
  e.preventDefault();
 console.log(selected)
selected.forEach((el,id)=>{
  console.log(id)
  
  
})


}
const Remove =()=>{
 
  let countminus = parseInt(item);
  setItem(countminus - 1)
}
  return (
    <div>
        Showinput
       <p>Name: {propsData.content}</p>
       <div>
         <h3>Your shoping bag here</h3>
         <div className='d-flex flex-wrap'>
           {
             shop.map((el,id)=>{
               return (
                <>
                 <div className='col' key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                  
                    <button className='btn btn-primary'
                     onClick = {(e)=>Addtobag(e,el)}
                    >Add to Bag</button>
                 </div>
                
                </>
               )
             })
           }
         </div>
       </div>
       <div className='mt-3'>
         <h4>Total to Pay</h4>
         <div>
           <table className=' table  table-bordered'>
             <tbody>
               {
                 selected.map((el)=>{
                   return (
                    <tr>
                      <td>
                        <p> {el.name}</p>
                        <p>{el.price}</p>
                      </td>
                      <td>
                      <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item">
                                <button className="page-link" href="#"
                                 onClick={(e)=>Add(e,el.quantity,el.id)}
                                >+</button>
                              </li>
                              <li className="page-item">
                               {el.quantity}
                              </li>
                              <li className="page-item">
                                <button className="page-link" href="#">-</button>
                              </li>
                            </ul>
                       </nav>
                      </td>
                      
                    </tr>
                   )
                 })
               }
             </tbody>
           </table>
         </div>
       </div>
    </div>
  )
}

export default Showinput