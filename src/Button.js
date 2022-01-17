import React,{Component} from "react";
import "./Button.css";

class Button extends Component{
  render(){
    return <button>{this.props.isClicked ? "Rollong..." : "Roll Dice!"}</button>
  }
}

export default Button;
