import React, { Component, createRef } from 'react';

import ProgressBar from 'progressbar.js';

let shape = null;

class Shape extends Component{

  constructor(){

    super();

    this.progressBar = createRef();

  }

  componentWillUpdate() {
    if (shape != null && this.props.startAnimate) {
      　console.log('update');
        shape.animate(this.props.progress >= 0 ? this.props.progress : 0.5);
    }
  }

  componentDidMount(){

    let ShapeType, text_val;

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

  }

  render(){


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

  <Shape type='circle' container_class={props.container_class} options={props.options} {...props} />

);

const SemiCircle = props => (

  <Shape type='semicircle' container_class={props.container_class} options={props.options} {...props} />

);

const Line = props => (

  <Shape type='line' container_class={props.container_class} options={props.options} {...props} />

);

export { Circle, SemiCircle, Line };
