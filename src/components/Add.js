import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export class Add extends Component {
  static displayName = Add.name;
  
  constructor (props) {
    super(props);
    this.loading = true;
  }

  addProduct(){
    const apiAddUrl = process.env.REACT_APP_API+"/product";
    let form = document.getElementById("productAddForm")
    let formData = new FormData(form)
    console.log(formData);
    //boundary=rxU1IcP2kHsJVF37W5_8tRtSlAnB-KIhGP;
    //boundary=WebKitFormBoundaryReFqAVlwRog3x8SH
    //formData.append()
    fetch(apiAddUrl,{
      method:"POST",
      //headers:{ 'Content-Type': 'multipart/form-data;' },
      body:formData
    }).then(data=>{
      //console.log("abcdefg:===>")
        console.log(data);
        //data.json().then(json=>{ console.log(json) })
       if(data.status === 200){
          data.json().then(json=>{
            console.log(json)
            if(json.code === 'ok'){
              window.location.href='/'
              //this.props.history
            }
          })
       }

    }).catch(err=> { console.log(err)})

  
  }

  render () {
    return (
      <div>
        <h1>添加商品</h1>
        <Form id="productAddForm" method="post" encType="multipart/form-data">
          <FormGroup>
            <Label for="txtName">商品名称</Label>
            <Input name="name" id="txtName" placeholder="请输入商品名称"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="txtName">商品进价</Label>
            <Input name="jAmount" id="txtJAmount" placeholder="请输入商品进价"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="txtName">商品价格</Label>
            <Input name="Amount" id="txtAmount" placeholder="请输入商品价格"></Input>
          </FormGroup>
          <FormGroup>
          <Label for="txtDesc">商品介绍</Label>
          <Input type="textarea" name="desc" id="txtDesc" />
        </FormGroup>
        <FormGroup>
          <Label for="imageFile">File</Label>
          <Input type="file" name="file" id="imageFile" />
          <FormText color="muted">
            请上传对应商品的图片.
          </FormText>
        </FormGroup>
        <Button onClick={this.addProduct}> 保存</Button>
        </Form>
      </div>
    );
  }
}

