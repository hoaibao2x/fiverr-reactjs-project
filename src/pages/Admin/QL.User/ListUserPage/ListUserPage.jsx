import { DeleteOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";
import { Table, Input, Button } from "antd";
import useSelection from "antd/lib/table/hooks/useSelection";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { history } from '../../../../App';
import { danhSachUserAction } from '../../../../redux/Admin/action/UserAction';
import { QLNDreducer } from '../../../../redux/Admin/reducer/QLNDReducer';


const { Search } = Input;

function DanhSachUser() {
  let dispatch = useDispatch();

  let { arrUser } = useSelector((state) => state.QLNDreducer);

  useEffect(() => {
    danhSachUser();
  }, []);

  const danhSachUser = () => {
    let action = danhSachUserAction();
    dispatch(action);
  };

  // {
  //   "id": 1459,
  //   "name": "Khánh",
  //   "email": "trongtin2309@gmail.com",
  //   "password": "",
  //   "phone": null,
  //   "birthday": "Invalid date",
  //   "avatar": null,
  //   "gender": false,
  //   "role": "ADMIN",
  //   "skill": null,
  //   "certification": null,
  //   "bookingJob": []
  // },

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width:'3%',
    },
    {
      title: 'Họ Tên',
      dataIndex: 'name',
      defaultSortOrder: 'descend',
      width:'5%'  
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width:'5%'
    },
    {
      title: 'Mật Khẩu',
      dataIndex: 'password',
      width:'7%'
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'phone',
      width:'7%'
    },
    {
      title: 'ngày sinh',
      dataIndex: 'birthday',
      width:'7%'
      // sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      // sortDirections: ['descend','ascend'],
    },
    {
      title: "Hình ảnh",
      dataIndex: "avatar",
      render: (text, user, index) => {
        return (
          <>
            <img
              src={user.avatar}
              alt={user.avatar}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/100/120`;
              }}
            />
          </>
        );
      },
    },
    {
      title: 'giới tính',
      dataIndex: 'gender',
    },
    {
      title: 'phân loại',
      dataIndex: 'role',
    },
    {
      title: 'kỹ năng',
      dataIndex: 'skill',
      width : '5%'
    },
    {
      title: 'chứng nhận',
      dataIndex: 'certification',
    },
    {
      title: 'đặt công việc',
      dataIndex: 'bookingJob',
    },
    {
      title: "Chỉnh Sửa",
      dataIndex: "taiKhoan",
      render: (text, users) => {
        return <>
          <NavLink key={1} className="" to={`/admin/list-user/edituser/${users.taiKhoan}`}><EditOutlined /> </NavLink>
          <span key={2} className="" onClick={() => {
            if (window.confirm("bạn có chắt muốn xoá dữ liệu này" + users.taiKhoan)) {
              // dispatch(xoaUserAction(users.taiKhoan));
            }
          }}><DeleteOutlined /></span>
        </>
      }
    }
  ];

  const data = arrUser;

  const onSearch = value => {
    // console.log(value)
    // dispatch(getUserListAction(value))


  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className=" mx-auto my-3">
      <h4 className="text-info"><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin'>Dashboard /</NavLink> Quản lý người dùng</h4>

      <button onClick={() => {
        history.push('/admin/list-user/add')
      }} className="btn btn-success my-3"><i className="fa-solid fa-plus"></i> Thêm người dùng</button>

      <Search className='mb-5' placeholder="input search text" onSearch={onSearch} enterButton={<SearchOutlined />} size="large" />

      <Table rowKey={'id'} columns={columns} dataSource={data} />
    </div>
  );
}

export default DanhSachUser