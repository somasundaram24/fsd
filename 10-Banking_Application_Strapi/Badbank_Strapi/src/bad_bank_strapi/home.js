import Card from 'react-bootstrap/Card';

function TextExample() {
  return (<div id='home'>
    
    <center>
    <Card style={{ width: '53%',textAlign:'center',margin:'.5%'}}>
      <Card.Body style={{background:"skyblue"}}>
        <Card.Title style={{fontWeight:"bold",fontSize:"250%"}}>Bad Bank</Card.Title>
        <img src={require('./image/bank.png')} alt='error' style={{height:"65vh"}}/>
        <Card.Text><h2><b>Bad Bank Welcome's You</b></h2></Card.Text>
        <Card.Text><h5><b>“Your Prosperity is Our Priority”</b></h5></Card.Text>
      </Card.Body>
    </Card>
    </center>
    </div>
  );
}

export default TextExample;