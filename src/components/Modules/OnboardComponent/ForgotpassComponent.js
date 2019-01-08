import React, { Component } from 'react';
import { Select, Form, Input, Button } from 'antd';
import onboardlogo from '@images/thecarecloud.png';

const marginRight = {
    marginRight: '15px'
};


class ForgotpassComponent extends Component {
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
      <div>
        <div className="onboard">
          <div className="on_board_header">
            <div className="logo">
                <img src={onboardlogo} alt="" />
            </div>
          </div>
          <div className="on_board_body">
            <div className="onboard_container">
                <h2>First, let's find your account</h2>
                <div>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Item
                    //label="E-mail"
                    >
                    {getFieldDecorator('email', {
                        rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                        required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input placeholder="Enter your email address" />
                    )}
                    </Form.Item>
                    
                    <Form.Item
                    wrapperCol={{ span: 24, offset: 0 }}
                    >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
                </Form>

                
                </div>
            </div>
          </div>
         
      </div>
        
        <footer className="footer">
                &copy; 2018 thecarecloud. All rights reserved. |
                <a href="#">Privacy Policy</a> |
                <a href="#">Terms &amp; Conditions</a>
        </footer>
      </div>
    )
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'forgot_password' })(ForgotpassComponent);

export default WrappedHorizontalLoginForm;