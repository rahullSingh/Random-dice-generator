import React,{Component} from "react";
import Button from "./Button";
import Dice from "./Dices";
import "./App.css";
class App extends Component{
  static defaultProps={
    diceName:["one","two","three","four","five","six"],
  }
  constructor(props){
    super(props);
    this.state={
      rand1:"one",
      rand2:"one",
      isClicked:false
    }
    this.genRandom=this.genRandom.bind(this);
  }

  genRandom(){
    let rand1=Math.floor(Math.random()*this.props.diceName.length);
    let rand2=Math.floor(Math.random()*this.props.diceName.length);

    this.setState({isClicked:true});
    setTimeout(()=>{
      this.setState({rand1:this.props.diceName[rand1],rand2:this.props.diceName[rand2],isClicked:false});
    },1000);
  }
  render(){
    return (<div className="App">
    <div className="center">
    <Dice rand={this.state.rand1} isClicked={this.state.isClicked}/>
    <Dice rand={this.state.rand2} isClicked={this.state.isClicked}/>
      </div>
      <button onClick={this.genRandom} disabled={this.state.isClicked}>
      {this.state.isClicked ? "Rolling..." : "Roll Dice!"}
      </button>
      </div>)
  }
}

export default App;
