import React from 'react' 
import Header from './Header.js'
import Footer from './Footer.js'
import { getQuestionById } from '../model/question.js'
import { getArticleEditor } from '../utils/assist.js'

/**
 * 问答详情页
 */

class QuestionDetail extends React.Component {
  componentDidMount () {
    document.title = `${this.props.question.question_title} -「ONE · 一个」`
  }

  render () {
    let question = this.props.question
    return (
      <div className="one row">
        <div className="col-md-12">
          <div className="tab-content">
            <div className="one-cuestion">
              <div className="cuestion-q-icono"></div>
              <h4>{question.question_title}</h4>
              <div className="cuestion-contenido">{question.question_content}</div>
              <hr/>
              <div className="cuestion-a-icono"></div>
              <h4>{question.answer_title}</h4>
              <div className="cuestion-contenido" dangerouslySetInnerHTML={{__html: question.answer_content}}/>
              <p className="cuestion-editor">{getArticleEditor(question.charge_edt, question.charge_email)}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default class Question extends React.Component {
  constructor () {
    super()
    this.state = {
      question: null
    }
  }

  componentDidMount () {
   let id = this.props.match.params.id
    getQuestionById(id).then((response) => {
      this.setState({
        question: response.data
      })
    })
  }

  render () {
    let question = this.state.question, questionDetail
    if (question) {
      questionDetail = <QuestionDetail question={question}/>
    } else {
      questionDetail = ''
    }

    return (
      <div>
        <div className="container">
          <Header/>
        </div>
        <div id="main-container" className="container">
          {questionDetail}
          <Footer/>
        </div>
      </div>
    )
  }
}