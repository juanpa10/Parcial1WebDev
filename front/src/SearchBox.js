import React, {Component} from "react";

export default class SearchBox extends Component{
    constructor(props){
        super(props);
    }
    
    onEnter(evt){
        this.props.onSearch(evt.target.value);
    }
    
    render(){
        return(<div><input type="text" placeholder="usuarioGit" onInput={this.onEnter.bind(this)}/></div>);
    }
}