import React, { Component, createRef } from 'react';

import ProgressBar from 'progressbar.js';

class Shape extends Component{
  
  constructor(){
    
    super();
    
    this.progressBar = createRef();
    
  }
  
  
  
  componentDidMount(){
    
    let ShapeType, shape, text_val;
    
    if(this.props.type === 'line'){
      ShapeType = ProgressBar.Line;
    } else if(this.props.type === 'semicircle'){
      ShapeType = ProgressBar.SemiCircle;
    } else{
      ShapeType = ProgressBar.Circle;
    }
    
    
    text_val = typeof this.props.options.text === 'string' ? {value: this.props.options.text} : this.props.options.text;
    
    let input_options = this.props.options;
    
    input_options.text = text_val;
    
    shape = new ShapeType(this.progressBar.current, input_options, this.props.callback);
    
    shape.animate(this.props.progress || 0.5);
    
  }
  
  render(){

    const container_class = this.props.container_class || 'progressbar_container';
    
    return(
    
      <div
        ref={this.progressBar}
        className='progressbar-container'
        style={this.props.container_style}
      ></div>
    
    );
    
  }
  
}

const Circle = props => (
  
  <Shape type='circle' options={props.options} {...props} />
  
);

const SemiCircle = props => (
  
  <Shape type='semicircle' options={props.options} {...props} />
  
);

const Line = props => (
  
  <Shape type='line' options={props.options} {...props} />
  
);

export { Circle, SemiCircle, Line };