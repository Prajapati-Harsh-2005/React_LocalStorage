import React from 'react';
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name : "name" };
    }
    getData(){
        if (localStorage.getItem("name") != null){
            var a = localStorage.getItem("name")
            this.setState({name : a})
        } else {
            this.setState({msg:"No Data Found"})
        }
    }
    componentDidUpdate(){
        var name = "name"
        if(name !== this.state.txt11){
            localStorage.setItem("name", this.state.txt11)
        } else {
            this.setState({msg: "No Data Edit"})
        }
    }
    saveData(){
        this.setState(txt11.target.value)
    }
    render() {
        return (
            <div>
                Name:- <input type='text' name='txt11' value={this.state.txt11} onChange={(e) => this.setState({txt11: e.target.value})}/><br/>
                <input type='button' value="Submit" onClick={this.saveData.bind(this)}/><br/>
            </div>
        );
    }
}

export default Edit;