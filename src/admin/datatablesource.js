export const userColumns = [
  
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
      field: "fullname",
      headerName: "Họ và tên",
      width: 230,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
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
   
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
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
      width: 300,
    },
    
  ];
  
  export const roomColumns = [
 
    {
      field: "title",
      headerName: "Tiêu đề",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "desc",
      headerName: "Mô tả",
      width: 250,
    },
    {
      field: "price",
      headerName: "Giá",
      width: 100,
    },
    {
      field: "maxPeople",
      headerName: "Số người tối đa",
      width: 150,
    },
  ];
  
  export const bookingColumns= [
    {
      field: "name",
      headerName: "Tên phòng",
      width: 100,
    },
    {
      field: "fullname",
      headerName: "Tên khách hàng",
      width: 100,
    },
    {
      field: "fromDate",
      headerName: "Ngày đặt",
      width: 100,
    },
    {
      field: "toDate",
      headerName: "Ngày hết hạn thuê ",
      width: 100,
    },
    {
      field: "totalDays",
      headerName: "Số ngày thuê",
      width: 100,
    },
    {
      field: "totalPrice",
      headerName: "Tổng thanh toán",
      width: 100,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 300,
    },
  ];