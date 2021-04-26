import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import { Timeline, Typography } from 'antd';
import { FaCheckCircle, FaGraduationCap } from 'react-icons/fa';
import { GiBabyBottle } from 'react-icons/gi';

const { Title, Paragraph } = Typography;

const events = {
  "a-2021": [
    {
      icon: <FaCheckCircle style={{ color: '#1DB954', fontSize: '1rem' }} />,
      title: "GSoC mentor",
      text: "From a student to now-- a mentor in GSoC, bench-routes.",
      trailingIcon: null
    }
  ],
  "b-2020" : [
    {
      icon: <FaCheckCircle style={{ color: '#1DB954', fontSize: '1rem' }} />,
      title: "Graduated",
      text: "After a year long lockdown, finally got my Bachelor's in computer science.",
      trailingIcon: <FaGraduationCap style={{ fontSize: '1.2rem', verticalAlign: 'middle' }} />
    },
    {
      icon: <FaCheckCircle style={{ color: '#1DB954', fontSize: '1rem' }} />,
      title: "Full time at Redhat",
      text: "Full time employee working on UI/UX at distributed-systems-analysis",
      trailingIcon: null
    }
  ],
  "c-2019": [
    {
      icon: <FaCheckCircle style={{ color: '#1DB954', fontSize: '1rem' }} />,
      title: "Internship at Redhat",
      text: "Got a chance to work as a paid intern in UI/UX at distributed-systems-analysis",
      trailingIcon: null
    },
    {
      icon: <FaCheckCircle style={{ color: '#1DB954', fontSize: '1rem' }} />,
      title: "Student at fossi foundation for gsoc",
      text: "My first and successful try at GSoC",
      trailingIcon: null
    },
  ],
  "d-2018": [
    {
      icon: <FaCheckCircle style={{ color: '#1DB954', fontSize: '1rem' }} />,
      title: "Runners up at gdg hackfest",
      text: "Close second in my first ever hackathon",
      trailingIcon: null
    }
  ],
  "e-1997": [
    {
      icon: <GiBabyBottle style={{ color: '#1DB954',  fontSize: '1.2rem' }} />,
      title: "Born",
      text: "Dec 28, 1997",
      trailingIcon: null
    }
  ],
}

export default ({ data, location }) => {
  const { siteMetadata } = data.site;
  return (
    <>
      <Layout location={location} title={siteMetadata.title}>
        <Title style={{
          fontSize: '2.8rem',
          fontWeight: '800',
          padding: 0,
          margin: 0,
        }}>
          About
        </Title>
        <Paragraph style={{ margin: 0, marginBottom: '5vh', fontSize: '1.2rem' }}>
          I'm Aquib Baig. If you have arrived here, I would like
          to tell you more about myself.
          I am a full stack web developer. 
          I like to play video games, write code and create
          awesome applications. I plug in my headphones at work, keeps my distraction
          free and focused.
        </Paragraph>
        <Title style={{
          fontSize: '2.8rem',
          fontWeight: '800',
          padding: 0,
          margin: 0,
        }}>
          Timeline
        </Title>
        {Object.keys(events).map(year => (
          <div key={year} style={{ marginTop: '2vh' }}>
            <Title style={{ fontSize: '2rem', fontWeight: '600', fontFamily: 'Calibre' }}>
              {year.split('-')[1]}
            </Title>
            {events[year].map(event => {
              return (
                <div key={event.title}>
                  <Timeline key={event.title} style={{ paddingLeft: '2vw' }}>
                    <Timeline.Item dot={event.icon} style={{ margin: 0, padding: 0 }}>
                      <Paragraph style={{
                        fontSize: '1.2rem',
                        margin: 0,
                        padding: 0,
                        fontWeight: '500'
                      }}>
                        {event.title}
                      </Paragraph>
                      <Paragraph style={{
                        fontSize: '1rem',
                        margin: 0,
                        padding: 0
                      }}>
                        {event.text} {event.trailingIcon}
                      </Paragraph>
                    </Timeline.Item>
                  </Timeline>
                  {/* <hr style={{ height: '1px', width: '90%' }} /> */}
                </div>
              )
            })}
          </div>
        ))}
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
