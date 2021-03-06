import React from 'react'
import { graphql } from 'gatsby'
import ProjectList from '../components/project-list';
import Layout from '../layout'
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const projectList = [
  {
    title: 'Bench Routes',
    desc: `Bench-routes is a highly scalable network benchmarking,
      routes performance and monitoring tool,
      that monitors in regular intervals the state of the server,
      running as a daemon process.`,
    link: `https://github.com/zairza-cetb/bench-routes`,
    tags: ['go', 'react', 'scheduling', 'time-series']
  },
  {
    title: 'Literature',
    desc: `Literature is a card game for 4 to 12 players,
    most commonly played with 6 or 8 players in two teams. Connect to up to 6 people in a
    single game, add friends from social media
    play the epic game of literature
    get coins and get fancy items from the store.`,
    link: `https://github.com/aquibbaig/literature`,
    tags: ['flutter/dart', 'node.js', 'socket/sync']
  },
  {
    title: 'Gophertuts',
    desc: `Gophertuts is a series based on golang tutorials to help beginners find
    some interesting topics to refer to. In the world of development, it is pretty
    easy to search for resources once you know what you're looking for but it is
    hard to find out if something exists in the first place. `,
    link: `https://gophertuts.surge.sh/`,
    tags: ['tutorials', 'gatsby/react']
  },
  {
    title: 'Quiz Generator',
    desc: `Automated question generator using NLP. Just put in an input paragraph from
    your favorite story and the application will generate a set of questions for you to
    test your comprehensive skills. We built this to help people taking entrance examinations
    to test their reading and comprehension skills.`,
    link: `https://github.com/ganeshpatro321/quizGenerator`,
    tags: ['ml/nlp', 'react', 'summarisation']
  },
];

export default ({ data, location }) => {
  const { siteMetadata } = data.site;
  return (
    <div className="projects">
      <Layout location={location} title={siteMetadata.title}>
        <Title style={{
          fontSize: '2.8rem',
          fontWeight: '700',
          padding: 0,
          margin: 0,
          color: '#082b38'
        }}>
          Projects
        </Title>
        <Paragraph style={{ margin: 0, marginBottom: '5vh', fontSize: '1.2rem' }}>
          I do hobby projects to learn how systems work and open source in
          my free time. I personally like working with Javascript and Golang, and have experience in
          C++, Java and Php.
        </Paragraph>
        <ProjectList projects={projectList} />
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
