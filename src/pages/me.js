import React from 'react';
import Layout from '../layout';
import { Col, Row, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { graphql } from 'gatsby';
import { List } from 'antd';


const { Title, Paragraph } = Typography;

const jsTalks = [
  {
    title: 'Windowing in ReactJS',
    url: 'https://www.youtube.com/watch?v=t4tuhg7b50I',
    author: 'Brian David Vaughn',
    desc: `Speed your React views up by only rendering what the user wants to see.
    This technique (commonly referred to as "windowing") is easy to integrate into existing views
    and can provide huge performance gains.`
  },
  {
    title: 'Deep dive into React Fiber',
    url: 'youtube.com/watch?v=ZCuYPiUIONs',
    author: 'Lin Clark',
    desc: `Introduction to React Fiber, the magic behind the reconciliation algorithm.`
  }
]

const goTalks = [
  {
    title: 'Understanding Channels',
    url: 'https://www.youtube.com/watch?v=KBZlN0izeiY&t',
    author: 'Kavya Joshi',
    desc: `Delve into the inner workings of channels and channel operations,
    including how they're supported by the runtime scheduler and memory management systems.`
  },
]

const Me = ({ data, location }) => {
  const { siteMetadata } = data.site;
  return (
    <Layout location={location} title={siteMetadata.title}>
      <Avatar style={{ textAlign: 'center', marginBottom: '2vh' }} size={64} src="https://avatars.githubusercontent.com/u/26324376?v=4" />
      <Paragraph
        className="paragraph"
        style={{
        fontSize: '1.4rem',
        color: '#595959',
        textAlign: 'left',
        margin: 0,
        padding: 0,
        fontWeight: 300
      }}>
        I am 23 years old, also mentoring at
        <a target="_blank" style={{ marginLeft: '6px' }} className="globalLink" href="https://bench-routes.netlify.app/">
          Bench routes
        </a> in 
        <a target="_blank" style={{ marginLeft: '6px' }} className="globalLink" href="https://summerofcode.withgoogle.com/">
          Google Summer of Code, 2021
        </a>.
        
        I am trying to find my I am currently focusing on the internals of ReactJS such as
        <a target="_blank" style={{ marginLeft: '6px' }} className="globalLink" href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a>,
        <a target="_blank" style={{ marginLeft: '6px' }} className="globalLink" href="https://reactjs.org/docs/codebase-overview.html#fiber-reconciler">Fiber</a>,
        and <a target="_blank" style={{ marginLeft: '6px' }} className="globalLink" href="https://reactjs.org/docs/reconciliation.html">Reconciliation</a>.
      </Paragraph>
      <Title style={{
        fontSize: '1.8rem',
        fontWeight: '600',
        padding: 0,
        margin: '4vh 0 0 0',
        color: '#082b38'
      }}>
        Recommended Talks for ReactJS
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={jsTalks}
        renderItem={item => {
          return (
            <List.Item>
              <List.Item.Meta
                title={<a style={{ fontSize: '1.4rem' }} href={item.url}>{item.title}</a>}
                description={<div style={{ fontSize: '1.2rem' }}>{item.desc}</div>}
              />
            </List.Item>
          )
        }}
      />
      <Title style={{
        fontSize: '1.8rem',
        fontWeight: '600',
        padding: 0,
        margin: '4vh 0 0 0',
        color: '#082b38'
      }}>
        Recommended Talks for Golang
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={goTalks}
        renderItem={item => {
          return (
            <List.Item>
              <List.Item.Meta
                title={<a style={{ fontSize: '1.4rem' }} href={item.url}>{item.title}</a>}
                description={<div style={{ fontSize: '1.2rem' }}>{item.desc}</div>}
              />
            </List.Item>
          )
        }}
      />
    </Layout>
  )
}

export default Me;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        configs {
          countOfInitialPost
        }
      }
    }
  }
`
