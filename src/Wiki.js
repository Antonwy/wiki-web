import Axios from "axios";

const mainParams = {
    format: "json",
    origin: "*",
}

class Wiki {
    url = 'https://en.wikipedia.org/w/api.php'

    constructor(searchParam) {
        this.searchParam = searchParam;
    }

    getArticle = () => {
        return new Promise((resolve, reject) => {
            Axios.get(this.url, {
                params: {
                    ...mainParams,
                    action: "query",
                    prop: "extracts",
                    redirects: true,
                    exintro: true,
                    titles: this.searchParam,
                }
            })
            .then(res => {
                try {
                    let {pages} = res.data.query;
                    const article = pages[Object.keys(pages)[0]]
                    this.pageid = article.pageid;
                    this.title = article.title;
                    resolve(article)
                } catch (error) {
                    console.log(error)
                }
            })
            .catch(e => {
                reject(e)
            })
        })
    }

    getImageSource = () => {
        return new Promise((resolve, reject) => {
            Axios.get(this.url, {
                params: {
                    ...mainParams,
                    action: "query",
                    titles: this.title,
                    prop: "pageimages",
                    pithumbsize: 2000,
                }
    
            }).then(res => {
                var source = "";
                let {pages} = res.data.query;
                if(typeof(pages[this.pageid]) == "undefined") {
                    source = ""
                }else {
                    if ("thumbnail" in pages[this.pageid]) {
                        let thumbnail = pages[this.pageid].thumbnail
                        source = thumbnail.source;   
                    }else {
                        source = "";
                    }
                }
                resolve(source);
            })
        })
    }

    getFullArticle = () => {
        return new Promise((resolve, reject) => {
            this.getArticle().then(article => {
                this.article = article;
                this.getImageSource().then(source => {
                    this.source = source;
                    resolve({
                        title: this.article.title,
                        desc: this.article.extract,
                        pageid: this.article.pageid,
                        source: this.source
                    })
                })
            })
        })
    }

    getArticleList = () => {
        return new Promise((resolve, reject) => {
            Axios.get(this.url, {
                params: {
                    ...mainParams,
                    action: "opensearch",
                    search: this.searchParam
                }
            })
            .then(res => {
                const {data} = res;
                const finalArray = [];
                for (let i = 0; i < res.data[1].length; i++) {
                    finalArray.push({
                        name: data[1][i],
                        desc: data[2][i],
                        link: data[3][i]
                    })
                }
                resolve(finalArray)
            })
            .catch(e => {
                reject(e);
            })
        })
    }
}

export default Wiki;