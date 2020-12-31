import React from 'react'
import { graphql } from 'gatsby'
import { Row, Col } from 'antd';
import EmailForm from '../components/email-form';
import ProjectList from '../components/project-list';
import Layout from '../layout'

export default ({ data, location }) => {
  const { siteMetadata } = data.site;
  const projectList = [
    {
      title: 'Bench routes',
      desc: `Bench-routes is a highly scalable network benchmarking,
        routes performance and monitoring tool,
        that monitors in regular intervals the state of the server,
        running as a daemon process.`,
      link: `https://github.com/zairza-cetb/bench-routes`
    },
    {
      title: 'Literature',
      desc: `Literature is a card game for 4 to 12 players,
      most commonly played with 6 or 8 players in two teams. Connect to up to 6 people in a
      single game, add friends from social media
      play the epic game of literature
      get coins and get fancy items from the store.`,
      link: `https://github.com/aquibbaig/literature`
    },
    {
      title: 'Quiz generator',
      desc: `Automated question generator using NLP. Just put in an input paragraph from
      your favorite story and the application will generate a set of questions for you to
      test your comprehensive skills. We built this to help people taking entrance examinations
      to test their reading and comprehension skills.`,
      link: `https://github.com/ganeshpatro321/quizGenerator`
    },
  ]
  return (
    <div className="dark">
      <Layout location={location} title={siteMetadata.title}>
        <div>
          <Row>
            <ProjectList projects={projectList} />
          </Row>
        </div>
        {/* Email */}
        <Row justify="start" style={{ background: 'transparent', position: 'relative', marginTop: '100px' }}>
          <Col xs={24} sm={12}>
            <EmailForm
              className="dark-blue"
              bg="#0039a6"
              textCol="white"
              loading={false}
            />
          </Col>
        </Row>
        {/* Email end */}
      </Layout>
    </div>
  )
}

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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null }, draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200, truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            draft
          }
        }
      }
    }
  }
`
