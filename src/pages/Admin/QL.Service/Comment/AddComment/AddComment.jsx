import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import moment from 'moment';
import { postBinhLuanAction, ThemCongViecAction } from '../../../../../redux/Admin/action/UserAction';
import { useDispatch } from 'react-redux';
import TextArea from 'antd/lib/input/TextArea';
const AddComment = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  }

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      // id: 0,
      maCongViec: 0,
      maNguoiBinhLuan: 0,
      ngayBinhLuan: "",
      noiDung: "",
      saoBinhLuan: 3
    },
    onSubmit: (values) => {
        console.log(values);
        dispatch(postBinhLuanAction(values));
    },
   })

   const    handleChangeDAY = (value) => {
    let ngayBinhLuan = moment(value).format('DD/MM/YYYY');
    formik.setFieldValue('ngayBinhLuan', ngayBinhLuan)
  
  }
const desc = ['Rất tệ', 'Tệ', 'Bình thường', 'Tốt', 'Rất tuyệt vời'];
const handleChangeRate = (value) => {
  formik.setFieldValue('saoBinhLuan', value)
}
 let { saoBinhLuan } = formik.values;

  
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
        to='/admin/list-comment'>Lịch Sữ Bình Luận / </NavLink>Thêm Bình Luận</h4>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Mã Thuê Công Việc" onChange={formik.handleChange} onBlur={formik.handleBlur}>
        <Input name='maCongViec' />
      </Form.Item>
      <Form.Item label="Mã Người Bình Luận" onChange={formik.handleChange} onBlur={formik.handleBlur}>
        <Input name='maNguoiBinhLuan' />
      </Form.Item>
      <Form.Item label="Ngay Bình Luận">
      <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDAY} />
    </Form.Item>
    <Form.Item label="Nội Dung Bình Luận">
          <TextArea name='noiDung' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.noiDung && formik.errors.noiDung ? <span className='alert alert-danger d-block mt-2'>{formik.errors.noiDung}</span> : null}
        </Form.Item>
   
      
    <Form.Item label="Số sao">
          <Rate name='saoCongViec' tooltips={desc} onChange={handleChangeRate} value={saoBinhLuan} />
          {saoBinhLuan ? <span className="ant-rate-text">{desc[saoBinhLuan - 1]}</span> : ''}
          {formik.touched.saoBinhLuan && formik.errors.saoBinhLuan ? <span className='w-50 alert alert-danger d-block mt-2'>{formik.errors.saoBinhLuan}</span> : null}
        </Form.Item>
    <Form.Item label="tác vụ">
      <button type='submit' className='btn btn-success'>Xác nhận thông tin</button>
    </Form.Item>
    </Form>
  );
};
export default AddComment
