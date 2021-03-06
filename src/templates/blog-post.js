import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'

import * as Elements from '../components/elements'
import Layout from '../layout'
import { Head } from '../components/head'
import { PostTitle } from '../components/post-title'
import { PostDate } from '../components/post-date'
import { PostContainer } from '../components/post-container'
import { SocialShare } from '../components/social-share'
import { SponsorButton } from '../components/sponsor-button'
import { Bio } from '../components/bio'
import { PostNavigator } from '../components/post-navigator'
import { Disqus } from '../components/disqus'
import { Utterances } from '../components/utterances'
import * as ScrollManager from '../utils/scroll'

import { GithubOutlined } from '@ant-design/icons'

import '../styles/code.scss'
import 'katex/dist/katex.min.css'
import { Tag } from 'antd'

const getUrlSuffix = (location) => {
  return `${location.slice(1, -1)}.md`;
}

export default ({ data, pageContext, location }) => {
  useEffect(() => {
    ScrollManager.init()
    return () => ScrollManager.destroy()
  }, [])

  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const { title, comment, siteUrl, author, sponsor } = metaData
  const { disqusShortName, utterances } = comment
  const { title: postTitle, date, category } = post.frontmatter
  const { repositoryUrl } = data.site.siteMetadata

  return (
    <Layout location={location} title={title}>
      <div>
        <Head title={postTitle} description={post.excerpt} />
        <Tag style={{ marginBottom: '4vh' }}>
          <Link
            className="ff"
            style={{
              textDecoration: 'none',
              fontSize: '1.4rem',
              padding: '4px'
            }}
            to={`http://localhost:8000/blog?category=${category}`}
          >
            {category}
          </Link>
        </Tag>
        <PostTitle title={postTitle} />
        <PostDate date={date} />
        <PostContainer html={post.html} />
        <Link
          style={{ textDecoration: 'none', fontSize: '1.2rem' }}
          className="rf"
          to={`${repositoryUrl}/blob/master/content/blog/${getUrlSuffix(location.pathname)}`}>
          Edit this page on <GithubOutlined style={{ marginLeft: '0.3rem', fontSize: '1.4rem' }} />
        </Link>
        <SocialShare title={postTitle} author={author} />
        {!!sponsor.buyMeACoffeeId && (
          <SponsorButton sponsorId={sponsor.buyMeACoffeeId} />
        )}
        <Elements.Hr />
        <Bio />
        <PostNavigator pageContext={pageContext} />
        {!!disqusShortName && (
          <Disqus
            post={post}
            shortName={disqusShortName}
            siteUrl={siteUrl}
            slug={pageContext.slug}
          />
        )}
        {!!utterances && <Utterances repo={utterances} />}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        repositoryUrl
        comment {
          disqusShortName
          utterances
        }
        sponsor {
          buyMeACoffeeId
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
      }
    }
  }
`
