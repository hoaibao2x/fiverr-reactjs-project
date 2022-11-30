import React, { useState } from 'react';
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
import { NavLink } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import moment from 'moment';
import { render } from 'react-dom';
const ThemUser = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [img, setImg] = useState('');




  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      avatar: "",
      gender: true,
      role: "",
      skill: [
        ""
      ],
      certification: [
        ""
      ]


    },
    onSubmit: (values) => {
      console.log('value', values)
    }
  })

  const handleChangeBirthday = (value) => {
    let ngaysinh = moment(value).format('DD/MM/YYYY');
    formik.setFieldValue('birthday', ngaysinh)

  }
  const handleChangGender = (name) => {
    return (value) => {
      formik.setFieldValue(name, value)
    }

  }
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/jpg') {
      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        setImg(e.target.result)
      }
      formik.setFieldValue('avatar',file);
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
          to='/admin/list-user'>Quản lý người dùng / </NavLink>Thêm người dùng mới</h4>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {/* {
  "id": 0,
  "name": "string",
  "email": "long@gmail.com",
  "password": "string",
  "phone": "string",
  "birthday": "string",
  "gender": true,
  "role": "string",
  "skill": [
    "string"
  ],
  "certification": [
    "string"
  ]
} */}
      <Form.Item label="họ tên">
        <Input name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      </Form.Item>
      <Form.Item label="email">
        <Input name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      </Form.Item>
      <Form.Item label="password">
        <Input name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      </Form.Item>
      <Form.Item label="ngày sinh">
        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeBirthday} />
      </Form.Item>
      <Form.Item label="hình ảnh">
        <input type="file" name='avatar' onChange={handleChangeFile} accept='image/png,image/jpeg,image/gif,image/jpg' />
        <br />
        <img width={50} height={50} src={img} alt='...' />
      </Form.Item>
      <Form.Item label="giới tính" valuePropName="checked">
        Nữ <Switch onChange={handleChangGender('gender')} /> Nam
      </Form.Item>
      <Form.Item label="phân loại">
        <Input name='role' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      </Form.Item>
      <Form.Item label="kỹ năng">
        <Input name='skill' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      </Form.Item>
      <Form.Item label="chứng nhận">
        <Input name='certification' onChange={formik.handleChange} onBlur={formik.handleBlur} />
      </Form.Item>
      <Form.Item label="tác vụ">
        <button type='submit' className='btn btn-success'>Xác nhận thông tin</button>
      </Form.Item>
    </Form>
  );
};
export default ThemUser;