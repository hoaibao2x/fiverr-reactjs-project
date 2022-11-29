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

  //   "id": 1,
  //   "name": "admin",
  //   "email": "admin@gmail.com",
  //   "password": "",
  //   "phone": null,
  //   "birthday": "0",
  //   "avatar": null,
  //   "gender": true,
  //   "role": "ADMIN",
  //   "skill": [
  //     "string"
  //   ],
  //   "certification": [
  //     "string"
  //   ],
  //   "bookingJob": [
  //     "string"
  //   ]
  // },

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 100,
    },
    {
      title: 'Họ Tên',
      dataIndex: 'name',
      defaultSortOrder: 'descend',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Mật Khẩu',
      dataIndex: 'password',
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'phone',
    },
    {
      title: 'ngày sinh',
      dataIndex: 'birthday',
      // sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      // sortDirections: ['descend','ascend'],
    },
    {
      title: 'hình ảnh',
      dataIndex: 'avatar'
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
    {
      title: 'Role',
      dataIndex: 'role',
    },
    {
      title: 'skill',
      dataIndex: 'skill',
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