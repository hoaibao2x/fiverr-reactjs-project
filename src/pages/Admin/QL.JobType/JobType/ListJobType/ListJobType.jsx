import React, { useEffect } from 'react'
import { Input, Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getJobTypeByIDAction, getListJobTypeAction, removeJobTypeAction } from '../../../../../redux/Admin/action/jobTypeAction';
import './style.css'
import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { history } from '../../../../../App';

const { Search } = Input;

function ListJobType() {

  let dispatch = useDispatch();

  let { jobTypeArr } = useSelector((state) => {
    return state.JobTypeReducer
  })

  const getListJobType = () => {
    return dispatch(getListJobTypeAction())
  }

  useEffect(() => {
    getListJobType();
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => {

        let tenA = a.id;
        let tenB = b.id;

        if (tenA > tenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Tên loại công việc',
      dataIndex: 'tenLoaiCongViec',
      sorter: (a, b) => {

        let tenA = a.tenLoaiCongViec;
        let tenB = b.tenLoaiCongViec;

        if (tenA > tenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Hành động',
      render: (text, jobType) => {
        return <>
          <button onClick={() => {

            localStorage.setItem('Job_Type_ID', JSON.stringify(jobType.id));
            history.push(`/admin/list-job-type/edit-job-type/${jobType.id}`);

          }} className="btn btn-info mr-2">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => {
            if (window.confirm(`Bạn có muốn xóa loại công việc có ID là ${jobType.id}`)) {
              dispatch(removeJobTypeAction(jobType.id));
            }
          }} className="btn btn-danger">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </>
      }
    }
  ];

  const data = jobTypeArr;

  const onSearch = (value) => {
    if (value !== '') {
      dispatch(getJobTypeByIDAction(value));
    }
    getListJobType()
  };

  return (
    <div className="container mx-auto my-3">
      <h4 className="text-info"><NavLink className='myNavLink' to='/admin'>Dashboard /</NavLink> <span className='myNavLink'>Quản lý loại công việc</span> / Loại công việc</h4>

      <button onClick={() => {
        history.push('/admin/list-job-type/add')
      }} className="btn btn-success my-3"><i className="fa-solid fa-plus"></i> Thêm loại công việc</button>

      <Search className='mb-5' placeholder="Nhập ID loại công việc cần tìm" onSearch={onSearch} enterButton={<SearchOutlined />} size="large" />

      <Table id='jobTypeTable' rowKey={'id'} columns={columns} dataSource={data} />
    </div>
  )
}

export default ListJobType