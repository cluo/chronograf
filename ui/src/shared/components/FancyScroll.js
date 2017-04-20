import React, {Component, PropTypes} from 'react'
import {Scrollbars} from 'react-custom-scrollbars'
import classNames from 'classnames'

class FancyScroll extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {isKapacitorTheme, scrollBoxClass, children} = this.props

    return (
      <Scrollbars
        autoHide={true}
        autoHideTimeout={500}
        autoHideDuration={250}
        renderTrackVertical={props => <div {...props} className={classNames("fancy-track-vertical", {"fancy-kapacitor": isKapacitorTheme})}/>}
        renderThumbVertical={props => <div {...props} className={classNames("fancy-thumb-vertical", {"fancy-kapacitor": isKapacitorTheme})}/>}
        renderTrackHorizontal={props => <div {...props} className={classNames("fancy-track-horizontal", {"fancy-kapacitor": isKapacitorTheme})}/>}
        renderThumbHorizontal={props => <div {...props} className={classNames("fancy-thumb-horizontal", {"fancy-kapacitor": isKapacitorTheme})}/>}
        className={scrollBoxClass}
      >
        {children}
      </Scrollbars>
    )
  }
}

const {
  bool,
  node,
  string,
} = PropTypes

FancyScroll.propTypes = {
  isKapacitorTheme: bool,
  scrollBoxClass: string,
  children: node.isRequired,
}

FancyScroll.defaultProps = {
  isKapacitorTheme: false,
  scrollBoxClass: 'fancy-scroll-container',
}

export default FancyScroll