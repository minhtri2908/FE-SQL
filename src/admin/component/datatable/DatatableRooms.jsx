import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import useFetch from "../../hook/useFetch";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../../../config";


const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const { data, loading, error } = useFetch(`api/${path}`);



  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`api/${path}/${id}`);
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Hoạt động",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Xem</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}  
            >
              Xóa
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Datatable;
