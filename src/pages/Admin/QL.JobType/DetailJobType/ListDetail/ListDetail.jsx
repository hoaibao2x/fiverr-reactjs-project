import React from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getDetailByIDAction, getDetailJobTypeListAction, getJobSearchAction, getJobTypeDetailAction, removeDetailJobGroupAction } from '../../../../../redux/Admin/action/jobTypeDetailAction';
import './style.css'
import { NavLink } from 'react-router-dom';
import Search from 'antd/lib/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import { history } from '../../../../../App';

function ListDetail() {

  let dispatch = useDispatch();

  const { jobTypeDetailArr } = useSelector((state) => {
    return state.JobTypeDetailReducer;
  })

  const getDetailJobTypeList = () => {
    let action = getDetailJobTypeListAction();
    dispatch(action);
  }

  useEffect(() => {
    getDetailJobTypeList();
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 150,
      sorter: (a, b) => {
        let tenA = a.id;
        let tenB = b.id;

        if (tenA > tenB) {
          return 1;
        }
        return -1;
      },
    },
    {
      title: 'Tên nhóm',
      dataIndex: 'tenNhom',
      width: 300,
      sorter: (a, b) => {
        let tenA = a.tenNhom;
        let tenB = b.tenNhom;

        if (tenA > tenB) {
          return 1;
        }
        return -1;
      }
    },
    {
      title: 'Hình ảnh',
      width: 220,
      dataIndex: 'hinhAnh',
      render: (text, object, index) => {
        return <>
          <img src={object.hinhAnh} alt="" width={120} height={100} onError={(e) => {
            e.target.onError = null;
            e.target.src = `https://picsum.photos/id/${index}/100/120`;
          }}
          />
        </>
      }
    },
    {
      title: 'Mã loại công việc',
      dataIndex: 'maLoaiCongviec',
      sorter: (a, b) => {
        let tenA = a.maLoaiCongviec;
        let tenB = b.maLoaiCongviec;

        if (tenA > tenB) {
          return 1;
        }
        return -1;
      }
    },
    {
      title: 'Hành động',
      render: (text, object) => {
        return <>
          <button onClick={() => {
            localStorage.setItem('job_type_id', object.maLoaiCongviec);

            localStorage.setItem('job_group_id', object.id);

            localStorage.setItem('job_detail_arr', JSON.stringify(object.dsChiTietLoai));

            history.push(`/admin/list-detail-job-type/edit-job-group/${object.id}`)
          }} key={1} className="btn btn-info mr-2"><i className="fa-solid fa-pen-to-square"></i></button>
          <button onClick={() => {
            if (window.confirm(`Bạn có muốn xóa nhóm công việc có id là ${object.id}`)) {
              dispatch(removeDetailJobGroupAction(object.id));
            }
          }} key={2} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
        </>
      }
    }
  ];

  const data = jobTypeDetailArr;

  const onSearch = (value) => {
    if (value !== '') {
      dispatch(getJobSearchAction(value));
    }
    getDetailJobTypeList();
  };

  return (
    <div className='container mx-auto my-3'>

      <h4 className="text-info"><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin'>Dashboard /</NavLink> Quản lý chi tiết loại công việc</h4>

      <button onClick={() => {
        history.push('/admin/list-detail-job-type/add')
      }} className="btn btn-success my-3"><i className="fa-solid fa-plus"></i> Thêm chi tiết loại công việc</button>

      <Search className='mb-5' placeholder="Nhập ID nhóm loại công việc cần tìm kiếm" onSearch={onSearch} enterButton={<SearchOutlined />} size="large" />

      <Table id='detailJobTypeTable' rowKey={'id'} columns={columns} dataSource={data} />
    </div>
  )
}

export default ListDetail