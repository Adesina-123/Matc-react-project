import {useState} from 'react';
import Activity from './resources/Activity';

export default function MainBoard() {
  const [activityList, setActivityList] = useState([
    {
      id: 0,
      task: 'Drive to the Cinema',
      completed: false,
    },
    {
      id: 1,
      task: 'A movie tonight',
      completed: false,
    },
    {
      id: 2,
      task: 'Take a nap',
      completed: false,
    },
  ]);
  const [value, setValue] = useState('')

  const handleSubmit = e => {
      e.preventDefault()
      if(!value) return
      addTodos(value)
      setValue('')

  }

  const deleteActivity = index => {
    let controlData = [...activityList];
    controlData.splice(index, 1);
    setActivityList(controlData);
  }

  const completeTask = index  => {
    let controlData = [...activityList];
    controlData[index].completed = true;
    setActivityList(controlData);
  }
const addTodos = task => {
    let controlData = [...activityList, {task}];
    setActivityList(controlData)

}
  return (
    <div className="main-board">
      {/** Activity Board */}
      <form className="activity-form" onSubmit={handleSubmit}>
        <input className="form-input" placeholder="Enter Activity" onChange={e => setValue(e.target.value)}/>
        <button type="submit" className="form-button">
          Add
        </button>
      </form>
      {/**  End Activity Form */}

      {/** Activity List */}
      <h3 className="activity-list-title">
        My Activities{' '}
        <small className="task-count">(3 of 3 Tasks completed)</small>
      </h3>
      {activityList.map((item, index) => {
        return (
          <div key={index}>
            <Activity
              activity={item}
              completeTask={completeTask}
              deleteActivity={deleteActivity}
              addTodos ={addTodos}
            />
          </div>
        );
      })}
    </div>
  );
}
