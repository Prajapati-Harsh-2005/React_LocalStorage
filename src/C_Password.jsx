import React from 'react';
class C_Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    password(){
        var password = localStorage.getItem("password")
        if(password != this.state.txt7){
            this.setState({msg:"Your Old Password Not Match"})
        } else if(this.state.txt7 == this.state.txt8){
            this.setState({msg:"Your Old Pass And New Pass Must Be Different"})   
        } else if(this.state.txt8 != this.state.txt9){
            this.setState({msg:"New Pass And Confirm Pass Must be Same"})
        } else {
            localStorage.setItem("password", this.state.txt9)
            this.setState({msg:"Password Changed"})
        }
    }
    render() {
        return (
            <div>
                Old Password:- <input type='text' name='txt7' onChange={(e) => this.setState({txt7: e.target.value})}/><br/>
                New Password:- <input type='text' name='txt8' onChange={(e) => this.setState({txt8: e.target.value})}/><br/>
                Confirm Password:- <input type='text' name='txt9' onChange={(e) => this.setState({txt9: e.target.value})}/><br/>
                <input type='button' value="Submit" onClick={this.password.bind(this)}/><br/>
                {this.state.msg}
            </div>
        );
    }
}

export default C_Password;