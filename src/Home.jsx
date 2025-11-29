import React from 'react';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:(localStorage.getItem("name")),
            msg1:(localStorage.getItem("mobile")),
            msg2:(localStorage.getItem("email"))
         };
    }
    logout(){
        localStorage.removeItem("name")
        localStorage.removeItem("mobile")
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }
    render() {
        return (
            <div>
                <h1>Welcome {this.state.msg}</h1>
                <input type='button' value='logout' onClick={this.logout.bind(this)}/><br/><br/>

                <h3>Mobile:- {this.state.msg1}<br/><br/></h3>
                <h3>E_Mail:- {this.state.msg2}</h3>
            </div>
        );
    }
}

export default Home;