import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Steps
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getJobTypeDetail, getJobTypeDetailByID } from '../../../../services/Admin/JobService/jopTypeDetailService';
import { displayLoadingAction, hideLoadingAction } from '../../../../redux/loadingAction';
import { getJobInfoAction, updateJobInfoAction } from '../../../../redux/Admin/action/JobAction';
import { JOB_ID, JOB_IMG } from '../../../../utils/varsSetting';
import { history } from '../../../../App';
import { getJobSearchAction } from '../../../../redux/Admin/action/jobTypeDetailAction';
import { getJobInfo } from '../../../../services/Admin/JobService/jobService';

const desc = ['Rất tệ', 'Tệ', 'Bình thường', 'Tốt', 'Rất tuyệt vời'];

function EditJobPage(props) {

  let { id } = props.match.params;

  const dispatch = useDispatch();

  const [state, setState] = useState({
    jobArr: [],
    jobDetailArr: []
  });

  const getJobArr = async () => {
    try {
      dispatch(displayLoadingAction);
      let result = await getJobTypeDetail();

      setState({
        ...state,
        jobArr: result.data.content
      });

      dispatch(hideLoadingAction);

    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  }

  const convertSelectJob = () => {
    return state.jobArr.map((jobItem) => {
      return { label: jobItem.tenNhom, value: jobItem.id }
    })
  }

  const handleChangeJob = async (value) => {
    try {
      dispatch(displayLoadingAction);
      let result = await getJobTypeDetailByID(value);

      setState({
        ...state,
        jobDetailArr: result.data.content.dsChiTietLoai
      })

      dispatch(hideLoadingAction);

    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors);
    }
  }

  const convertSelectDetail = () => {
    return state.jobDetailArr.map((detailItem) => {
      return { label: detailItem.tenChiTiet, value: detailItem.id }
    })
  }

  let { jobTypeDetail } = useSelector((state) => {
    return state.JobTypeDetailReducer
  })

  let { jobInfo } = useSelector((state) => {
    return state.JobReducer
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: jobInfo.id,
      tenCongViec: jobInfo.tenCongViec,
      danhGia: jobInfo.danhGia,
      giaTien: jobInfo.giaTien,
      nguoiTao: jobInfo.nguoiTao,
      hinhAnh: jobInfo.hinhAnh,
      moTa: jobInfo.moTa,
      maChiTietLoaiCongViec: jobTypeDetail.id,
      moTaNgan: jobInfo.moTaNgan,
      saoCongViec: jobInfo.saoCongViec
    },
    validationSchema: Yup.object({
      tenCongViec: Yup.string().required('Tên công việc không được để trống !'),
      danhGia: Yup.string().required('Đánh giá không được để trống !'),
      giaTien: Yup.string().required('Giá tiền không được để trống !'),
      nguoiTao: Yup.string().required('Người tạo không được để trống !'),
      moTa: Yup.string().required('Mô tả không được để trống !'),
      moTaNgan: Yup.string().required('Mô tả ngắn không được để trống !'),
      saoCongViec: Yup.number().min(1, 'Số sao thấp nhất là 1 !')
    })
    , onSubmit: (values) => {
      dispatch(updateJobInfoAction(jobInfo.id, values));
    }
  })

  const handleChangeJobDetail = (value) => {
    formik.setFieldValue('maChiTietLoaiCongViec', value);
  }

  const handleChangeRate = (value) => {
    formik.setFieldValue('saoCongViec', value)
  }

  let { saoCongViec } = formik.values;

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const getJobTypeValue = () => {
    return async (dispatch) => {
      try {
        let result = await getJobInfo(id);
        dispatch(getJobSearchAction(result.data.content.maChiTietLoaiCongViec))
      } catch (errors) {
        console.log(errors)
      }
    }
  }

  const paramIsMatch = () => {
    if (id != jobInfo.id) {
      history.push('/error')
    }
  }

  const updateImgOrNot = () => {
    localStorage.setItem(JOB_ID, jobInfo.id);
    localStorage.setItem(JOB_IMG, jobInfo.hinhAnh);
    history.push(`/admin/list-job/add/upload-image`);
  }

  useEffect(() => {
    getJobArr();
    dispatch(getJobInfoAction(id));
    dispatch(getJobTypeValue());
    paramIsMatch()
  }, []);

  return (
    <div className='container mx-auto'>
      <h4 className='text-info my-3'><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin'>Dashboard</NavLink> / <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin/list-job'>Quản lý công việc / </NavLink>Cập nhật công việc</h4>

      <Steps
        className='w-50 mx-auto my-4'
        size="small"
        current={0}
        items={[
          {
            title: 'Thông tin công việc',
          },
          {
            title: 'Upload hình ảnh',
          }
        ]}
      />

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
          <InputNumber disabled name='id' value={formik.values.id} />
        </Form.Item>

        <Form.Item label="Tên công việc">
          <Input name='tenCongViec' onChange={formik.handleChange} value={formik.values.tenCongViec} onBlur={formik.handleBlur} />
          {formik.touched.tenCongViec && formik.errors.tenCongViec ? <span className='alert alert-danger d-block mt-2'>{formik.errors.tenCongViec}</span> : null}
        </Form.Item>

        <Form.Item label="Đánh giá">
          <Input className='w-25' type='number' min={1} name='danhGia' onChange={formik.handleChange} value={formik.values.danhGia} onBlur={formik.handleBlur} />
          {formik.touched.danhGia && formik.errors.danhGia ? <span className='w-50 alert alert-danger d-block mt-2'>{formik.errors.danhGia}</span> : null}
        </Form.Item>

        <Form.Item label="Giá tiền">
          <Input className='w-25' type='number' name='giaTien' min={1} onChange={formik.handleChange} value={formik.values.giaTien} onBlur={formik.handleBlur} />
          {formik.touched.giaTien && formik.errors.giaTien ? <span className='w-50 alert alert-danger d-block mt-2'>{formik.errors.giaTien}</span> : null}
        </Form.Item>

        <Form.Item label="Người tạo">
          <Input className='w-25' type='number' name='nguoiTao' min={1} onChange={formik.handleChange} value={formik.values.nguoiTao} onBlur={formik.handleBlur} />
          {formik.touched.nguoiTao && formik.errors.nguoiTao ? <span className='w-50 alert alert-danger d-block mt-2'>{formik.errors.nguoiTao}</span> : null}
        </Form.Item>

        <Form.Item label="Tên hình ảnh">
          <Input disabled name='hinhAnh' onChange={formik.handleChange} value={formik.values.hinhAnh} />
        </Form.Item>

        <Form.Item label="Mô tả">
          <TextArea name='moTa' onChange={formik.handleChange} value={formik.values.moTa} onBlur={formik.handleBlur} />
          {formik.touched.moTa && formik.errors.moTa ? <span className='alert alert-danger d-block mt-2'>{formik.errors.moTa}</span> : null}
        </Form.Item>

        <Form.Item label="Nhóm công việc">
          <Select options={convertSelectJob()} onChange={handleChangeJob} placeholder="Chọn nhóm công việc" />
        </Form.Item>

        <Form.Item label="Chi tiết loại công việc">
          <Select options={convertSelectDetail()} name='maChiTietLoaiCongViec' onChange={handleChangeJobDetail} id={formik.values.maChiTietLoaiCongViec} placeholder={jobTypeDetail.tenChiTiet} />
        </Form.Item>

        <Form.Item label="Mô tả ngắn">
          <TextArea name='moTaNgan' onChange={formik.handleChange} value={formik.values.moTaNgan} onBlur={formik.handleBlur} />
          {formik.touched.moTaNgan && formik.errors.moTaNgan ? <span className='alert alert-danger d-block mt-2'>{formik.errors.moTaNgan}</span> : null}
        </Form.Item>

        <Form.Item label="Số sao">
          <Rate name='saoCongViec' tooltips={desc} onChange={handleChangeRate} value={formik.values.saoCongViec} onBlur={formik.handleBlur} />
          {saoCongViec ? <span className="ant-rate-text">{desc[saoCongViec - 1]}</span> : ''}
          {formik.touched.saoCongViec && formik.errors.saoCongViec ? <span className='w-50 alert alert-danger d-block mt-2'>{formik.errors.saoCongViec}</span> : null}
        </Form.Item>

        <Form.Item label="Hành động">
          <button onClick={() => {
            if (window.confirm(`Bạn có muốn cập nhật hình ảnh ?`)) {
              updateImgOrNot();
            }
          }} type='submit' className='btn btn-success mr-3'>Xác nhận thông tin</button>
          <button onClick={() => {
            updateImgOrNot();
          }} type='button' className='btn btn-info'>Cập nhật hình ảnh</button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditJobPage