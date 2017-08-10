import React from 'react' 
import Header from './Header.js'
import Footer from './Footer.js'
import { getEssayById } from '../model/essay.js'
import { getArticleEditor } from '../utils/assist.js'

/**
 * 文章详情页
 */

class ArticleDetail extends React.Component {
  componentDidMount () {
    document.title = `${this.props.article.hp_title} -「ONE · 一个」`
  }

  render () {	
    let article = this.props.article
    return (
      <div className="one row">
        <div className="tab-content">
          <div className="one-articulo">
            <div className="articulo-principal">
              <div className="comilla-abrir">
                <div className="comilla-cerrar">{article.guide_word}</div>
              </div>
            </div>
            <h2 className="articulo-titulo">{article.hp_title}</h2>
            <p>作者/{article.author[0].user_name}</p>
            <div className="articulo-contenido" dangerouslySetInnerHTML={{__html: article.hp_content}}/>
            <p className="articulo-editor">
              {getArticleEditor(article.hp_author_introduce, article.editor_email)}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default class Article extends React.Component {
  constructor () {
    super()
    this.state = {
      article: null
    }
  }

  componentDidMount () {
    let id = this.props.match.params.id
    getEssayById(id).then((response) => {
      this.setState({
        article: response.data
      })
    })
  }

  render () {
    let article = this.state.article, articleDetail
    if (article) {
      articleDetail = <ArticleDetail article={article}/>
    } else {
      articleDetail = ''
    }

    return (
      <div>
        <div className="container">
          <Header/>
        </div>
        <div id="main-container" className="container">
          {articleDetail}
          <Footer/>
        </div>
      </div>
    )
  }
}