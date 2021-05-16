import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import { Timeline, Typography } from 'antd';
import { FaCheckCircle, FaFileCode, FaGraduationCap } from 'react-icons/fa';
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
      title: "Top 25 teams in Versionbeta, MANIT, Bhopal",
      text: "",
      trailingIcon: null
    },
    {
      icon: <FaCheckCircle style={{ color: '#1DB954', fontSize: '1rem' }} />,
      title: "Runners up at gdg hackfest",
      text: "Close second in my first ever hackathon",
      trailingIcon: null
    }
  ],
  "e-2017": [
    {
      icon: <FaFileCode style={{ color: '#1DB954', fontSize: '1rem' }} />,
      title: "Started Programming",
      text: "Introduction to programming with C-- Hello World!",
      trailingIcon: null
    }
  ],
  "f-2016": [
    {
      icon: <FaCheckCircle style={{ color: '#1DB954', fontSize: '1rem' }} />,
      title: "Got into College of Engineering and Technology, Bhubaneswar",
      text: "",
      trailingIcon: null
    },
    {
      icon: <FaCheckCircle style={{ color: '#1DB954', fontSize: '1rem' }} />,
      title: "Cracked JEE Mains",
      text: "",
      trailingIcon: null
    }
  ],
  "g-1997": [
    {
      icon: <GiBabyBottle style={{ color: '#1DB954',  fontSize: '1.2rem' }} />,
      title: "Born",
      text: "Dec 28, 1997",
      trailingIcon: null
    }
  ],
}

const About = ({ data, location }) => {
  const [displayableEvents, setDisplayableEvents] = useState({});
  const handleShowMore = () => {
    let obj = {};
    const currIndex = Object.keys(displayableEvents).length;
    Object.keys(events).map((key, idx) => {
      if (idx < currIndex+2) {
        obj[key] = events[key];
      } else return;
    });
    setDisplayableEvents(obj);
  }
  useEffect(() => {
    let obj = {};
    // 4 keys into the obj
    Object.keys(events).map((key, idx) => {
      if (idx < 3) {
        obj[key] = events[key];
      } else return;
    });
    setDisplayableEvents(obj);
  }, []);
  const { siteMetadata } = data.site;
  return (
    <>
      <Layout location={location} title={siteMetadata.title}>
        <Title style={{
          fontSize: '2.8rem',
          fontWeight: '700',
          padding: 0,
          margin: 0,
          color: '#082b38'
        }}>
          About Me
        </Title>
        <Paragraph style={{ margin: 0, marginBottom: '5vh', fontSize: '1.2rem' }}>
          Hi, I am Aquib Baig, I am 23 years old and currently work as an associate software
          engineer at Redhat. I have worked on plenty of programming languages but
          prefer Javascript and Golang.
          Apart from programming, I play soccer whenever I get the time. 
          I also listen to music quite a lot, you can find some of my most
          played tracks on the Dashboard.
        </Paragraph>
        <Title style={{
          fontSize: '2.8rem',
          fontWeight: '700',
          padding: 0,
          margin: 0,
          color: '#082b38'
        }}>
          Timeline
        </Title>
        {Object.keys(displayableEvents).map(year => (
          <div key={year} style={{ marginTop: '2vh' }}>
            <Title style={{ fontSize: '2rem', fontWeight: '600', fontFamily: 'Calibre' }}>
              {year.split('-')[1]}
            </Title>
            {events[year].map(event => {
              return (
                <div key={event.title}>
                  <Timeline key={event.title} style={{ paddingLeft: '2vw' }}>
                    <Timeline.Item dot={event.icon} style={{ margin: 0, padding: 0 }}>
                      <Title style={{
                        fontSize: '1.4rem',
                        margin: 0,
                        padding: 0,
                        fontWeight: '500'
                      }}>
                        {event.title}
                      </Title>
                      <Paragraph style={{
                        fontSize: '1.2rem',
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
        {
          Object.keys(displayableEvents).length !== Object.keys(events).length && 
          <Paragraph>
            <a className="showMore" onClick={() => handleShowMore()}>Show More</a>
          </Paragraph>
        }
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

export default About;
