import React, { Component } from 'react';
import { Select, Form, Input, Button } from 'antd';
import onboardlogo from '@images/thecarecloud.png';

const { Option } = Select;

class SecurityQuestion extends Component {
    
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
      <div className="onboard">
        <div className="on_board_header">
            <div className="logo">
                <img src={onboardlogo} alt="" />
            </div>
        </div>
        <div className="on_board_body">
            <div className="onboard_container">
                <h2>Set Security Question and Answer</h2>
                <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item
                    label="Secret Question"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    >
                    {getFieldDecorator('question', {
                        //rules: [{ required: true, message: 'Please select your gender!' }],
                    })(
                        <Select
                        placeholder="Select a option and change input text above"
                        onChange={this.handleSelectChange}
                        >
                        <Option value="1">What is the first and last name of your best friend?</Option>
                        <Option value="2">What was your favorite place to visit as a child?</Option>
                        <Option value="3">Who is your favorite actor, musician, or artist?</Option>
                        <Option value="4">What is the name of your favorite pet?</Option>
                        <Option value="5">In what city were you born?</Option>
                        <Option value="6">What high school did you attend?</Option>
                        <Option value="7">What is the name of your first school?</Option>
                        <Option value="8">What is your mother's maiden name?</Option>
                        <Option value="9">What was the make of your first car?</Option>
                        <Option value="10">When is your anniversary?</Option>
                        </Select>
                    )}
                    </Form.Item>
                    <Form.Item
                    label="Answer"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    >
                    {getFieldDecorator('answer', {
                        //rules: [{ required: true, message: 'Please Enter your Answer!' }],
                    })(
                        <Input />
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
    )
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(SecurityQuestion);

export default WrappedHorizontalLoginForm;
