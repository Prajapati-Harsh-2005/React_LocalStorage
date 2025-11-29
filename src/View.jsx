import React from 'react';
class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "name",
            mobile: "mobile",
            email : "email",
            password : "password"
        };
    }
    getData() {
        if (localStorage.getItem("name") != null){
            var a = localStorage.getItem("name")
            this.setState({name : a})
        } else {
            this.setState({msg:"No Data Found"})
        }
        if (localStorage.getItem("mobile") != null){
            var b = localStorage.getItem("mobile")
            this.setState({mobile : b})
        } else {
            this.setState({msg:"No Data Found"})
        }
        if (localStorage.getItem("email") != null){
            var c = localStorage.getItem("email")
            this.setState({email : c})
        } else {
            this.setState({msg:"No Data Found"})
        }
        if (localStorage.getItem("password") != null){
            var d = localStorage.getItem("password")
            this.setState({password : d})
        } else {
            this.setState({msg:"No Data Found"})
        }
    }
    componentDidMount(){
        var ans = this.getData();
        if(ans == true){
            localStorage.getItem("name")
            localStorage.getItem("mobile")
            localStorage.getItem("email")
            localStorage.getItem("password")
        } else {
            this.setState({msg:"No Data Found"})
        }
    }
    render() {
        return (
            <div>
                <h1>
                    Name:- {this.state.name}<br/>
                    Mobile:- {this.state.mobile}<br/>
                    E_Mail:- {this.state.email}<br/>
                    Password:- {this.state.password}<br/>
                </h1>
            </div>
        );
    }
}

export default View;