import React from 'react'
import { graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import * as Lang from '../constants'
import Layout from '../layout/index'

import PDF from '../../content/assets/Resume.pdf'

export default ({ data, location }) => {
  const resumes = data.allMarkdownRemark.edges
  const metaData = data.site.siteMetadata
  const { title } = metaData

  const resume = resumes
    .filter(({ node }) => node.frontmatter.lang === Lang.ENGLISH)
    .map(({ node }) => node)[0]

  return (
    <Layout location="/about" title={title}>
      <div style={{ padding: '24px', minHeight: '70vh' }}>
        <p className="header" style={{
          fontSize: '1.6rem',
          fontWeight: 'bold',
          marginBottom: '1vh'
        }}>A page in the diary</p>
        <hr style={{ border: '2px solid #ED585B', width: '10%' }} />
        <p style={{ fontStyle: 'italic' }}>
          6 March, 2021
        </p>
        <p>
          I am a full stack developer from Odisha, India. I have my degree as a computer
          science engineer, though I would credit very less to the knowledge it has provided me,
          I mostly like to explore things myself. I can proudly say
          that I am a self taught programmer who fell in love with programming when I
          wrote the first "Hello World" program, just the curiousity of how computers work
          keeps me driven towards it. <a href={`${PDF}`}>
            (Open Resume).
          </a>
        </p>
        <p>
          There is not anything specific which I like to do or I work on in programming.
          I work on random things and random programming languages. I have developed games for
          phones, made desktop application and websites. Started my journey with C, which
          seemed so hard at first and oh it took me a whole semester to understand what the
          heck it is as I was new. Once I got the knack of how programming works in general, it was
          easier with other stuff. I have worked in Php in my GSoC, written code in Golang for my personal projects,
          tried to do competitive programming with Golang and failed and switched to Cpp,
          used Java for coursework, dart/flutter for writing native
          code for mobiles and all of this made me realise that the core of every language
          is similar, each of them however performs some tasks better than  the other, for
          example: Golang does concurrency better than anyone.
        </p>
        <p>
          But that's the point, right? I think we shouldn't just use a programming language for the
          sake of learning stuff, just make something that makes the best use out of the
          language. The selection should depend on whether it helps your project or product
          in some significant way.
        </p>
        <blockquote>
          Apart from writing code, I love to listen to music, I often do both together. I love
          to play and follow soccer and try to find a couple of hours everyday to play.
        </blockquote>
        <p>
          In the programming world, it is really common to make mistakes and get frustrated and I constantly swing
          between "I am the best developer" and "I am shite!". I spend a lot of time
          exploring the source code for a package, figuring out answers in stack overflow
          scratching my head across lengthy and ambiguous error messages, but that's okay.
          Programming
          in general is hard and stressful, let's no go there. What's important is to love the
          process and make something essential and hope that it will benifit someone someday.
        </p>
        <p>
          Aquib Baig.
        </p>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            lang
          }
        }
      }
    }
  }
`
