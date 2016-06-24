import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';

import * as components from '../components/index.js';

import getRoute from '../routes/router.js';
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import {setScroll} from '../actions/ui.js';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.updateScrollTop = this.updateScrollTop.bind(this);
  }

  render() {
    return (
      <div className='wrapper' onScroll={this.updateScrollTop}>
        <Header
          ui={this.props.ui}
          url={this.props.url}
        />
          {this.renderRouteComponent()}
        <Footer />
      </div>
    );
  }

  renderRouteComponent() {
    const {url, state} = this.props;
    const rt = getRoute(url);
    const {componentName, props, routeParams, getComponentProps} = rt;
    const Comp = components[componentName];
    if (getComponentProps) {
      return (
        <Comp
          {...getComponentProps(state, rt.routeParams)}
          dispatch={this.props.dispatch}
        />
      );
    }
    return (
      <Comp
        {...props}
        {...routeParams}
        ui={this.props.ui}
      />
    );
  }

  componentWillMount() {
    this.runRouteEffects(this.props.url);
  }

  componentWillUpdate(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.runRouteEffects(nextProps.url);
    }
  }

  runRouteEffects(url) {
    const rt = getRoute(url);
    if (!rt.effects) {
      return;
    }
    const effects = rt.effects(this.props.state, rt.routeParams);
    effects.forEach(effect => this.props.dispatch(effect));
  }

  updateScrollTop(e) {
    const node = findDOMNode(this);
    const scrollDirection = (this.props.ui.scrollTop > node.scrollTop) ? 'up' : 'down';
    this.props.dispatch(setScroll(node.scrollTop, scrollDirection));
  }

}

export default connect(state => ({
  state,
  ui: state.ui,
  url: state.url,
  posts: state.posts
}))(Layout);
