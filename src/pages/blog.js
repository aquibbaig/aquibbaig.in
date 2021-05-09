import { graphql } from 'gatsby'
import _ from 'lodash'
import React, { useMemo } from 'react'
import { Bio } from '../components/bio'
import { Category } from '../components/category'
import { Contents } from '../components/contents'
import { Head } from '../components/head'
import { HOME_TITLE } from '../constants'
import { useCategory } from '../hooks/useCategory'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useRenderedCount } from '../hooks/useRenderedCount'
import { useScrollEvent } from '../hooks/useScrollEvent'
import Layout from '../layout'
import * as Dom from '../utils/dom'
import * as EventManager from '../utils/event-manager'
import { rhythm } from '../utils/typography'
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const BASE_LINE = 80

function getDistance(currentPos) {
  return Dom.getDocumentHeight() - currentPos
}

export default ({ data, location }) => {
  const { siteMetadata } = data.site
  const { countOfInitialPost } = siteMetadata.configs
  const posts = data.allMarkdownRemark.edges
  const categories = useMemo(
    () => _.uniq(posts.map(({ node }) => node.frontmatter.category)),
    []
  )
  const [count, countRef, increaseCount] = useRenderedCount()
  const [category, selectCategory] = useCategory()

  useIntersectionObserver()
  useScrollEvent(() => {
    const currentPos = window.scrollY + window.innerHeight
    const isTriggerPos = () => getDistance(currentPos) < BASE_LINE
    const doesNeedMore = () =>
      posts.length > countRef.current * countOfInitialPost

    return EventManager.toFit(increaseCount, {
      dismissCondition: () => !isTriggerPos(),
      triggerCondition: () => isTriggerPos() && doesNeedMore(),
    })()
  })

  return (
    <Layout location={location} title={siteMetadata.title}>
      <div className="archives" style={{ minHeight: '40vh' }}>
        <Title style={{
          fontSize: '2.8rem',
          fontWeight: '700',
          padding: 0,
          margin: 0,
          color: '#082b38'
        }}>
          Archives
        </Title>
        <Paragraph style={{ fontSize: '1.2rem' }}>
          I started writing content related to tech in my college and have been writing
          quite a lot since the lockdown of 2021.
          I have published {posts.length} blog posts on this website. You can filter using the
          keywords below.
        </Paragraph>
        <Category
          categories={categories}
          category={category}
          selectCategory={selectCategory}
        />
        <Contents
          posts={posts}
          countOfInitialPost={countOfInitialPost}
          count={count}
          category={category}
        />
      </div>
    </Layout>
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
          excerpt(pruneLength: 150, truncate: true)
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
