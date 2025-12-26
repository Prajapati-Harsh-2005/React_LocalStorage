import React from 'react';
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata : [], txt11 : "", name : "name" };
    }
    editData(){
        var ListArray = this.state.mydata
        if(localStorage.getItem("name")){
            ListArray.push(this.state.txt11)
            localStorage.setItem("name", this.state.txt11)
        } else {
            this.setState("No Record Added")
        }
        this.setState({
            mydata : ListArray
        })
    }
    render() {
        return (
            <div>
                Name:- <input type='text' name='txt11' onChange={(e) => this.setState({txt11: e.target.value})}/><br/>
                <input type='button' value="Submit" onClick={this.editData.bind(this)}/>

                {this.state.mydata.map((value, index) => {
                    return(<div key={index}></div>)
                })}
            </div>
        );
    }
}

export default Edit;