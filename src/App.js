import React, { Component } from 'react';
import Card from './components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function strDateFillZero(str) {
  const lst=str.split('/');
  return `${lst[0]}-${('0'+lst[1]).slice(-2)}-${('0'+lst[2]).slice(-2)}`;
}

class App extends Component{
  constructor(props) {
      super(props);
      this.state={
        opt: {
            "method": "add",
            "secDateStr": strDateFillZero(new Date(new Date().getTime()+1000*60*60*24*31).toLocaleDateString()),
            "secId":"1",
            "divId":"1",
            "dmvNoLv1":"40",
            "dmvNo":"40",
            "licenseTypeCode":"3",
            "otp":"",
            "idNo":"",
            "birthdayStr":"",
            "name":"",
            "contactTel":"",
            "email":""
          }
      };
      this.handler = this.handler.bind(this);
      this.signup = this.signup.bind(this);
  }
  handler(event) {
    let data = this.state.opt;
    data[event.name] = event.value;
    this.setState({opt:data});
    //console.log(data);
  }
  signup = async () => {
    try {
      const data = this.state.opt;
      const headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/x-www-form-urlencoded"
      }
      const bodyContent = `method=add&secDateStr=${data.secDateStr}&secId=${data.secId}&divId=${data.divId}&dmvNo=${data.dmvNo}&licenseTypeCode=${data.licenseTypeCode}&otp=&idNo=${data.idNo}&birthdayStr=${data.birthdayStr}&name=${data.name}&contactTel=${data.contactTel}&email=${data.email}`;
      console.log("TR");
      await fetch("https://www.mvdis.gov.tw/m3-emv-trn/exm/signUp", { 
        method: "POST",
        body: bodyContent,
        headers: headersList
      }).catch(err => {});
      alert("已發送報名請求，結果請至官網查詢");
    } catch (error) {
      console.log(error);
    }
  }
  render(){
    return (
      <Container className='mt-5'>
        <Row>
          <Col md={10}>
            <Card data={this.state.opt} handler={this.handler} click={this.signup}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
