import React from 'react'
import './style.css'
import { Button, Checkbox, Form, Input, Space } from 'antd';

function RegisterPage() {

    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <div className='register__content' >
            <div className="content__form container w-50 my-5">
                <Form
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

                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage