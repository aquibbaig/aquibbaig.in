import React, { useState } from 'react';
import { Form, Input, Typography, Button } from 'antd';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import './index.scss';

const { Paragraph } = Typography;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const SubscriberForm = ({ dark }) => {
  const validateForm = email => {
    if (!/\S+@\S+\.\S+/.test(email) || email.trim() === '') {
      return false;
    }
    return true;
  }
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const handleSubmit = async (values) => {
    const { email } = values;
    if (!validateForm(email)) {
      setError('*Please enter a valid email');
      return;
    }
    setError('')
    const response = await addToMailchimp(email);
    const { result, msg } = response;
    if (result === "success") {
      setMsg(msg.split('<')[0]);
      setError('');
    } else {
      setError(msg.split('<')[0]);
      setMsg('');
    }
    setTimeout(() => {
      setError('');
      setMsg('');
    }, 5000)
  }
  return (
    <Form
      style={!dark ? {
        marginTop: '4vh',
        background: '#E0F9ED',
        border: '1px solid rgba(3, 17, 22, 0.4)',
        padding: '24px',
        borderRadius: '4px',
      }: {
        marginTop: '4vh',
        background: '#0f1a2b',
        padding: '24px',
        borderRadius: '4px'
      }}
      {...layout}
      onFinish={handleSubmit}
    >
      <Form.Item label="Like what you see?">
        <Paragraph style={!dark ?
          { margin: 0, padding: 0, fontSize: '1.2rem', color: '#598669' }:
          { margin: 0, padding: 0, fontSize: '1.2rem', color: '#fff' }
        }>
          Get an email each time I publish a blog post on my website by subscribing
          to my Newsletter.
        </Paragraph>
      </Form.Item>
      <Form.Item
        style={{ marginTop: '2vh', marginBottom: 0 }}
        name="email"
      >
        <Input suffix={
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ border: 0 }}>
              Submit
            </Button>
          </Form.Item>
        } />
      </Form.Item>
      {error ? 
        <Paragraph style={{
          fontSize: '1rem',
          color: '#ff8989',
          padding: 0,
          margin: 0
        }}>{error}</Paragraph>: ''}
      {msg ? 
      <Paragraph style={{
        fontSize: '1rem',
        color: '#1db954',
        padding: 0,
        margin: 0
      }}>{msg}</Paragraph>: ''}
    </Form>
  )
}

export default SubscriberForm;
