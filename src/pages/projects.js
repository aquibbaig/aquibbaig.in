import React from 'react'
import { graphql } from 'gatsby'
import ProjectList from '../components/project-list';
import Layout from '../layout'
import { rhythm } from '../utils/typography';

export default ({ data, location }) => {
  const { siteMetadata } = data.site;
  const projectList = [
    {
      title: 'Bench routes',
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
      title: 'Quiz generator',
      desc: `Automated question generator using NLP. Just put in an input paragraph from
      your favorite story and the application will generate a set of questions for you to
      test your comprehensive skills. We built this to help people taking entrance examinations
      to test their reading and comprehension skills.`,
      link: `https://github.com/ganeshpatro321/quizGenerator`,
      tags: ['ml/nlp', 'react', 'summarisation']
    },
  ]
  return (
    <>
      <Layout location={location} title={siteMetadata.title}>
        <div style={{ padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`, minHeight: '70vh' }}>
          <p className="header" style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginBottom: '1vh'
          }}>Projects</p>
          <hr style={{ border: '2px solid #ED585B', width: '10%' }} />
          <ProjectList projects={projectList} />
        </div>
      </Layout>
    </>
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
