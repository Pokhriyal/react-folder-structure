import React, { Component } from 'react';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';
import onboardlogo from '@images/thecarecloud.png';


const { Option } = Select;



class ChangePassword extends Component {
    state = {
    confirmDirty: false
    };

    handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
        console.log('Received values of form: ', values);
        }
    });
    }

    handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('newpassword')) {
        callback('Two passwords that you enter is inconsistent!');
    } else {
        callback();
    }
    }

    validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
    }
    callback();
    }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
    };
    const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 16,
        offset: 8,
        },
    },
    };



    return (
        <div className="onboard">
        <div className="on_board_header">
            <div className="logo">
                <img src={onboardlogo} alt="" />
            </div>
        </div>
        <div className="on_board_body">
            <div className="onboard_container">
                <h2>Change Your Password</h2>
                <div className="termsandconditions_text">
                <Form onSubmit={this.handleSubmit}>

                    <Form.Item
                    {...formItemLayout}
                    label="Password"
                    >
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input type="password" placeholder="Password" />
                    )}
                    </Form.Item>
                    <Form.Item
                    {...formItemLayout}
                    label="New Password"
                    >
                    {getFieldDecorator('newpassword', {
                        rules: [{
                        required: true, message: 'Please input your password!',
                        }, {
                        validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" placeholder="New Password"  />
                    )}
                    </Form.Item>
                    <Form.Item
                    {...formItemLayout}
                    label="Confirm Password"
                    >
                    {getFieldDecorator('confirmpassword', {
                        rules: [{
                        required: true, message: 'Please confirm your password!',
                        }, {
                        validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" placeholder="Confirm Password" onBlur={this.handleConfirmBlur} />
                    )}
                    </Form.Item>
    
                    
                    <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(ChangePassword);
export default WrappedRegistrationForm;
