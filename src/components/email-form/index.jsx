import React from 'react';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';

export default (props) => {
  const { loading, bg, textCol } = props;
  // const onFinish = values => {

  // };
  return (
    <Card
      hoverable
      loading={loading}
      style={{ backgroundColor: bg, color: textCol, textAlign: 'center' }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      // onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: '!email' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item>
          <Button type="ghost" style={{ color: 'white' }} htmlType="submit" href="mailto:aquibbaig97@gmail.com">
            Send
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
