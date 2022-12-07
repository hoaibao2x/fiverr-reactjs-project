import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Space, Steps } from 'antd';
import { NavLink } from 'react-router-dom'
import './style.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { addDetailJobArrAction, confirmAddDetailJobAction } from '../../../../../redux/Admin/action/jobTypeDetailAction';

function AddDetailJobArr() {

  let dispatch = useDispatch();

  let { jobTypeDetail } = useSelector((state) => {
    return state.JobTypeDetailReducer
  })



  const onFinish = (values) => {

    // let tempArr = [];

    // values.names.forEach(element => {
    //   let obj = {};
    //   obj[`tenChiTiet`] = element;
    //   tempArr.push(obj)
    // });

    let action = {
      type: 'ADD_DETAIL_JOB_ARR',
      detailJobArr: values.names
    }
    dispatch(action);
  };

  return (
    <div className='container mx-auto my-3'>
      <h4 className='text-info my-3'><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin'>Dashboard</NavLink> / <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin/list-detail-job-type'>Quản lý chi tiết loại công việc / </NavLink>Thêm mới chi tiết loại công việc</h4>

      <Steps
        className='w-75 mx-auto my-4'
        size="small"
        current={1}
        items={[
          {
            title: 'Thêm nhóm chi tiết loại',
          },
          {
            title: 'Thêm danh sách chi tiết',
          },
          {
            title: 'Upload hình nhóm loại công việc'
          }
        ]}
      />

      <Form name="dynamic_form_item" className='w-50 mx-auto' onFinish={onFinish}>
        <Form.List
          name="names"
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: 'flex',
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, 'id']}
                  >
                    <InputNumber placeholder="ID" type='number' min={1}/>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'tenChiTiet']}
                  >
                    <Input placeholder="Tên chi tiết" allowClear/>
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button className='w-75' type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <button className='btn btn-success'>Xác nhận danh sách chi tiết</button>
          <button onClick={() => {
            dispatch(confirmAddDetailJobAction(jobTypeDetail.id, jobTypeDetail))
          }} className='btn btn-info' type='button'>Đẩy thông tin</button>
        </Form.Item>
      </Form>


    </div>
  )
}

export default AddDetailJobArr