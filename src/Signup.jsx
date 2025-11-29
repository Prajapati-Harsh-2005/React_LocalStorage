import React from 'react';
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myerr : { }};
  }
  saveData() {
    localStorage.setItem("name", this.state.txt1)
    localStorage.setItem("mobile", this.state.txt2)
    localStorage.setItem("email", this.state.txt3)
    localStorage.setItem("password", this.state.txt4)
    this.setState({ msg: "Data Saved" })
    // window.location.href = "/login"
  }
  doValidation(){
    var isValid = true
    var temperr = { }
    var {txt1, txt2, txt3, txt4} = this.state
    if(!txt1){
      temperr.txt1 = "Enter Name"
      isValid = false
    }
    if(!txt2){
      temperr.txt2 = "Enter Mobile"
      isValid = false
    }
    if(!txt3){
      temperr.txt3 = "Enter E_Mail"
      isValid = false
    }
    if(!txt4){
      temperr.txt4 = "Enter Password"
      isValid = false
    }
    this.setState({myerr : temperr})
    return isValid
  }
  Sum(){
    var abc = this.saveData()
    var ans = this.doValidation();
    if(ans == true){
      this.setState({abc})
    } else {
      this.setState({msg: "No User Found"})
    }
  }
  render() {
    return (
      <div>
        Name:- <input type='text' name='txt1' onChange={(e) => this.setState({ txt1: e.target.value })} /><br />
        <p style={{color:"red"}}>{this.state.myerr.txt1}</p><br/>
        Mobile:- <input type='tel' name='txt2' onChange={(e) => this.setState({ txt2: e.target.value })} /><br />
        <p style={{color:"red"}}>{this.state.myerr.txt2}</p><br/>
        E_Mail:- <input type='email' name='txt3' onChange={(e) => this.setState({ txt3: e.target.value })} /><br />
        <p style={{color:"red"}}>{this.state.myerr.txt3}</p><br/>
        Password:- <input type='text' name='txt4' onChange={(e) => this.setState({ txt4: e.target.value })} /><br />
        <p style={{color:"red"}}>{this.state.myerr.txt4}</p><br/>
        <input type='button' value='submit' onClick={this.Sum.bind(this)} />
        {this.state.msg}
      </div>
    );
  }
}

export default Signup;