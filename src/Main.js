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
          select: '',
        },
        {
          title: 'Ready',
          tasks: [],
          select: '',
        },
        {
          title: 'In progress',
          tasks: [],
          select: '',
        },
        {
          title: 'Finished',
          tasks: [],
          select: '',
        },
      ],
    }
  }
  handleAddTask = (index, task) => {
    const tasks = this.state.tasks
    tasks.push(task)
    this.setState = {
      text: '',
      tasks: task,
    }
  }
  newSelect = (e) => {
    this.setState = {
      select: e.target.value,
    }
  }
  render() {
    return (
      <div className='body__boards'>
        <Board
          title={this.state.boards[0].title}
          tasks={this.state.tasks}
          handleAddTask={this.handleAddTask.bind(this, 0)}
          newSelect={this.newSelect.bind(this, 2)}
        />

        <Board
          title={this.state.boards[1].title}
          tasks={this.state.tasks}
          handleAddTask={this.handleAddTask.bind(this, 1)}
        ></Board>
        <Board
          title={this.state.boards[2].title}
          tasks={this.state.boards[1].tasks}
          handleAddTask={this.handleAddTask.bind(this, 2)}
        />
        <Board
          title={this.state.boards[3].title}
          tasks={this.state.boards[2].tasks}
          handleAddTask={this.handleAddTask.bind(this, 3)}
        />
      </div>
    )
  }
}
