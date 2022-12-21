import React from 'react'
import { Table, Input, Button } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listThueCongViec } from '../../../../../services/Admin/UserService/UserService';
import { listThueCongViecAction, searchTCVAction, xoaTCVAction } from '../../../../../redux/Admin/action/UserAction';
import { NavLink } from 'react-router-dom';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { history } from '../../../../../App';


const { Search } = Input;

function ListTCV() {
  let dispatch = useDispatch();
  let { arrTCV } = useSelector((state) => state.QLNDreducer);
  useEffect(() => {
    listThueCongViec();
  }, []);
  const listThueCongViec = () => {
    let action = listThueCongViecAction();
    dispatch(action);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      //   width:'3%',
    },
    {
      title: 'Mã Công Việc',
      dataIndex: 'maCongViec',
      defaultSortOrder: 'descend',
      //   width:'5%'  
    },
    {
      title: 'Mã Người Thuê',
      dataIndex: 'maNguoiThue',
      //   width:'5%'
    },
    {
      title: 'ngày thuê',
      dataIndex: 'ngayThue',
      //   width:'7%'
      // sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      // sortDirections: ['descend','ascend'],
    },
    {
      title: 'hoàng thành',
      dataIndex: 'hoanThanh',
    },
    {
      title: "Chỉnh Sửa",
      dataIndex: "id",
      render: (text, users) => {
        return <>
          <NavLink key={1} className="" to={`/admin/list-rent-job/edit/${users.id}`}><EditOutlined /> </NavLink>
          <span style={{ cursor: 'pointer' }} key={2} className="" onClick={() => {
            if (window.confirm("bạn có chắt muốn xoá dữ liệu của ID : " + users.id)) {
              dispatch(xoaTCVAction(users.id));
            }
          }}><DeleteOutlined /></span>
        </>
      }
    }
  ];

  const data = arrTCV;

  const onSearch = (value) => {
    if (value !== '') {
      dispatch(searchTCVAction(value));
    }
    listThueCongViec()
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className=" mx-auto my-3">
      <h4 className="text-info"><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin'>Dashboard /</NavLink>Lịch Sữ Thuê Công Việc</h4>

      <button onClick={() => {
        history.push('/admin/list-rent-job/add')
      }} className="btn btn-success my-3"><i className="fa-solid fa-plus"></i> Thêm người thuê</button>

      <Search className='mb-5' placeholder="nhập mã ID" onSearch={onSearch} enterButton={<SearchOutlined />} size="large" />

      <Table rowKey={'id'} columns={columns} dataSource={data} />
    </div>
  );
}

export default ListTCV
