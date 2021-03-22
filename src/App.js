import React, { Component } from 'react';
import TaskChange from './components/TaskChange'
import Control from './components/Control';
import TaskList from './components/TaskList';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      openTaskChange: false,
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      keyworld: '',
      sortBy: 'name',
      sortValue: 1
    }
  }
  getIdRandom() {
    return Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 7) + Math.random().toString(36).substring(2, 15);
  }
  componentDidMount = () => {
    if (localStorage && localStorage.getItem('tasks')) {
      var taskGetStorage = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: taskGetStorage
      });
    }
  }
  // TOGGGle from add to do 
  toggleFormAU = () => {
    if (this.state.openTaskChange && this.state.taskEditing !== null) {
      this.setState({
        openTaskChange: true,
        taskEditing: null
      })
    }
    else {
      this.setState({
        openTaskChange: !this.state.openTaskChange,
        taskEditing: null
      })
    }
  }
  // Close form 
  onCloseForm = () => {
    this.setState({
      openTaskChange: false
    })
  }
  // showForm
  onShowForm = () => {
    this.setState({
      openTaskChange: true
    })
  }
  // 
  onSubmit = (data) => {
    let { tasks } = this.state;
    if (data.id === '') {
      data.id = this.getIdRandom();
      tasks.push(data);
    } else {
      var index = tasks.findIndex(task => task.id === data.id);
      tasks[index] = data;
    }
    this.setState({
      taskList: tasks,
      taskEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  onChangeStatus = (id) => {
    let { tasks } = this.state;
    let temp = tasks.map(task => {
      if (task.id === id) {
        task.status = !task.status
      }
      return task;
    })
    this.setState({
      tasks: temp
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    // console.log(tasks)
  }
  // Delete
  onDelete = (id) => {
    let { tasks } = this.state;
    let valueDelete = tasks.filter(task => task.id !== id)
    this.setState({
      tasks: valueDelete
    })
    localStorage.setItem('tasks', JSON.stringify(valueDelete));
    this.onCloseForm();
  }
  // Sửa
  onUpdate = (value) => {
    this.onShowForm();
    var { tasks } = this.state;
    var editItem = tasks.find(task => task.id === value);
    this.setState({
      taskEditing: editItem
    })
  }
  // filter
  onFilter = (filterName, filterStatus) => {
    filterStatus = +filterStatus;
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }
  onSearch = (data) => {
    this.setState({
      keyworld: data
    })
  }
  onSorting = (sort) => {
    this.setState({
      sortBy: sort.by,
      sortValue: sort.value
    })
  }

  render() {
    var { tasks, openTaskChange, taskEditing, filter, keyworld, sortBy, sortValue } = this.state;
    // console.log(tasks)
    // console.log(sortBy, sortValue)
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter(task => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        })
      }
      tasks = tasks.filter(task => {
        if (filter.status === -1) return tasks;
        else return task.status === (filter.status === 1 ? true : false);
      })
    }
    if (keyworld) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(keyworld.toLowerCase()) !== -1;
      })
    }
    if (sortBy === 'name') {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sortValue;
        else if (a.name < b.name) return -sortValue;
        else return 0;
      })
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sortValue;
        else if (a.status < b.status) return sortValue;
        else return 0;
      })
    }
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          {/* thêm , update công việc */}
          {openTaskChange === true ?
            <TaskChange
              onSubmit={this.onSubmit}
              reciveOpenTask={this.toggleFormAU}
              taskEdit={taskEditing}
            /> : ''}
          <div className={openTaskChange ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={this.toggleFormAU}>
              <span className="fa fa-plus mr-5" />Thêm công việc
            </button>
            {/* Control task list */}
            <Control
              onSearch={this.onSearch}
              onSorting={this.onSorting}
            />
            {/* task list */}
            <TaskList
              tasklist={tasks}
              receiveChangeStatus={this.onChangeStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
            />
          </div>
        </div>
      </div>

    );
  }
}
export default App;