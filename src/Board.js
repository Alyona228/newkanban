import React from 'react'
import './Board.css'

export default class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      showInput: false,
      newText: '',
    }
  }
  handleClickAdd = () => {
    this.setState({
      showInput: true,
    })
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.props.handleAddTask(e.nativeEvent.target.value)
      this.setState({ text: '' })
      console.log(e)
    }
  }

  newTasks = () => {
    this.setState({
      newText: 'text',
    })
  }
  inputBlur = () => {
    this.setState({
      showInput: false,
    })
  }
  selectTasks = (tasks) => {
    this.setState = {
      tasks: this.props.tasks[1],
    }
  }

  render() {
    return (
      <div className='board'>
        <div className='board-title'>{this.props.title}</div>
        {this.state.showInput ? (
          <input
            className='new-task-input'
            value={this.state.value}
            onClick={this.newTasks}
            onKeyDown={this.handleEnter}
            onBlur={this.inputBlur}
          ></input>
        ) : undefined}

        <ul className='list'>
          {this.props.tasks.map((item, ind) => (
            <li key={ind}>{item}</li>
          ))}
        </ul>
        {this.state.showInput ? (
          <select className='select'>
            {this.props.tasks.map((item, ind) => (
              <option key={ind} onClick={this.props.newSelect}>
                {item}
              </option>
            ))}
          </select>
        ) : undefined}
        <button
          className='buttons__button buttons__button--add'
          onClick={this.handleClickAdd}
        >
          +Add card
        </button>
      </div>
    )
  }
}
