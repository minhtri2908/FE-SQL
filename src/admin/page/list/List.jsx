import "./list.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import  Datatable  from "../../component/datatable/Datatable"

const List = ({columns}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List
