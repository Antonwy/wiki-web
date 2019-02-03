import React, { Component } from 'react'
import SearchField from '../Components/SearchField';
import Wiki from '../Wiki';
import {withRouter} from 'react-router-dom'
import '../Style/App.css';

import posed from 'react-pose';
import ListItem from '../Components/ListItem';

const ListContainer = posed.div({
    visible: {staggerChildren: 100},
    hidden: {},
})

class HomePage extends Component {

    state = {
        searchInput: "",
        fetchedData: false,
        articleList: [],
        animateChildren: false,
        focused: false
    }

    componentDidMount() {
        this.setState({
            logoVisible: true
        })
    }

    submitInput = (e) => {
        e.preventDefault();
        this.setState({animateChildren: false})
        const {searchInput} = this.state;
        const wiki = new Wiki(searchInput);
        wiki.getArticleList(searchInput)
            .then(res => {
                this.setState({
                    logoVisible: false,
                    articleList: res
                })
                setTimeout(() => {
                    this.setState({animateChildren: true})
                },500)
            })
    }
    
    handleChange = (txt) => {
        this.setState({searchInput: txt.target.value})
    }

    handleChangeFocus = (f) => () => {
        this.setState({focused: f})
    }

  render() {
    const {articleList, animateChildren, focused, searchInput} = this.state;
    return (
      <div className="homePage">
        <SearchField value={searchInput} top={animateChildren} focused={focused} handleChangeFocus={this.handleChangeFocus} submitInput={this.submitInput} handleChange={this.handleChange} />
        {/* <AnimLogo pose={logoVisible ? "visible" : "hidden"} alt="logo" src={Logo} /> */}
        <ListContainer pose={animateChildren && focused ? "visible" : "hidden"} className="searchResults">
            {
                articleList.map((item, i) => 
                    <ListItem item={item} className="itemContainer" key={i}>
                        <h2>{item.name}</h2>
                        <p>{item.desc}</p>
                    </ListItem>
                )
            }
        </ListContainer>
      </div>
    )
  }
}


export default withRouter(HomePage);