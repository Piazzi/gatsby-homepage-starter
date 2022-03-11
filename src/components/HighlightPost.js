import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import slugify from "slugify"
import "../assets/css/highlightPost.scss"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <span>{children}</span>,
  },
}

const HighlightPost = ({ post }) => {
  const { id, title, image, text } = post.node
  const pathToImage = getImage(image)
  const slug = "blog/" + slugify(title, { lower: true, ignore: ["|"] })

  return (
    <Container className="highlight-post-container">
      <Row>
        <h5>
          <Badge id="highlight-badge" pill bg="primary">
            HIGHLIGHT
          </Badge>
        </h5>
      </Row>
      <Row className="margin-top">
        <Col md={4}>
          <GatsbyImage
            className="rounded"
            image={pathToImage}
            alt={title}
            width={335}
            height={270}
          ></GatsbyImage>
        </Col>
        <Col className="align-center align-left">
          <h4 className="p-title blue-text post-title">{title}</h4>
          <p>{renderRichText(text, options)[0]}</p>
          <Link key={id} to={`/${slug}`}>
            <Button id="highlight-post-button" variant="secondary" size="md">
              read more
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default HighlightPost
