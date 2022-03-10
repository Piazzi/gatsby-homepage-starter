import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Seo from "../../components/SEO"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import PostsCarousel from "../../components/PostsCarousel"
import { StaticImage } from "gatsby-plugin-image"
import "../../assets/css/singlePost.scss"

export const query = graphql`
  query getSingleBlogPost($title: String) {
    contentfulBlogPost(title: { eq: $title }) {
      title
      text {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            file {
              url
              fileName
              contentType
            }
            gatsbyImageData
          }
        }
      }
      image {
        gatsbyImageData(
          formats: WEBP
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
      id
    }
  }
`

const PostTemplate = ({ data }) => {
  console.log(data);
  const { title, text, image } = data.contentfulBlogPost
  const pathToImage = getImage(image)
  const options = {
    renderNode: {
      renderMark: {
        [MARKS.BOLD]: text => <strong>{text}</strong>,
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p>{children}</p>
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const embeddedImage = getImage(node.data.target.gatsbyImageData)
        return (
          <GatsbyImage
            className="rounded "
            image={embeddedImage}
            alt={title}
            width={803}
            height={354}
          ></GatsbyImage>
        )
      },
    },
  }

  return (
    <Layout>
      <Seo title=""></Seo>
      <Container>
        <Row className="container-margin">
          <Col md={1} sm={3} xs={3} className=" align-center">
            <StaticImage
              src="../../assets/images/tool.svg"
              alt="tool"
              width={82}
              height={117}
            ></StaticImage>
          </Col>
          <Col>
            <h1 className=" blog-title ">Blog</h1>
          </Col>
        </Row>
        <Row className="post-container ">
          <h4 className="blue-text post-title">{title}</h4>
          <div className="post-image">
            <GatsbyImage
              className="rounded "
              image={pathToImage}
              alt={title}
              width={803}
              height={354}
            ></GatsbyImage>
          </div>
          <section>{renderRichText(text, options)}</section>
          <PostsCarousel></PostsCarousel>
        </Row>
      </Container>
    </Layout>
  )
}

export default PostTemplate
