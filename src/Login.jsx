import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myerr : { } };
    }
    login() {
        var email = localStorage.getItem("email")
        var password = localStorage.getItem("password")

        if (this.state.txt5 == email && this.state.txt6 == password) {
            // this.setState({ msg: "Welcome" })
            window.location.href = "/home"
        } else {
            this.setState({ msg: "You Entered Info Is Wrong" })
        }
    }
    doValidation(){
       var isValid = true
       var temperr = { }
       var {txt5 , txt6} = this.state

       if(!txt5){
        temperr.txt5 = "Enter E_Mail"
        isValid = false
       }
       if(!txt6){
        temperr.txt6 = "Enter Password"
        isValid = false
       }
       this.setState({myerr : temperr})
       return isValid
    }
    doSum(){
        var abc = this.login();
        var ans = this.doValidation();
        if(ans == true){
            this.setState({abc})
        } else {
            this.setState({msg:"No User Found"})
        }
    }
    render() {
        return (
            <div>
                IsE_mail:- <input type='email' name='txt5' onChange={(e) => this.setState({ txt5: e.target.value })} /><br/>
                <p style={{color:"red"}}>{this.state.myerr.txt5}</p><br/>
                Pass:- <input type='text' name='txt6' onChange={(e) => this.setState({ txt6: e.target.value })} /><br />
                <p style={{color:"red"}}>{this.state.myerr.txt6}</p><br/>
                <input type='button' value='login' onClick={this.doSum.bind(this)}/><br/>
                {this.state.msg}
            </div>
        );
    }
}

export default Login;