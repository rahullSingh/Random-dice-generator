import React,{Component} from "react";
import "./Dice.css";

class Dice extends Component {
  render(){
    let iconUrl="fas fa-dice-";
    return <div className="dice">
    <i class={`${iconUrl}${this.props.rand} ${this.props.isClicked && "shaking"}`}></i>
     </div>
  }
}

export default Dice;
