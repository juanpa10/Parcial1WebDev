import React, {Component} from "react";

import PropTypes from "prop-types";

import Follower from "./Follower.js";

class FollowersList extends Component {
    constructor(props){
        super(props);
    }
    
    renderFollowers(){        
       return this.props.followers.map((t,i) =>{
            return <Follower follower ={t} key={i}/>
        });
    }
    clickImagen(){
        this.props.clickImagen;
    }
    
    render(){
        return(<div>
             {this.renderFollowers()}
        </div>);
    }
}

FollowersList.PropTypes = {
    followers : PropTypes.array.isRequired
};

export default FollowersList;