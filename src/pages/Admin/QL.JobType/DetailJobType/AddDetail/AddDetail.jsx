import { Steps, Select } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Input } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { addDetailJobGroupAction } from '../../../../../redux/Admin/action/jobTypeDetailAction';
import { useState } from 'react';
import { displayLoadingAction, hideLoadingAction } from '../../../../../redux/loadingAction';
import { useEffect } from 'react';
import { getListJobType } from '../../../../../services/Admin/JobService/jobTypeService';

function AddDetail() {

  let dispatch = useDispatch();

  const [state, setState] = useState({
    jobGroupArr: []
  });

  const getJobGroupArr = async () => {
    try {
      dispatch(displayLoadingAction);

      let result = await getListJobType();


      setState({
        ...state,
        jobGroupArr: result.data.content
      })

      dispatch(hideLoadingAction);

    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  }

  const convertSelected = () => {
    return state.jobGroupArr.map((jobItem) => {
      return { label: jobItem.tenLoaiCongViec, value: jobItem.id }
    })
  }

  const handleChange = (value) => {
    formik.setFieldValue('maLoaiCongViec', value)
  };

  const formik = useFormik({
    initialValues: {
      maLoaiCongViec: '',
      tenChiTiet: ''
    },
    validationSchema: Yup.object({
      maLoaiCongViec: Yup.string().required('Mã loại công việc không được để trống !'),
      tenChiTiet: Yup.string().required('Tên chi tiết nhóm không được để trống !')
    }),
    onSubmit: (values) => {
      dispatch(addDetailJobGroupAction(values));
    }
  })

  useEffect(() => {
    getJobGroupArr();
  }, [])

  return (
    <div className='container mx-auto'>
      <h4 className='text-info my-3'><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin'>Dashboard</NavLink> / <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin/list-detail-job-type'>Quản lý chi tiết loại công việc / </NavLink>Thêm mới chi tiết loại công việc</h4>

      <Steps
        className='w-75 mx-auto my-4'
        size="small"
        current={0}
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

      <Form
        onSubmitCapture={formik.handleSubmit}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
      >
        <Form.Item
          label="Loại công việc"
        >
          <Select
            style={{
              width: 185,
            }}
            onChange={handleChange}
            options={convertSelected()}
          />
          {formik.touched.maLoaiCongViec && formik.errors.maLoaiCongViec ? <>
            <div className="alert alert-danger">{formik.errors.maLoaiCongViec}</div>
          </> : null}
        </Form.Item>

        <Form.Item
          label="Tên nhóm loại công việc"
        >
          <Input allowClear name='tenChiTiet' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.tenChiTiet && formik.errors.tenChiTiet ? <>
            <div className="alert alert-danger">{formik.errors.tenChiTiet}</div>
          </> : null}
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <button className='btn btn-success' type='submit'>Thêm nhóm chi tiết loại</button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddDetail