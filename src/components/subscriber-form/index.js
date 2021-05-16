import React from 'react';
import { Typography } from 'antd';
import './index.scss';

const { Paragraph } = Typography;

const SubscriberForm = ({ dark }) => {
  return (
    // <Form
    //   style={!dark ? {
    //     marginTop: '4vh',
    //     background: '#E0F9ED',
    //     border: '1px solid rgba(3, 17, 22, 0.4)',
    //     padding: '24px',
    //     borderRadius: '4px',
    //   }: {
    //     marginTop: '4vh',
    //     background: '#0f1a2b',
    //     padding: '24px',
    //     borderRadius: '4px'
    //   }}
    //   {...layout}
    //   onFinish={handleSubmit}
    // >
    //   <Form.Item label="Like what you see?">
    //     <Paragraph style={!dark ?
    //       { margin: 0, padding: 0, fontSize: '1.2rem', color: '#598669' }:
    //       { margin: 0, padding: 0, fontSize: '1.2rem', color: '#fff' }
    //     }>
    //       Get an email each time I publish a blog post on my website by subscribing
    //       to my Newsletter.
    //     </Paragraph>
    //   </Form.Item>
    //   <Form.Item
    //     style={{ marginTop: '2vh', marginBottom: 0 }}
    //     name="email"
    //   >
    //     <Input suffix={
    //       <Form.Item>
    //         <Button type="primary" htmlType="submit" style={{ border: 0 }}>
    //           Submit
    //         </Button>
    //       </Form.Item>
    //     } />
    //   </Form.Item>
    //   {error ? 
    //     <Paragraph style={{
    //       fontSize: '1rem',
    //       color: '#ff8989',
    //       padding: 0,
    //       margin: 0
    //     }}>{error}</Paragraph>: ''}
    //   {msg ? 
    //   <Paragraph style={{
    //     fontSize: '1rem',
    //     color: '#1db954',
    //     padding: 0,
    //     margin: 0
    //   }}>{msg}</Paragraph>: ''}
    // </Form>
    <Paragraph
      style={dark ? {
        fontSize: '1.2rem',
        fontWeight: 600,
        marginTop: '5vh',
        padding: 0,
        marginBottom: 0,
        textAlign: 'left',
        background: '#99dbcf',
        color: 'rgb(5,31,40)'
      }: {
        fontSize: '1.2rem',
        fontWeight: 600,
        marginTop: '5vh',
        padding: 0,
        marginBottom: 0,
        textAlign: 'left',
        background: '#E0F9ED'
      }}
    >
      Find out how I created this website
    </Paragraph>
  )
}

export default SubscriberForm;
