import React, { useEffect, useRef, useState } from "react"
import './style.css'
import { Button, Checkbox, Col, Form, Input, Row, Select, Space, Switch, Tag } from 'antd';
import { useFormik } from 'formik';
import { PlusOutlined } from "@ant-design/icons";
import { TweenOneGroup } from "rc-tween-one";

function RegisterPage() {

    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const [showHideSkills1, setShowHideSkills1] = useState(false);
    const [showHideSkills2, setShowHideSkills2] = useState(false);
    const [showHideSkills3, setShowHideSkills3] = useState(false);
    const [showHideSkills4, setShowHideSkills4] = useState(false);
    const [showHideSkills5, setShowHideSkills5] = useState(false);

    // Tag Component
    const [tags, setTags] = useState([]);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, []);
    const handleClose = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
    };
    const showInput = () => {
        setInputVisible(true);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue("");
    };
    const forMap = (tag) => {
        const tagElem = (
            <Tag
                closable
                onClose={(e) => {
                    e.preventDefault();
                    handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span
                key={tag}
                style={{
                    display: "inline-block"
                }}
            >
                {tagElem}
            </span>
        );
    };
    const tagChild = tags.map(forMap);

    const formik = useFormik({
        initialValues: {
            gender: true,
            skills_1: [],
            skills_2: [],
            skills_3: [],
            skills_4: [],
            skills_5: [],
            skill: []
        }, onSubmit: (values) => {
            let { skill, skills_1, skills_2, skills_3, skills_4, skills_5 } = formik.values;

            skill = skills_1.concat(skills_2, skills_3, skills_4, skills_5)

            return console.log(skill)
        }
    })

    return (
        <div className='register__content' >
            <div className="content__form container w-50 my-5">
                <h3 className='text-center'>Form đăng ký</h3>
                <Form
                    onSubmitCapture={formik.handleSubmit}
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Họ tên"
                        name="name"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                    >
                        <Space direction="horizontal">
                            <Input.Password
                                visibilityToggle={{
                                    visible: passwordVisible,
                                    onVisibleChange: setPasswordVisible,
                                }}
                            />
                        </Space>
                    </Form.Item>

                    <Form.Item
                        label="Xác nhận mật khẩu"
                        name="confirmPass"
                    >
                        <Space direction="horizontal">
                            <Input.Password
                                visibilityToggle={{
                                    visible: passwordVisible,
                                    onVisibleChange: setPasswordVisible,
                                }}
                            />
                            <Button
                                style={{
                                    width: 80,
                                }}
                                onClick={() => setPasswordVisible((prevState) => !prevState)}
                            >
                                {passwordVisible ? 'Hide' : 'Show'}
                            </Button>
                        </Space>
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Giới tính"
                    >
                        <Select
                            name="gender"
                            onChange={(value) => {
                                return formik.setFieldValue('gender', value)
                            }}
                            placeholder="Giới tính"
                            style={{
                                width: 120,
                            }}
                            options={[
                                {
                                    value: true,
                                    label: 'Nam',
                                },
                                {
                                    value: false,
                                    label: 'Nữ',
                                }
                            ]}
                        />
                    </Form.Item>

                    <Form.Item label="Skills group">
                        <Switch
                            className='mr-3 mt-2' unCheckedChildren="Graphics & Design" checkedChildren="Graphics & Design"
                            onChange={setShowHideSkills1}
                        />
                        <Switch
                            className='mr-3 mt-2' unCheckedChildren="Digital Marketing" checkedChildren="Digital Marketing"
                            onChange={setShowHideSkills2}

                        />
                        <Switch
                            className='mr-3 mt-2' unCheckedChildren="Writing & Translation"
                            checkedChildren="Writing & Translation"
                            onChange={setShowHideSkills3}
                        />
                        <Switch
                            className='mr-3 mt-2' unCheckedChildren="Video & Animation" checkedChildren="Video & Animation"
                            onChange={setShowHideSkills4}
                        />
                        <Switch
                            className='mt-2'
                            unCheckedChildren="Music & Audio" checkedChildren="Music & Audio"
                            onChange={setShowHideSkills5}
                        />
                    </Form.Item>

                    {/* Graphics & Design Skills */}
                    {showHideSkills1 ? <>
                        <Form.Item name="skills_1" label="Graphics & Design">
                            <Checkbox.Group name="skills_1" onChange={(value) => {
                                return formik.setFieldValue('skills_1', value)
                            }}>
                                <Row>
                                    <Col span={24}>
                                        <Checkbox
                                            value="Influencer Marketing"
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Influencer Marketing
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox
                                            value="Brand Style Guides"
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Brand Style Guides
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox
                                            value="Social Media Marketing"
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Social Media Marketing
                                        </Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>
                    </> : null}

                    {/* Digital Marketing Skills */}
                    {showHideSkills2 ? <>
                        <Form.Item name="skills_2" label="Digital Marketing">
                            <Checkbox.Group name="skills_2" onChange={(value) => {
                                return formik.setFieldValue('skills_2', value)
                            }}>
                                <Row>
                                    <Col span={24}>
                                        <Checkbox
                                            value="Social Media Advertising"
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Social Media Advertising
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox
                                            value="Search Engine Marketing (SEM)"
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Search Engine Marketing (SEM)
                                        </Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>
                    </> : null}

                    {/* Writing & Translation */}
                    {showHideSkills3 ? <>
                        <Form.Item name="skills_3" label="Digital Marketing">
                            <Checkbox.Group name="skills_3" onChange={(value) => {
                                return formik.setFieldValue('skills_3', value)
                            }}>
                                <Row>
                                    <Col span={24}>
                                        <Checkbox
                                            value="Articles & Blog Posts"
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Articles & Blog Posts
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox
                                            value="Proofreading & Editing"
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Proofreading & Editing
                                        </Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>
                    </> : null}

                    {/* Video & Animation */}
                    {showHideSkills4 ? <>
                        <Form.Item name="skills_4" label="Digital Marketing">
                            <Checkbox.Group name="skills_4" onChange={(value) => {
                                return formik.setFieldValue('skills_4', value)
                            }}>
                                <Row>
                                    <Col span={24}>
                                        <Checkbox
                                            value="Short Video Ads"
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Short Video Ads
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox
                                            value="Social Media Videos"
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Social Media Videos
                                        </Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>
                    </> : null}

                    {/* Music & Audio */}
                    {showHideSkills5 ? <>
                        <Form.Item name="skills_5" label="Digital Marketing">
                            <Checkbox.Group name="skills_5" onChange={(value) => {
                                return formik.setFieldValue('skills_5', value)
                            }}>
                                <Row>
                                    <Col span={24}>
                                        <Checkbox
                                            value="Producers & Composers"
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Producers & Composers
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox
                                            value="Songwriters"
                                            style={{
                                                lineHeight: '32px',
                                            }}
                                        >
                                            Songwriters
                                        </Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>
                    </> : null}

                    <Form.Item label="Chứng nhận">
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
                                {tagChild}
                            </TweenOneGroup>
                        </div>
                        {inputVisible && (
                            <Input
                                ref={inputRef}
                                type="text"
                                size="small"
                                style={{
                                    width: 78,
                                }}
                                value={inputValue}
                                onChange={handleInputChange}
                                onBlur={handleInputConfirm}
                                onPressEnter={handleInputConfirm}
                            />
                        )}
                        {!inputVisible && (
                            <Tag onClick={showInput} className="site-tag-plus">
                                <PlusOutlined /> Thêm chứng nhận
                            </Tag>
                        )}
                    </Form.Item>

                    <Form.Item
                        label="Hành động"
                    >
                        <Button type="secondary mr-3" htmlType="submit">
                            Đăng ký
                        </Button>
                        <Button type="primary" htmlType="button">
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage