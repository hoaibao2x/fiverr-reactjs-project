import React from 'react'
import { Table, Input, Button } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { binhLuan } from '../../../../../services/Admin/UserService/UserService';
import { BinhLuanAction, xoaBLAction } from '../../../../../redux/Admin/action/UserAction';
import { NavLink } from 'react-router-dom';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { history } from '../../../../../App';


const { Search } = Input;

function ListComment() {
    let dispatch = useDispatch();
    let {arrBL} =  useSelector((state) => state.QLNDreducer);
    useEffect(() => {
      binhLuan();
      }, []);
      const binhLuan = () => {
        let action = BinhLuanAction();
        dispatch(action);
      };

      	
      // "id": 331,
      // "maCongViec": 6,
      // "maNguoiBinhLuan": 1581,
      // "ngayBinhLuan": "17/11/2022",
      // "noiDung": "duong1",
      // "saoBinhLuan": 5
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
      dataIndex: 'maNguoiBinhLuan',
    //   width:'5%'
    },
    {
      title: 'ngày thuê',
      dataIndex: 'ngayBinhLuan',
    //   width:'7%'
      // sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      // sortDirections: ['descend','ascend'],
    },
    {
      title: 'nội dung bình luận',
      dataIndex: 'noiDung',
    },
    {
      title: 'đánh giá bình luận',
      dataIndex: 'saoBinhLuan',
    },

    {
      title: "Chỉnh Sửa",
      dataIndex: "id",
      render: (text, users) => {  
        return <>
          <NavLink key={1} className="" to={`/admin/list-comment/${users.id}`}><EditOutlined /> </NavLink>
          <span style={{cursor:'pointer'}} key={2} className="" onClick={() => {
            if (window.confirm("bạn có chắt muốn xoá dữ liệu của ID : " + users.id)) {
              dispatch(xoaBLAction(users.id));
            }
          }}><DeleteOutlined /></span>
        </>
      }
    }
  ];

  const data = arrBL;

  const onSearch = value => {
    // console.log(value)
    // dispatch(searchUserAction(value))


  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className=" mx-auto my-3">
      <h4 className="text-info"><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin'>Dashboard /</NavLink>Lịch Sữ Bình Luận</h4>

      <button onClick={() => {
        history.push('/admin/list-comment/add')
      }} className="btn btn-success my-3"><i className="fa-solid fa-plus"></i> Thêm Bình Luận</button>

      <Search className='mb-5' placeholder="input search text" onSearch={onSearch} enterButton={<SearchOutlined />} size="large" />

      <Table rowKey={'id'} columns={columns} dataSource={data} />
    </div>
  );
}

export default ListComment
