import Card from 'react-bootstrap/Card';

 import { useState } from "react";

 import axios from 'axios';
  import { useEffect } from 'react';

 export default function Deposit(){
   
  let [currbalance, setCurrbalance] = useState();
  let [deposit, setDeposit] = useState();
  let [acc_Id, setAcc_Id] = useState();
  let [acc_Name, setAcc_Name] = useState();
  const [result, setResult] = useState({ display: "none" });
  const [form, setForm] = useState({ display: "block" });

  

  async function handleSubmit(e) {
    e.preventDefault();
    if (deposit === " ") {
      alert("Please enter an amount");
    } else if (isNaN(deposit)) {
      setDeposit("");
      alert("Please enter amount in number");
    } else if (Number(deposit) < 1) {
      setDeposit("");
      alert("Please enter a positive amount");
    }
    else {
      try {
        const res = await axios(`${url}`);
        const result = res.data;
        if (result){
          updateproducts();
          setDeposit("");
          setAcc_Id("");
          setResult({ display: "block" });
          setForm({ display: "none" });
        }
      } catch (err) {
        console.log(err);
        alert("Invalid account ID, please enter a valid ID");
        setDeposit("");
        setAcc_Id("");
      }
    }
  }

  let url = `http://localhost:1337/api/badbanks/${acc_Id}`;
  useEffect(() => {
    async function fetchdata() {
      let res = await axios(`${url}`);
      let result = res.data;

      setCurrbalance(result.data.attributes.Balance);
      setAcc_Name(result.data.attributes.Name);

      console.log(currbalance);
    }
    if (acc_Id) {
      fetchdata();
    }
  }, [url, acc_Id, currbalance]);

  const updateproducts = async () => {
    let balance_add = Number(currbalance) + Number(deposit);
    setCurrbalance(balance_add);
    alert(`$${deposit} amount deposited successfully`);

    let update = {
      data: {
        Balance: balance_add,
      },
    };

    const put_bal = await axios.put(`${url}`, update);
    console.log(put_bal);
    

    
  };
  return (
    <div id='depo'>
      <Card border="primary " id="card3" style={{ width: '30rem' }}>
        <Card.Header style={{fontSize:'x-large',fontWeight:'bold'}}>Deposit</Card.Header>
        <Card.Body>
        <Card.Title style={{ fontSize: 22 }} className="title">
              Account Holder : {acc_Name}
            </Card.Title>
          <Card.Text>  <form onSubmit={(e)=>{handleSubmit(e)}} style={form}>
              <h4> Balance: ₹{currbalance}</h4>
                <br/>
          <input type="text" id="inp2"  placeholder='Enter the ID' onChange={(e) => setAcc_Id(e.target.value)} />
      <br/>
      <br/>
        <input type="text" id="inp2"  placeholder='Enter the Deposit Amount' onChange={(e) => setDeposit(e.target.value)} />
       <br/>
       <br/>
        <button type="submit" id="button" className="w-100 btn btn-lg btn-success all-btn"
   value="Deposit" disabled={!(deposit)} >Deposit</button>
      </form>     
      <div style={result}>
  <h1>{`Account Balance:${currbalance}`}</h1>
 <button type="submit"  className="w-100 btn btn-lg btn-success all-btn" id="button" onClick={()=>{setResult({display:"none"});setForm({display:"block"});}} >Deposite</button>  
 </div>
         
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}