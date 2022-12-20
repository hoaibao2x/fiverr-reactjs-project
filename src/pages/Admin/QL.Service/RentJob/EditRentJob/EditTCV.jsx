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
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import moment from 'moment';
import { getTCVAction, putTCVAction, ThemCongViecAction } from '../../../../../redux/Admin/action/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const EditTCV = (props) => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  }
  const { thongtinTCV } = useSelector(state => state.QLNDreducer)
  // console.log(thongtinTCV)
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getTCVAction(id))
  }, [])
  const formik = useFormik({
    enableReinitialize : true,
    initialValues: {
      
      id: thongtinTCV.id,
      maCongViec: thongtinTCV.maCongViec,
      maNguoiThue: thongtinTCV.maNguoiThue,
      ngayThue: thongtinTCV.ngayThue,
      hoanThanh: thongtinTCV.hoanThanh,
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(putTCVAction(thongtinTCV.id,values))
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
          to='/admin/list-rent-job'>Lịch Sữ Thuê Công Việc / </NavLink>Chỉnh sửa thông tin</h4>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Mã Thuê Công Việc">
        <Input name='maCongViec'  onChange={formik.handleChange} value={formik.values.maCongViec} onBlur={formik.handleBlur}/>
      </Form.Item>
      <Form.Item label="Mã Người Thuê Công Việc" >
        <Input name='maNguoiThue' onChange={formik.handleChange} value={formik.values.maNguoiThue} onBlur={formik.handleBlur}/>
      </Form.Item>
      <Form.Item label="Ngay Thuê Công Việc">
        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDAYTCV} value={moment(formik.values.ngayThue)}/>
      </Form.Item>

      <Form.Item label="Tình Trạng Công Việc:" valuePropName="checked">

        chưa hoàn thành <Switch onChange={handleChangTCV('hoanThanh')}checked={formik.values.hoanThanh} /> đã hoàn thành
      </Form.Item>
      <Form.Item label="tác vụ">
        <button type='submit' className='btn btn-success'>Xác nhận thông tin</button>
      </Form.Item>
    </Form>
  );
};
export default EditTCV
