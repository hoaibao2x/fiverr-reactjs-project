import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { JOB_ID, JOB_IMG } from '../../../../utils/varsSetting';
import { uploadJobImgAction } from '../../../../redux/Admin/action/JobAction';
import { history } from '../../../../App';
import { useFormik } from 'formik';
import { Steps } from 'antd'

function UploadImageJob() {

    const dispatch = useDispatch();

    let { jobInfo } = useSelector((state) => {
        return state.JobReducer
    }) 

    const [imgSrc, setImgSrc] = useState(() => {
        if (localStorage.getItem(JOB_IMG)) {
            return localStorage.getItem(JOB_IMG)
        }
    });

    const youAddOrEdit = () => {
        if (jobInfo !== undefined) {
            return true;
        }
        return false;
    }

    const backPreviusPage = () => {
        history.push(`/admin/list-job/edit-job/${localStorage.getItem(JOB_ID)}`)
    }

    const formik = useFormik({
        initialValues: {
            hinhAnh: null
        }, onSubmit: (values) => {

            let formData = new FormData();
            formData.append('formFile', values.hinhAnh, values.hinhAnh.name);

            dispatch(uploadJobImgAction(localStorage.getItem(JOB_ID), formData));
        }
    })

    const handleChangeFile = async (e) => {
        let file = e.target.files[0];

        if (file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/jpeg') {

            await formik.setFieldValue('hinhAnh', file);

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result);
            }
        }
    }

    useEffect(() => {
        youAddOrEdit();
    }, [])

    return (
        <div className='container mx-auto my-5'>
            <h4 className='text-info my-3'><NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin'>Dashboard</NavLink> / <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin/list-job'>Quản lý công việc / </NavLink> {youAddOrEdit === true ? <>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/admin/list-job/add'>Thêm mới công việc /</NavLink>
            </>
                : <span onClick={backPreviusPage} className='text-dark' style={{ cursor: 'pointer' }}>Cập nhật công việc /</span>}  Upload ảnh công việc</h4>

            <Steps
                className='w-50 mx-auto my-4'
                size="small"
                current={1}
                items={[
                    {
                        title: 'Thông tin công việc',
                    },
                    {
                        title: 'Upload hình ảnh',
                    }
                ]}
            />

            <form onSubmitCapture={formik.handleSubmit}>
                <div className="form-group">
                    <input type="file" onChange={handleChangeFile} accept='image/jpg,image/png,image/jpeg' />
                    <br />
                    <img className='mt-5' style={{ width: 250, height: 180 }} src={imgSrc} alt="..." />
                    <br />
                    {formik.values.hinhAnh === null ? <button onClick={() => {
                        history.push('/admin/list-job')
                    }} type='button' className='btn btn-success mt-5'>Trở về trang chủ</button>
                        : <button type='submit' className='btn btn-info mt-5'>Cập nhật hình ảnh</button>}
                </div>
            </form>
        </div>
    )
}

export default UploadImageJob