import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function Alldata() {
  const [data, setData] = useState();

  //strapi
  let url = "http://localhost:1337/api/badbanks";
  useEffect(() => {
    async function fetchdata() {
      let res = await axios(url);
      let result = res.data;
      setData(result);
    }
    fetchdata();
  }, [url]);

  const handleDelete = async (id, name, email) => {
    await axios.delete(`${url}/${id}`);

    alert(`successfully deleted account ID: ${id} 
       Name: ${name}
      Email: ${email}`);
    let update_data = await axios(url);
    setData(update_data.data);
  };


   return (
     <div id="all">
     <center>
       <h1 id="title">AllData</h1>

 <form >
 {data && data.data && data.data.map((item, key) => (
 <Card border="primary " id="card4" style={{ width: '30rem' }}>
  <Card.Header style={{fontSize:'x-large',fontWeight:'bold'}}>Account ID : {item.id}</Card.Header>
         
         <Card.Body>
       
           <Card.Text>
            
         <ul id="ul">
           
           Name: {item.attributes.Name}
           <br/>
           Email:{item.attributes.Email}
           <br/>
           Balance:₹{item.attributes.Balance}
         </ul>
         <button
                    className="w-100 btn btn-lg btn-danger all-btn"
                    onClick={() =>
                      handleDelete(
                        item.id,
                        item.attributes.Name,
                        item.attributes.Email
                      )
                    }
                  >
                    Delete
                  </button>
             
       </Card.Text>
       </Card.Body>
     </Card>
))  
} 
</form>
    
</center>

</div>
);
}