import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox,} from 'antd';
import logo from '@images/thecarecloud.png';

class loginComponent extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {

            console.log('Received values of form: ', values);
            }
        });
    }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="public_view login">
                <div className="blue-shade"></div>

                <div className="app-outer-pages">
                    <div className="login_form m-4">
                        <div className="login_logo">
                            <img className="mx-auto d-block" src={logo} alt="" />
                        </div>

                        <div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                        </div>
                    </div>
                    
                    <div className="upcoming_features">
                        <h3>The CareCloud – A Business Intelligence Software Custom-Made for You</h3>
                        <ul className="list-group list-group-flush">
                            <li>
                                <a>
                                    <span>EXPLORE <i className="zmdi zmdi-arrow-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(loginComponent);

export default WrappedNormalLoginForm;
