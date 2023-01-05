export const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Tên người dùng",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "country",
      headerName: "Quốc tịch",
      width: 100,
    },
    {
      field: "city",
      headerName: "Thành phố",
      width: 100,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      width: 100,
    },
    {
      field: "isAdmin",
      headerName: "Quản trị viên",
      width: 100,
    },
  ];
  
  export const hotelColumns = [
    { field: "_id", headerName: "ID", width: 60 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "type",
      headerName: "Kiểu",
      width: 100,
    },
    {
      field: "title",
      headerName: "Tiêu đề",
      width: 100,
    },
    {
      field: "city",
      headerName: "Thành phố",
      width: 100,
    },
    {
      field: "address",
      headerName: "Địa chỉ",
      width: 100,
    },
    {
      field: "rooms",
      headerName: "phòng",
      width: 200,
      renderCell: (params) => {
        return (
          <div> {params.row.rooms} </div>
           
            
        
        );
      },
    },
  ];
  
  export const roomColumns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "title",
      headerName: "Tiêu đề",
      width: 230,
    },
    {
      field: "desc",
      headerName: "Mô tả",
      width: 200,
    },
    {
      field: "price",
      headerName: "Giá",
      width: 100,
    },
    {
      field: "maxPeople",
      headerName: "Số người tối đa",
      width: 100,
    },
  ];
  