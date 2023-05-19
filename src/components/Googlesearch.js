import React,{useState} from 'react';
import {useNavigate,Link} from "react-router-dom";

function Googlesearch() {
  // Accessing the history instance created by React
  const navigate = useNavigate();
  const [search,setSearch] = useState("");
  const [array,setArray] = useState([]);
  const [one,setOne] = useState("");
  const [two,setTwo] = useState("");
  const [three,setThree] = useState("");
  const [four,setFour] = useState("");
  const arr= [];

 const add = (e)=>{
    e.preventDefault();
    setSearch(e.target.value);
    setArray([...array,search]);
   
    
 }
 const deleteArray = (el)=>{
       console.log(el);
       let c = array.filter((ele)=>
         {
           return ele != el
         }
       )
       console.log(c);
       setArray(c)
 }

 const oneredirect = (e)=>{
  e.preventDefault();
     if(one !== "")
     {
         navigate(`/Showinput/${one}`)
     }
 }

 const data ={
  content:two
 }

  return (
    <div>
        <div className='d-flex justify-content-center'>
           <div className="">
                <input type="text" 
                placeholder='Enter Something '
                className='form-control mt-3'
                value ={search}
                onChange={(e)=>add(e)}
                ></input>
           </div>

        </div>
        <div className='d-flex justify-content-center'>
           <div className='result'>
              {
                array.map((el)=>{
                   return (
                    <>
                      <div>{el}<button  className='deleted' onClick ={()=>deleteArray(el)}>x</button></div>
                    </>
                   )
                })
              }
           </div>

        </div>
        <div className=''>
          <div className='row mt-4'>
            <div className='d-flex flex-wrap d'>
                 <div className='col-3 col-sm-3 col-md-3 col-lg-3'>
                    <input type="text" 
                    className='form-control'
                     value ={one}
                     onChange={(e)=>setOne(e.target.value)}
                    ></input>
                     <div className='mt-3'>
                        <button className='btn btn-success'
                        onClick={(e)=>oneredirect(e)}
                        >Next Page</button>
                    </div>
                 </div>
                 <div className='col-6 col-sm-3 col-md-3 col-lg-3'>
                    <input type="text" 
                    className='form-control'
                    value ={two}
                    onChange={(e)=>setTwo(e.target.value)}
                    ></input>
                  <div className='mt-3'>
                        <button className='btn btn-dark'>
                          <Link to ="/Showinput" state={data}> Next Page</Link>
                         </button>
                    </div>
                 </div>
                 <div className='col-6 col-sm-3 col-md-3 col-lg-3'>
                    <input type="text" 
                    className='form-control'
                    value ={three}
                    onChange={(e)=>setThree(e.target.value)}
                    ></input>
                    <div className='mt-3'>
                        <button className='btn btn-warning'>Next Page</button>
                    </div>
                 </div>
                 <div className='col-4 col-sm-4 col-md-3 col-lg-2'>
                    <input type="text" 
                    className='form-control'
                    value ={four}
                    onChange={(e)=>setFour(e.target.value)}
                    ></input>
                    <div className='mt-3'>
                        <button className='btn btn-danger'>Next Page</button>
                    </div>
                 </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Googlesearch