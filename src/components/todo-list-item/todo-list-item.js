import React , {Component}from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
    state={
    done:false,
    important:false
    };

  onLableClick=()=>{
    this.setState({
      done:true
    });
  };
  onclickImportant=()=>{
    this.setState({
      important:true
    });
  };
  render(){
    const { label }=this.props;
    const{done, important}=this.state;
    let classNames = "todo-list-item";
    if(done){
      classNames += "done";
    }
    if(important){
      classNames += " important"
    }
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.onLableClick}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onclickImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right {clasNames}">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
};


