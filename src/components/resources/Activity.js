export default function Activity({activity, completeTask, deleteActivity}){
    return (
        <div className={`${activity.completed ? "activity-list-item strike-through": "activity-list-item"}`}>
          <h5>{activity.task}</h5>
          <input checked={activity.completed} onChange={(event) => { completeTask(activity.id, event.target.checked)} } className="checkbox" type="checkbox" />
          <i onClick={()=>deleteActivity(activity.id)} className="fas fa-trash-alt trash"></i>
        </div>
    )
}