import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader } from 'reactstrap'

export class Home extends Component {
  static displayName = Home.name;
  constructor(props){
    super(props)
    this.state = { list: [], loading: true };
    this.fetchData();
    console.log(process.env)
  }
  fetchData(){
     fetch(process.env.REACT_APP_API +"/product",{
      method:"GET"
    }).then(data=>data.json()).then(data=>{

      this.setState({ list:data.data,loading:false })
    })
  }

 static reanderTable(products){
    return (
      <div>
      {products.map(product=><Card key={product.id} style={{marginTop : 20}} >
        <CardHeader>{product.name}</CardHeader>
        <CardImg top width="100%" height="80px"  src={product.imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{color:'red'}}>￥{product.amount}/￥{product.jAmount} </CardTitle>
          <CardText>{product.desc}</CardText>
        </CardBody>
      </Card>)}
      </div>
    )
 }



  render () {
    let contents = this.state.loading
    ? <p><em>Loading...</em></p>
    : Home.reanderTable(this.state.list)
    return (
      <div>
        <h5>产品列表</h5>
        {contents}
      </div>
    );
  }
}
