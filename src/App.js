import React, { useEffect, useState } from "react";
import './App.css';
import web3 from './web3';
import minor from './minor'
function App() {
  // const [s_order, setS_order] = useState([]);
  const[price, setPrice]=useState(0);
  const[quantity,setQuantity]= useState(0);
  const[message,setMessage]= useState('');
  const[s_orders,setS_orders]=useState([])

  const[s_orderlength,setS_orderlength]= useState(0)
  useEffect(() => {
    async function fetchData() {
      const x = await minor.methods.s_ordersLength().call();
      setS_orderlength(x);
      console.log(s_orderlength)
    }
    // async function handlePeople(){
    
    //   for(let i=0; i< s_orderlength; i++){
    //     const s_order= await minor.methods.s_orders(i).call();
    //     setS_orders((prevValues)=>[...prevValues, s_order ])
    //     console.log(s_order);
    //     console.log(123)
    //   }
    // }
    // handlePeople()
    fetchData();
  }, []);
  // let s_orders=[];
  
  let s_order= {};
  async function placeOrder(){
    const accounts = await web3.eth.getAccounts();
    setMessage("Waiting on transaction success...");
    
    await minor.methods.placeOrder(price, quantity).send({
      from: accounts[0],
    });
    for(let i=0; i< s_orderlength; i++){
      s_order= await minor.methods.s_orders(i).call();
      setS_orders((prevValues)=>[...prevValues, s_order ])
      
      console.log(s_order)
    }
    setMessage("Transaction Successful");
  }
  // web3.eth.getAccounts().then(console.log)
  return (
    <div className="App">
      <div>
        <h1>Sell Order</h1>
        <label>Enter quantity</label>
        <input 
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)} />
        <label>Enter Price</label>
        <input 
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button onClick={placeOrder}>Submit Sell order</button>
        <h2>Sell Orders</h2>
        <ul>
          {s_orders.map((order, index) => (
            <li key={index}>
              Seller: {order.seller}, Quantity: {order.quantity}, Price: {order.price}
            </li>
          ))}
        </ul>


      </div>
    </div>
  );
}

export default App;
