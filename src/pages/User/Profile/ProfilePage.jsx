import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import { getInfoByIDAction, updateUserInfoAction } from '../../../redux/User/action/getInfoAndUpdateAction';
import { USER_ID } from '../../../utils/varsSetting';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.css';
import { DatePicker } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import { Input, Tag } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';

function ProfilePage(props) {

    let { id } = props.match.params;

    let dispatch = useDispatch();

    let [form, disFormOrNot] = useState(true);

    const [imgSrc, setImgSrc] = useState();

    let [birthday, changeBirthdayOrNot] = useState(false);

    let { userInfo, userSkillArr, userCertArr } = useSelector((state) => {
        return state.UserReducer;
    });

    const infoIsMatch = () => {
        if (id !== localStorage.getItem(USER_ID)) {
            history.push('/error');
        }
    }

    const getUserInfo = () => {
        dispatch(getInfoByIDAction(localStorage.getItem(USER_ID)));
    }

    // Skill Tag Ant Design Config
    const [skill_tags, setSkillTags] = useState(userSkillArr);
    const [inputSkillVisible, setInputSkillVisible] = useState(false);
    const [inputSkillValue, setInputSkillValue] = useState("");
    const inputSkillRef = useRef(null);
    useEffect(() => {
        if (inputSkillVisible) {
            inputSkillRef.current?.focus();
        }
    }, []);
    const handleSkillClose = (removedTag) => {
        const newTags = skill_tags.filter((tag) => tag !== removedTag);
        setSkillTags(newTags);
    };
    const showSkillInput = () => {
        setInputSkillVisible(true);
    };
    const handleSkillInputChange = (e) => {
        if (e.target.value !== ' ') {
            setInputSkillValue(e.target.value);
        }
    };
    const handleSkillInputConfirm = () => {
        if (inputSkillValue && skill_tags.indexOf(inputSkillValue) === -1) {
            setSkillTags([...skill_tags, inputSkillValue]);
        }
        setInputSkillVisible(false);
        setInputSkillValue("");
    };
    const forSkillMap = (tag) => {
        const tagSkillElem = (
            <Tag
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
                className="achievement__tag"
                closable
                onClose={(e) => {
                    e.preventDefault();
                    handleSkillClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span
                key={tag}
                style={{
                    display: "inline-block",
                }}
            >
                {tagSkillElem}
            </span>
        );
    };
    const tagSkillChild = skill_tags.map(forSkillMap);

    // Cert Tag Ant Design Config
    const [cert_tags, setCertTags] = useState(userCertArr);
    const [inputCertVisible, setInputCertVisible] = useState(false);
    const [inputCertValue, setInputCertValue] = useState("");
    const inputCertRef = useRef(null);
    useEffect(() => {
        if (inputCertVisible) {
            inputCertRef.current?.focus();
        }
    }, []);
    const handleCertClose = (removedTag) => {
        const newTags = cert_tags.filter((tag) => tag !== removedTag);
        setCertTags(newTags);
    };
    const showCertInput = () => {
        setInputCertVisible(true);
    };
    const handleCertInputChange = (e) => {
        if (e.target.value !== ' ') {
            setInputCertValue(e.target.value);
        }
    };
    const handleCertInputConfirm = () => {
        if (inputCertValue && cert_tags.indexOf(inputCertValue) === -1) {
            setCertTags([...cert_tags, inputCertValue]);
        }
        setInputCertVisible(false);
        setInputCertValue("");
    };
    const forCertMap = (tag) => {
        const tagCertElem = (
            <Tag
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
                className="achievement__tag"
                closable
                onClose={(e) => {
                    e.preventDefault();
                    handleCertClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span
                key={tag}
                style={{
                    display: "inline-block",
                }}
            >
                {tagCertElem}
            </span>
        );
    };
    const tagCertChild = cert_tags.map(forCertMap);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: userInfo.name,
            email: userInfo.email,
            phone: userInfo.phone,
            birthday: userInfo.birthday,
            gender: userInfo.gender,
            skill: skill_tags,
            certification: cert_tags
        },
        validationSchema: Yup.object({

        }),
        onSubmit: (values) => {
            dispatch(updateUserInfoAction(userInfo.id, values));
        }
    });

    const handleChangeDatePicker = (value) => {
        let dateFormat = moment(value).format('DD/MM/YYYY');
        formik.setFieldValue('birthday', dateFormat);
    }

    const renderSkillTags = () => {
        return skill_tags.map((skillItem, index) => {
            return <span className='achievement__tag d-inline-block' key={index}>{skillItem}</span>
        })
    }

    const renderCertTags = () => {
        return cert_tags.map((certItem, index) => {
            return <span className='achievement__tag d-inline-block' key={index}>{certItem}</span>
        })
    }

    // const handleChangeFile = (e) => {
    //     let file = 
    // }

    useEffect(() => {
        infoIsMatch();
        getUserInfo();
        renderSkillTags();
    }, []);

    useEffect(() => {
        setSkillTags(userSkillArr)
    }, [userSkillArr]);

    useEffect(() => {
        setCertTags(userCertArr)
    }, [userCertArr]);

    return (
        <>
            <div className='profile__content'>
                <div className="container mx-auto py-5 ">
                    <div className="row">
                        <div className="col-md-4 content__left">
                            {/* Avatar Card */}
                            <div className="card">
                                <img src={imgSrc} className="card__avatar card-img-top " alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{userInfo.name}</h5>
                                    {form ? <>
                                        <button onClick={() => {
                                            disFormOrNot(!form);
                                        }} className='btn btn-info' type='button'>Edit Info</button>
                                    </> : <>
                                        <button onClick={() => {
                                            disFormOrNot(!form);
                                        }} className='btn btn-danger' type='button'>Cancel Edit</button>
                                    </>}
                                    <hr />
                                    <div className="card__des">
                                        <div className="des__top">
                                            <div className="top__left">
                                                <i className="fa-solid fa-location-dot"></i> <span>From</span>
                                            </div>
                                            <div className="top__right">
                                                <span>VietNam</span>
                                            </div>
                                        </div>
                                        <div className="des__bottom">
                                            <div className="bottom__left">
                                                <i className="fa-regular fa-calendar-days" /> <span>Member since</span>
                                            </div>
                                            <div className="bottom__right">
                                                <span>2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Skill Card */}
                            <div className="card mt-3">
                                <div className="card-body">
                                    {form ? <>
                                        <h5 className="card-title">Skill:</h5>
                                        <hr />
                                        {renderSkillTags()}
                                    </> : <>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h5 className="card-title">Skill:</h5>
                                            {!inputSkillVisible && (
                                                <Tag onClick={showSkillInput} className="site-tag-plus skill-tag">
                                                    <i className="fa-solid fa-plus"></i>
                                                </Tag>
                                            )}
                                        </div>
                                        <hr />
                                        <div
                                            style={{
                                                marginBottom: 16,
                                            }}
                                        >
                                            <TweenOneGroup
                                                enter={{
                                                    scale: 0.8,
                                                    opacity: 0,
                                                    type: 'from',
                                                    duration: 100,
                                                }}
                                                onEnd={(e) => {
                                                    if (e.type === 'appear' || e.type === 'enter') {
                                                        e.target.style = 'display: inline-block';
                                                    }
                                                }}
                                                leave={{
                                                    opacity: 0,
                                                    width: 0,
                                                    scale: 0,
                                                    duration: 200,
                                                }}
                                                appear={false}
                                            >
                                                {tagSkillChild}
                                            </TweenOneGroup>
                                        </div>
                                        {inputSkillVisible && (
                                            <Input
                                                className='form-control'
                                                ref={inputSkillRef}
                                                type="text"
                                                value={inputSkillValue}
                                                onChange={handleSkillInputChange}
                                                onBlur={handleSkillInputConfirm}
                                                onPressEnter={handleSkillInputConfirm}
                                                placeholder="Add new your skill"
                                            />
                                        )}

                                    </>}
                                </div>
                            </div>
                            {/* Cert Card */}
                            <div className="card mt-3">
                                <div className="card-body">
                                    {form ? <>
                                        <h5 className="card-title">Cert:</h5>
                                        <hr />
                                        {renderCertTags()}
                                    </> : <>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h5 className="card-title">Cert:</h5>
                                            {!inputCertVisible && (
                                                <Tag onClick={showCertInput} className="site-tag-plus">
                                                    <i className="fa-solid fa-plus"></i>
                                                </Tag>
                                            )}
                                        </div>
                                        <hr />
                                        <div
                                            style={{
                                                marginBottom: 16,
                                            }}
                                        >
                                            <TweenOneGroup
                                                enter={{
                                                    scale: 0.8,
                                                    opacity: 0,
                                                    type: 'from',
                                                    duration: 100,
                                                }}
                                                onEnd={(e) => {
                                                    if (e.type === 'appear' || e.type === 'enter') {
                                                        e.target.style = 'display: inline-block';
                                                    }
                                                }}
                                                leave={{
                                                    opacity: 0,
                                                    width: 0,
                                                    scale: 0,
                                                    duration: 200,
                                                }}
                                                appear={false}
                                            >
                                                {tagCertChild}
                                            </TweenOneGroup>
                                        </div>
                                        {inputCertVisible && (
                                            <Input
                                                className='form-control'
                                                ref={inputCertRef}
                                                type="text"
                                                value={inputCertValue}
                                                onChange={handleCertInputChange}
                                                onBlur={handleCertInputConfirm}
                                                onPressEnter={handleCertInputConfirm}
                                                placeholder="Add new your cert"
                                            />
                                        )}

                                    </>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div>
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-info-tab" data-toggle="pill" data-target="#pills-info" type="button" role="tab">
                                            My Info
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-rent-job-tab" data-toggle="pill" data-target="#pills-rent" type="button" role="tab">
                                            Book Jobs
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-info" role="tabpanel">
                                        <form onSubmitCapture={formik.handleSubmit}>
                                            <fieldset disabled={form ? true : false}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="name">Name:</label>
                                                            <input id='name' name='name' className='form-control' type="text" defaultValue={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="emailInput">Email:</label>
                                                            <input id='emailInput' name='email' className='form-control' type="text" defaultValue={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="phone">Phone:</label>
                                                            <input className='form-control' type="text" name="phone" id="phone" defaultValue={formik.values.phone} onChange={formik.handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="">Birthday:</label>
                                                            {form ? <>
                                                                <h5 style={{ cursor: 'pointer' }}>{formik.values.birthday}</h5>
                                                            </> : <>
                                                                <div className="d-flex justify-content-between">
                                                                    {birthday === false ? <>
                                                                        <h5 onClick={() => {
                                                                            changeBirthdayOrNot(!birthday);
                                                                        }} style={{ cursor: 'pointer' }}>{formik.values.birthday}</h5>
                                                                        <i className="fa-regular fa-circle-question" data-toggle="tooltip" data-placement="bottom" title="Click birthday value if you want to change it !" style={{ fontSize: '22px', color: '#ffcc00' }}></i>
                                                                    </> : null}
                                                                </div>
                                                            </>}
                                                            {!form && birthday === true ? <>
                                                                <DatePicker onChange={handleChangeDatePicker} className='form-control' format={'DD/MM/YYYY'} />
                                                                <button onClick={() => {
                                                                    changeBirthdayOrNot(!birthday)
                                                                }} className='btn btn-danger mt-2' type='button'>Cancel</button>
                                                            </> : null}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className='form-group'>
                                                            <label htmlFor="myGender">Gender:</label>
                                                            {form ? <>
                                                                <select className="form-control" id="myGender" name='gender' value={formik.values.gender}>
                                                                    <option value="true">Male</option>
                                                                    <option value="false">Female</option>
                                                                </select>
                                                            </> : <>
                                                                <select className="form-control" id="myGender" name='gender' onChange={formik.handleChange}>
                                                                    <option value='true' selected={formik.values.gender ? true : false}>Male</option>
                                                                    <option value='false' selected={!formik.values.gender ? true : false}>Female</option>
                                                                </select>
                                                            </>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="file" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {!form ? <>
                                                    <div className="col-md-6 p-0">
                                                        <div className="form-group">
                                                            <button type='submit' className='btn btn-success'>Save changes</button>
                                                        </div>
                                                    </div>
                                                </> : null}
                                            </fieldset>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="pills-rent" role="tabpanel">...</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage