
import { DataGrid } from '@mui/x-data-grid';
import useFetch from "../../hook/useFetch";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { bookingColumns } from '../../datatablesource';


const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`api/booking/${path2}`);

console.log(path2)

  const actionColumn = [
    {
      field: "action",
      headerName: "Hoạt động",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`booking/${path2}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Xem</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(bookingColumns)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
