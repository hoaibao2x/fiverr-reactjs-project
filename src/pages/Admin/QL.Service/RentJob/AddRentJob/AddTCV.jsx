import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import moment from 'moment';
import { ThemCongViecAction } from '../../../../../redux/Admin/action/UserAction';
import { useDispatch } from 'react-redux';
const AddTCV = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  }

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: 0,
      maCongViec: "",
      maNguoiThue: "",
      ngayThue: "",
      hoanThanh: true,
    },
    validationSchema: Yup.object({
      maCongViec: Yup.string().required(' mã công việc không được để trống !'),
      maNguoiThue: Yup.string().required(' mã người thuê không được để trống !'),
      ngayThue: Yup.string().required('Thời gian không được để trống !').length(10, 'Thời gian không được để trống !'),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(ThemCongViecAction(values));
    },
  })

  const handleChangeDAYTCV = (value) => {
    let ngaysinh = moment(value).format('DD/MM/YYYY');
    formik.setFieldValue('ngayThue', ngaysinh)

  }

  const handleChangTCV = (name) => {
    return (value) => {
      formik.setFieldValue(name, value)
    }
  }


  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >

      <h4 className='text-info my-3'><NavLink style={{ textDecoration: 'none', color: 'black' }}
        to='/admin'>Dashboard</NavLink> / <NavLink style={{ textDecoration: 'none', color: 'black' }}
          to='/admin/list-rent-job'>Lịch Sữ Thuê Công Việc / </NavLink>Thêm Người Thuê</h4>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Mã Thuê Công Việc" >
        <Input name='maCongViec' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.maCongViec ? (
          <div className='alert alert-danger'>{formik.errors.maCongViec}</div>
        ) : null}

      </Form.Item>
      <Form.Item label="Mã Người Thuê Công Việc" >
        <Input name='maNguoiThue' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.maNguoiThue ? (
          <div className='alert alert-danger'>{formik.errors.maNguoiThue}</div>
        ) : null}
      </Form.Item>
      <Form.Item label="Ngay Thuê Công Việc">
        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDAYTCV} />
        {formik.errors.ngayThue ? (
        <div className='alert alert-danger'>{formik.errors.ngayThue}</div>
      ) : null}
      </Form.Item>
    
      <Form.Item label="Tình Trạng Công Việc:" valuePropName="checked">

        chưa hoàn thành <Switch onChange={handleChangTCV('hoanThanh')} /> đã hoàn thành
      </Form.Item>
      <Form.Item label="tác vụ">
        <button type='submit' className='btn btn-success'>Xác nhận thông tin</button>
      </Form.Item>
    </Form>
  );
};
export default AddTCV
