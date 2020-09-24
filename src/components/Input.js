import React from "react"



class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
  }

  changeData = (data) => {
    console.log(data);
    this.setState({data: data});
  }

  sendData = (data) => {
    this.props.append(this.state.data);
    this.setState({data: ''});
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.data} 
          placeholder= "create a todo item"
          onChange = {(e) => this.changeData(e.target.value)}
        />
        <button onClick={()=> this.sendData(this.state.data) }>Submit</button>
      </div>
    );
  }
}

export default Input;