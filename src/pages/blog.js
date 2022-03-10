import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AllPosts from "../components/AllPosts"
import HighlightPost from "../components/HighlightPost"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { useStaticQuery, graphql } from "gatsby"
import "../assets/css/blog.scss"

const query = graphql`
  {
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          image {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 250
              height: 220
            )
          }
          title
          id
          text {
            raw
          }
        }
      }
    }
  }
`

const Blog = () => {
  const data = useStaticQuery(query)
  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Seo title="Blog"></Seo>
      <Container className="container-margin">
        <Row className="margin-top">
          <Col md={1} sm={3} xs={3} className="align-center">
            <StaticImage
              src="../assets/images/tool.svg"
              alt="tool"
              width={82}
              height={117}
            ></StaticImage>
          </Col>
          <Col>
            <h1 className=" blog-title col-md-auto">Blog</h1>
          </Col>
        </Row>
        <HighlightPost post={posts[0]}></HighlightPost>
        <AllPosts posts={posts.slice(1)}></AllPosts>
      </Container>
    </Layout>
  )
}

export default Blog
