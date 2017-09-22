import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FollowersList from "./FollowersList.js";
import SearchBox from "./SearchBox";

class App extends Component {
  
    constructor(props){
        super(props);
            this.state={
                followers:[],
                userName :"",
                preUsuario:"hello",
                post: this.props.data
            };
         }
    componentDidMount(){
        console.log("ajá mirá tú esa viana: "+this.state.followers)
        fetch("/getFollowers/"+this.state.userName+"/", {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                if(res.ok){
                    
                    return res.json();}
            })
           .then((followers) =>{
               this.setState({
                    followers : followers
                })
            })

    }


 handleChange(event) { 
    this.setState({userName: event.target.value});
    console.log( this.state.userName);     
  }
  clickImagen(){
      console.log("imagen clickeada");
      this.handleClick();
  }
    render(){
       // var preUsuario = this.state.preUsuario;
        return(
            <div className="Followers">
            <h1>Followers</h1>
                <div>
                <input type="text"  onChange={this.handleChange.bind(this)} />
                <button 
                    className="button comments" 
                    onClick={ this.handleClick.bind(this)}>Button</button>
                </div>
                <br/>
                <FollowersList followers= {this.state.followers}/>
            </div>
        );
    }
     handleClick() {
          console.log("ajá mirá tú esa viana: "+this.state.followers)
        fetch("/getFollowers/"+this.state.userName+"/", {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                if(res.ok){
                    return res.json();}
            })
           .then((followers) =>{
               this.setState({
                    followers : followers
                })
            })
  }
}

export default App;
//followers={this.state.onSearch.bind(this)} user={this.state.userName}/