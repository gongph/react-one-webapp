import React from 'react' 
import { Link } from 'react-router-dom'
import { getQuestions } from '../model/question.js'

/**
 * 右侧问答列表
 */

class FirstQuestion extends React.Component {
  render () {
    return (
      <div className="corriente">
        <p className="one-titulo">{'VOL.' + this.props.vol}</p>
          <p className="one-cuestion-titulo">
            <Link to={'/question/' + this.props.question.question_id}>
              {this.props.question.question_title}
            </Link>
          </p>
      </div>
    )
  }
}

class QuestionItem extends React.Component {
  render () {
    return (
      <li>
        <span className="text-muted">{'VOL.' + this.props.vol} </span>
        <Link to={'/question/' + this.props.question.question_id}>
          {this.props.question.question_title}
        </Link>
      </li>
    )
  }
}

export default class Questions extends React.Component {
  constructor () {
    super()
    this.state = {
      questions: []
    }
  }

  componentDidMount () {
    getQuestions().then((response) => {
      let attr = response.data 
      this.setState({
        questions: attr.slice(0, 7 - attr.length)
      })
    })
  }

  render () {
    let vol = this.props.vol, firstQuestion = [], questionItems = []
    this.state.questions.map((question, index) => {
      if (index == 0) {
        firstQuestion.push(<FirstQuestion question={question} key={question.question_id} vol={vol}/>)
      } else {
        questionItems.push(<QuestionItem question={question} key={question.question_id} vol={vol - index}/>)
      }
    })
    return (
      <div className="fp-one-cuestion">
        <h4>ONE 问题</h4>
        {firstQuestion}
        <ul className="list-unstyled pasado">
          {questionItems}
        </ul>
      </div>
    )
  }
}