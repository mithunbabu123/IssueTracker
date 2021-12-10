import React from "react";
import axios from "axios";


class Issuelist extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {user: []};
      
    }
   
    componentDidMount(){
        axios.get("http://localhost:8080/issue/")
        .then(response => {
            this.setState({ user: response.data })
           console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })

    }

    render(){
        return(
            <div>
            <h1> Issue Tracker </h1>
            <table>
                <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Severity</th>
                    <th>Date</th>
                </tr>
            
            <tbody>
               {this.state.user.map(user=>
               <tr>
               <th>{user.username}</th>
               <th>{user.description}</th>
               <th>{user.severity}</th>
               <th>{user.date}</th>
               </tr>
               )}
            </tbody>
            </table>
            </div>
        )
    }

}

export default Issuelist;