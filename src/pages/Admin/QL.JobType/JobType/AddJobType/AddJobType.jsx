import React from 'react'
import { Button, Col, Form, Input, InputNumber, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { addJobTypeAction } from '../../../../../redux/Admin/action/jobTypeAction';
import { getListJobAction } from '../../../../../redux/Admin/action/JobAction';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

function AddJobType() {

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const formik = useFormik({
    initialValues: {
      tenLoaiCongViec: ''
    }, validationSchema: Yup.object({
      tenLoaiCongViec: Yup.string().required('Tên loại công việc không được để trống !')
    }), onSubmit: (values) => {
      dispatch(addJobTypeAction(values));
      dispatch(getListJobAction());
    }
  })

  return (
    <div className='container mx-auto'>

      <h4 className="text-info my-3"><NavLink className='myNavLink' to='/admin'>Dashboard /</NavLink> <span className='myNavLink'>Quản lý loại công việc</span> <NavLink className='myNavLink' to='/admin/list-job-type'>/ Loại công việc / </NavLink> Thêm mới loại công việc </h4>

      <Form {...layout} form={form} name="control-hooks" onSubmitCapture={formik.handleSubmit}>

        <Form.Item
          label='Tên loại công việc'>
          <Input name='tenLoaiCongViec' allowClear onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.tenLoaiCongViec && formik.errors.tenLoaiCongViec ? <>
            <div className="alert alert-danger">{formik.errors.tenLoaiCongViec}</div>
          </> : null}
        </Form.Item>

        <Form.Item {...tailLayout}>
          <button className='btn btn-success' type='submit'>Thêm loại công việc</button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddJobType