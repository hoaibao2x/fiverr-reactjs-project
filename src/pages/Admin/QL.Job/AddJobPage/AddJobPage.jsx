import React, { useState } from 'react'
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

function AddJobPage() {

  const [componentSize, setComponentSize] = useState('default');

  const [value, setValue] = useState(3);

  const formik = useFormik({
    initialValues: {
      id: 0,
      tenCongViec: "",
      danhGia: 0,
      giaTien: 0,
      nguoiTao: 0,
      hinhAnh: {},
      moTa: "",
      maChiTietLoaiCongViec: 0,
      moTaNgan: "",
      saoCongViec: 0
    }, onSubmit: (values) => { 
      return console.log(values);
     }
  })

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className='container mx-auto'>
      <h4 className='text-info my-3'><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin'>Dashboard</NavLink> / <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin/list-job'>Quản lý công việc / </NavLink>Thêm mới công việc</h4>
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
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="ID">
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item label="Tên công việc">
          <Input />
        </Form.Item>

        <Form.Item label="Đánh giá">
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item label="Giá tiền">
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item label="Người tạo">
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input type="file" />
        </Form.Item>

        <Form.Item label="Mô tả">
          <TextArea />
        </Form.Item>

        <Form.Item label="Nhóm công việc">
          <Select>
            <Select.Option value="1">Social</Select.Option>
            <Select.Option value="2">Advertising</Select.Option>
            <Select.Option value="3">Content Writing & Editing</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Chi tiết loại công việc">
          <Select>
            <Select.Option value="4">Social Media Marketing</Select.Option>
            <Select.Option value="5">Search Engine Marketing (SEM)</Select.Option>
            <Select.Option value="6">Articles & Blog Posts</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Mô tả ngắn">
          <TextArea />
        </Form.Item>

        <Form.Item label="Số sao">
          <Rate tooltips={desc} onChange={setValue} value={value} />
          {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </Form.Item>

        <Form.Item label="Hành động">
          <button type='submit' className='btn btn-success'>Thêm công việc</button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddJobPage