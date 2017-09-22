import React, {Component} from "react";
import PropTypes from "prop-types";


 class Follower extends Component {
    constructor(props){
        super(props);
    }
   
     clickImagen(){
         this.props.clickImagen;    
         console.log("Follower")  ;  
     }
    render(){
        return(
            <div>
            <table>
  <tr>
    <th>Usuario</th>
    <th>Avatar</th>
    <th>Url</th>
    <th>Tipo Usuario</th>
  </tr>
  <tr>
    <td>{this.props.follower.login}</td>
    <td><img onClick={ this.clickImagen.bind(this)} src={this.props.follower.avatar_url} width="100"/></td>
    <td>{this.props.follower.url}</td>
    <td>{this.props.follower.type}</td>
  </tr>
</table>
                
            </div>

        );
    }
}
Follower.PropTypes = {
    follower : PropTypes.object.isRequired
}

export default Follower;