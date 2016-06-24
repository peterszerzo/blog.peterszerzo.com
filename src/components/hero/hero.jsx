import React, {Component} from 'react';
import {connect} from 'react-redux';

import './hero.scss';
import {setLoadedImage} from '../../actions/ui';
import {animatedScrollTo} from '../../effects/scroll';
import {Down} from '../icons/icons.jsx';

class Hero extends Component {

  constructor(props) {
    super(props);
    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  render() {
    const {title, subtitle, text, ui} = this.props;
    return (
      <div className='hero' style={{height: ui.windowHeight}}>
        {this.renderTestImage()}
        <div
          className='hero__background hero__background--blurred'
          style={this.getBackgroundStyle()}
        />
        <div className='hero__overlay' style={this.getOverlayStyle()}/>
        <div className='hero__title-bar'>
          <div className='hero__title-bar__content'>
            <h1 className='title'>{title}</h1>
            <h2 className='headline'>{subtitle}</h2>
          </div>
        </div>
        <div className='hero__text'>{text}</div>
        <div className='hero__arrow' onClick={this.scroll}>
          <Down/>
        </div>
      </div>
    );
  }

  renderTestImage() {
    const {image} = this.props;
    if (!image) {
      return null;
    }
    return (
      <img
        style={{
          opacity: 0.1,
          width: 10,
          height: 10,
          position: 'fixed'
        }}
        src={image}
        onLoad={this.handleImageLoad}
      />
    );
  }

  getBackgroundStyle() {
    const {image} = this.props;
    if (!this.isImageLoaded() || !image) {
      return {};
    }
    return {
      'backgroundImage': `url(${image})`
    };
  }

  getOverlayStyle() {
    const opacity = this.isImageLoaded() ? '0.6' : '1';
    return {
      'opacity': opacity
    };
  }

  isImageLoaded() {
    return this.props.ui.loadedImages.indexOf(this.props.image) > -1;
  }

  handleImageLoad() {
    this.props.dispatch(setLoadedImage(this.props.image));
  }

  scroll() {
    animatedScrollTo(this.props.ui.windowHeight - 70);
  }
}

export default connect(state => ({
  ui: state.ui
}))(Hero);
