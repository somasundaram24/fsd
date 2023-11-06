import { useState, useEffect } from "react";
  import Card from "react-bootstrap/Card";
  import axios from "axios";
  
  export default function Withdraw() {
    let [currbalance, setCurrbalance] = useState();
    let [withdraw, setWithdraw] = useState();
    let [acc_Id, setAcc_Id] = useState();
    let [acc_Name, setAcc_Name] = useState();
    const [result, setResult] = useState({ display: "none" });
    const [form, setForm] = useState({ display: "block" });
  
    function handleSubmit(e) {
      e.preventDefault();
      if (withdraw === " ") {
        alert("Please enter an amount");
      } else if (isNaN(withdraw)) {
        setWithdraw("");
        alert("Please enter amount in number");
      } else if (Number(withdraw) > currbalance) {
        setWithdraw("");
        alert("Insufficient funds. Please enter an amount less than or equal to your current balance.");
      }
       else if (Number(withdraw) < 1) {
        setWithdraw("");
        alert("Please enter a positive amount");
      }
      else {
        updateproducts();
        setWithdraw("");
        setAcc_Id("");
        setResult({ display: "block" });
        setForm({ display: "none" });
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
      let balance_add = Number(currbalance) - Number(withdraw);
      setCurrbalance(balance_add);
      alert(`$${withdraw} amount withdrawed successfully`);
  
      let update = {
        data: {
          Balance: balance_add,
        },
      };
  
      const put_bal = await axios.put(`${url}`, update);
      console.log(put_bal);
    };
  
  
     return(
        <div id="with">
     <Card border="primary " id="card3" style={{ width: '30rem' }}>
        <Card.Header style={{fontSize:'x-large',fontWeight:'bold'}}>Withdraw</Card.Header>
        <Card.Body>
        <Card.Title style={{ fontSize: 22 }} className="title">
              Account Holder : {acc_Name}
            </Card.Title>
      
          <Card.Text>  <form onSubmit={handleSubmit} style={form}>
          <h4> Balance:₹{currbalance} </h4>
          <br/>
        <input type="number" id="inp2" placeholder='Enter the ID' onChange={(e) => setAcc_Id(e.target.value)} />
<br/>
<br/>
        
        <input type="number" id="inp2" placeholder='Enter the Withdraw Amount' onChange={(e) => setWithdraw(e.target.value)} />
       <br/>
       <br/>
       <button type="submit" id="button" className="w-100 btn btn-lg btn-warning all-btn"
   disabled={!(withdraw)} >Withdraw</button>

      </form> 
      <div style={result}>
  <h1>{`Account Balance:${currbalance}`}</h1>
 <button type="submit"  className="w-100 btn btn-lg btn-warning all-btn" id="button" onClick={()=>{setResult({display:"none"});setForm({display:"block"});}} >Withdraw</button>  
 </div>
          </Card.Text>
        </Card.Body>
      </Card>
     
    </div>
     )
 }