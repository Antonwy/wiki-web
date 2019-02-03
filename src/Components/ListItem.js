import React, { Component } from 'react'
import posed from 'react-pose'
import {withRouter} from 'react-router-dom'

const Item = posed.div({
    visible: {opacity: 1, y: 0, scale: 1},
    hidden: {opacity: 0, y: 100, transition: {duration: 250}, scale: .5},
    clicked: {
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        position: "fixed",
        top: 0,
        margin: "0px 0px",
        flip: true,
        transition: {
            duration: 250,
            ease: 'easeInOut'
        }
    }
})

const Header = posed.h1({
    visible: {opacity: 1},
    hidden: {opacity: 0},
})

const Para = posed.p({
    visible: {opacity: 1},
    hidden: {opacity: 0},
})

class ListItem extends Component {

    state = {
        clicked: false,
        showTxt: true
    }

    handleClick = () => {
        this.setState({showTxt: false})
        setTimeout(() => {
            this.setState({clicked: true}, () => {
                setTimeout(() => {
                    this.props.history.push(`/articles/${this.props.item.name}`)
                }, 250)
            })
        }, 250)
        //this.props.history.push(`/articles/${name}`)
    }

  render() {
    const {item, className} = this.props;
    const {clicked, showTxt} = this.state;
    return (
      <Item pose={clicked ? "clicked" : ""} onClick={this.handleClick} className={className}>
        <Header pose={showTxt ? "visible" : "hidden"}>{item.name}</Header>
        <Para pose={showTxt ? "visible" : "hidden"}>{item.desc}</Para>
      </Item>
    )
  }
}

export default withRouter(ListItem);