import { useState } from "react"

import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect } from "react";
  
 export default  function Create(){
    
   

    const [accountId, setAccountId] = useState();
    const [data,setData]=useState()
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
     const [block,setBlock]=useState({ display: "none" });
     const [none,setNone]=useState({ display: "block" });
   
   

   
 

     async function handle(e) {
      e.preventDefault();
      if (!name) {
        alert(" Enter your name.");
      } else if (!email) {
        alert(" Enter your email.");
      } else if (!password) {
        alert("Enter your password.");
      } else if (password.length < 8) {
        alert("Please enter a password minimum of 8 characters.");
      } else {
        const existingEmail = data?.data?.find(
          (item) => item.attributes.Email === email
        );
        if (existingEmail) {
          alert("Email already exists.");
        } else {
          await postproducts();
          alert("Registered successfully.");
          setName("");
          setEmail("");
          setPassword("");
          setBlock({ display: "block" });
          setNone({ display: "none" });
        }
      }
    }
  
  
    // condition for button
    const isFormFilled = name && email && password;
  
    // strapi
    let url = "http://localhost:1337/api/badbanks";
  
    const postproducts = async () => {
      let post = {
        data: {
          Name: name,
          Email: email,
          Password: password,
          Balance: 0,
        },
      };

    
      const res = await axios.post(url, post);
      console.log(`successfully posted data${res.data.data}`);
    };
  
     // get id from strapi
  
     useEffect(() => {
      async function fetchdata() {
        let res = await axios(url);
        let result = res.data; 
        setData(result);
      }
      fetchdata();
    
      let customerId =
        data &&
        data.data &&
        data.data.map((item, key) => {
          let strapiID = String(item.id);
          return strapiID;
        });
    
      if (customerId) {
        setAccountId(customerId?.slice(-1));
      }
    }, [url,data]);
  
    return( 
    <div id="create">
<Card border="primary " id="card1" style={{ width: '30rem'  }}>
        <Card.Header style={{fontSize:'x-large',fontWeight:'bold'}} >Create Account</Card.Header>
        <Card.Body>
          <Card.Text> 
            <form className="create" style={none} onSubmit={(e)=> {handle(e)}}>
            <label >Name:  </label><br/>
      <input type="text" id="inp1" placeholder="Enter the Name"  value={name} onChange={(e)=>setName(e.target.value)} required/>
     
   <br /> <br />
      <label >Email:</label><br/>
      <input type="email" id="inp2" placeholder=" Enter the Email"  value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      
      <br /> <br />
      <label >Password:</label><br/>
      <input type="password" id="inp3" value={password}   pattern=".{8,}" placeholder="Enter Password (8+ characters)" onChange={(e)=>setPassword(e.target.value)} required/>
     
    
<br /> <br />
 <button  type="submit"  className="w-100 btn btn-lg btn-primary all-btn" id="button" disabled={!isFormFilled}  >Create Account</button>

 </form >
 <div  style={block}>
  <h1>{`Account ID:${accountId}`}</h1>
 <button type="submit" className="w-100 btn btn-lg btn-primary all-btn"
 id="button" onClick={()=>{setNone({display:"block"});setBlock({display:"none"});}} >Add account</button>  
         
 </div> </Card.Text>
        </Card.Body>
      </Card>
      <br />
        </div>
    )
 }