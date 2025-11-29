import React from 'react';
class F_Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    forgot(){
        var password = localStorage.getItem("password")
        var email = localStorage.getItem("email")
        if(email == this.state.txt10){
            localStorage.getItem("password")
            alert("Your Password is:- " + password)
        } else {
            this.setState({msg:"Sorry Your Process Is Failed"})
        }
    }
    render() {
        return (
            <div>
                E_Mail:- <input type='email' name='txt10' onChange={(e) => this.setState({txt10: e.target.value})}/><br/>
                <input type='button' value="Submit" onClick={this.forgot.bind(this)}/>
                {this.state.msg}
            </div>
        );
    }
}

export default F_Password;