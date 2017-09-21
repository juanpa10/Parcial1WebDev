import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FollowersList from "./FollowersList.js";

class App extends Component {
  
    constructor(props){
        super(props);
            this.state={
                followers:[],
                userName :"juanpa10"
            };
         }
    componentDidMount(){
        fetch("/getFollowers/"+this.userName, {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                console.log("rest en index");
                if(res.ok)
                    return res.json();
            })
            .then((followers) =>{
                this.setState({
                    followers : followers
                })
            })
    }

onSearch(user){
  console.log(user);
}
    render(){
        return(
            <div className="Followers">
            <h1>Followers</h1>
                <br/>
                <FollowersList followers={this.state.onSearch.bind(this)} user={this.state.userName}/>
            </div>
        );
    }
}

export default App;
