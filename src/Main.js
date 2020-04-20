import React from 'react'
import './Main.css'
import Board from './Board.js'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      text: '',

      boards: [
        {
          title: 'Backlog',
          tasks: [],
          select: false,
          hasSelect: false,
          hasInput: true,
        },
        {
          title: 'Ready',
          tasks: [],
          select: '',
          hasSelect: true,
          hasInput: false,
        },
        {
          title: 'In progress',
          tasks: [],
          select: '',
          hasSelect: true,
          hasInput: false,
        },
        {
          title: 'Finished',
          tasks: [],
          select: '',
          hasSelect: true,
          hasInput: false,
        },
      ],
    }
  }
  handleAddTask = (index, task) => {
    const tasks = this.state.tasks
    tasks.push(task)
    this.setState({
      tasks: tasks,
    })
  }
  tasksActive = () => {
    this.setState({
      text: this.state.tasks.length,
    })
  }

  newSelect = (e) => {
    this.setState({
      select: e.target.value,
    })
  }

  // getPreviousBoardItems(boardIndex) {
  //   if (boardIndex > 0) {
  //     return this.state.boards[boardIndex - 1].items
  //   }
  //   return null
  // }

  render() {
    return (
      <div className='body__boards'>
        <Board
          title={this.state.boards[0].title}
          tasks={this.state.tasks}
          handleAddTask={this.handleAddTask.bind(this, 0)}
          newSelect={this.newSelect.bind(this, 2)}
          hasSelect={this.state.boards[0].hasSelect}
          hasInput={this.state.boards[0].hasInput}
          tasksActive={this.state.tasks.length}
        />

        <Board
          title={this.state.boards[1].title}
          tasks={this.state.tasks}
          handleAddTask={this.handleAddTask.bind(this, 1)}
          hasSelect={this.state.boards[1].hasSelect}
          hasInput={this.state.boards[1].hasInput}
        />
        <Board
          title={this.state.boards[2].title}
          tasks={this.state.boards[1].tasks}
          handleAddTask={this.handleAddTask.bind(this, 2)}
          hasSelect={this.state.boards[2].hasSelect}
          hasInput={this.state.boards[2].hasInput}
        />
        <Board
          title={this.state.boards[3].title}
          tasks={this.state.boards[2].tasks}
          handleAddTask={this.handleAddTask.bind(this, 3)}
          hasSelect={this.state.boards[3].hasSelect}
          hasInput={this.state.boards[3].hasInput}
        />
      </div>
    )
  }
}
