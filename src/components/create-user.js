import React from "react";
import axios from "axios";
//import { response } from "express";

class Createissue extends React.Component{
    constructor(props){
      super(props);

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeDescription=this.onChangeDescription.bind(this);
      this.onChangeDate=this.onChangeDate.bind(this);
      this.onChangeSeverity=this.onChangeSeverity.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          name:"",
          description:"",
          severity:"",
          date:""
      }
    }

    // componentDidMount(){
    //     axios.get("http://localhost:3000/create")
    //     .then(response => {
    //         if(response.data.length > 0) {
    //             this.setState
    //         }
    //     })
    // }

    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }
    
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }

    onChangeSeverity(e){
        this.setState({
            severity:e.target.value
        })
    }

    onChangeDate(e){
        this.setState({
            date:e.target.value
        })
    }
    

    onSubmit(e){
        e.preventDefault();

        const user={
            name:this.state.name,
            description:this.state.description,
            severity:this.state.severity,
            date:this.state.date
        }
        console.log(user);

        
        axios.post("http://localhost:8080/issue/add", user)
        .then(res => console.log(res.data));

        window.location='/';

        this.setState({
        name:'',
        description:'',
        severity:"",
        date:""
    })
    }
    render(){
        return(
            <div>
            <h1> Add new issue </h1>
            <form onSubmit={this.onSubmit}>
                <label>Name
                    <input type="text" required="true" name="name" value={this.state.name} onChange={this.onChangeName} />
                </label>
                <label>Description 
                    <input type="text" required="true" name="description" value={this.state.description} onChange={this.onChangeDescription} />
                </label>
                <label>Severity
                <input type="text" required="true" name="severity" value={this.state.severity} onChange={this.onChangeSeverity}/>
                </label>
                <label>Date
                <input type="date" required="true" name="date" value={this.state.date} onChange={this.onChangeDate}/>
                </label>
                <label>
                    <input type="submit" required="true" name="submit" />
                </label>
            </form>
            </div>
        )
    }

}

export default Createissue;