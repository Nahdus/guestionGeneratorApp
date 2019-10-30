import React, {Component} from 'react';
import sendrequest from "./component/post"
import './App.css';
import { Table, Button, Form, FormGroup, Label, Input, Jumbotron, Container, Navbar,NavbarBrand,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { css } from '@emotion/core';
// Another way to import. This is recommended to reduce bundle size
import ClipLoader from 'react-spinners/ClipLoader';
 
// Can be a string as well. Need to ensure each key-value pair ends with ;

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

// kwasito
class App extends Component {

  state={
    phrase:"",
    questions:"",
    loading:false
    
  }


  
  render(){

    const displayqoustions=()=>{
      console.log(!(this.state.questions===""))
      if(!(this.state.questions==="")){
        const sanitizedList=this.state.questions.filter((q)=>{return !(/\r|\n/.exec(q))})
        return (
          <Container>
          <Table>
            <thead>
              <tr>
              <th>Question List</th>
              </tr>
            </thead>
            <tbody>
            {sanitizedList.map((q,_)=>
          <tr key={_}><td>{q}</td></tr>
        )}
            </tbody>
          </Table>
          </Container>
          
          
        
        
        
        )
      }
    }
    console.log(displayqoustions())
    return (
      <div className="app">
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Kwasito</NavbarBrand>
          
          
        </Navbar>
      </div>
      <Jumbotron>
      <Form>
      <FormGroup>
          <Label for="essayInput" >Type a paragraph</Label>
          <Input 
          onChange={(e)=>this.setState({phrase:e.target.value})} 
          maxLength="10000"
          rows="10" cols="10" type="textarea" name="text" id="essayInput" />
          
          
      </FormGroup>
      <Button color="danger" onClick={()=>{

        this.setState({
          loading:true,
          questions:""
        })
        sendrequest("http://127.0.0.1:5000/createquestions",{phrase:this.state.phrase})
        .then((data)=>{
          this.setState({loading:false})
          this.setState({questions:data.split("%").filter((data)=>data!=='')})
          console.log(this.state.questions)
          {/* this.state.questions.forEach(question => {
            const url ="http://www.stands4.com/services/v2/grammar.php?uid=6726&tokenid=OeNbrtSCAVtoExaD&text="+encodeURI(question)
            
            sendrequest(url,'','GET').then((data)=>{
              console.log(question)
              console.log(data)
              })
          }); */}
         })
        console.log(this.state.phrase)
        }}>generate questions</Button>
      {/* <textarea rows="30" cols="100" onChange={(e)=>this.setState({phrase:e.target.value})}></textarea> */}
      </Form>
      </Jumbotron>
      <div className='sweet-loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
      
        {
          
          displayqoustions()
          }
      </div>
    );
  }
}

export default App;
