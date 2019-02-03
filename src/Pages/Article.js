import React from 'react'
import '../Style/Article.css'
import {withRouter} from 'react-router-dom';
import Wiki from '../Wiki';
import posed from 'react-pose';

const Container = posed.div({
    visible: {staggerChildren: 250},
    hidden: {}
})

const ArticleTextContainer = posed.div({
    visible: {staggerChildren: 250},
    hidden: {}
})

const Header = posed.h1({
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: -100}
})

const Para = posed.p({
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: -100}
})

const Image = posed.div({
    visible: {x: 0},
    hidden: {x: "110%"}
})

const BigHeader = posed.h1({
    visible: {opacity: 1, y: 0, scale: 1},
    hidden: {opacity: 0, y: -100, scale: .5}
})

class Article extends React.Component {
    
    state = {
        article: {
            title: "",
            desc: "",
            source: undefined
        },
        animate: false
    }

    componentDidMount() {
        let wiki = new Wiki(this.props.match.params.search)
        wiki.getFullArticle().then(article => {
            this.setState({
                article: {
                    ...article
                },
            }, () => {
                this.setState({animate: true})
            })
        })
    }

    render() {
        const {article, animate} = this.state;
        console.log(article)
        return (
            <Container pose={animate ? "visible" : "hidden"} className="article">
                <BigHeader className="bigTitle">{article.title}</BigHeader>
                <ArticleTextContainer className="articleTxt">
                    <Header>{article.title}</Header>
                    <Para dangerouslySetInnerHTML={{__html: article.desc}}></Para> 
                </ArticleTextContainer>
                <Image className="articleImg" style={{backgroundImage: `url(${article.source})`}}></Image>
            </Container>
        )
    }
}   

export default withRouter(Article)
