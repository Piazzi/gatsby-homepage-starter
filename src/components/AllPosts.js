import React from "react"
import { Col, Row, Button } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import slugify from "slugify"
import "../assets/css/allPosts.scss"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <span>{children}</span>,
  },
}

const AllPosts = ({ posts }) => {
  return (
    <Row className="container-margin" id="all-posts-container">
      {posts.map((post, index) => {
        const { id, title, image, text } = post.node
        const pathToImage = getImage(image)
        const slug =
          "blog/" +
          slugify(title.replace("|", ""), { lower: true, ignore: "|" })

        return (
          <Col key={id} id={index} md={4} className="post-card d-flex flex-column ">
            <GatsbyImage
              className="rounded"
              image={pathToImage}
              alt={title}
              width={251}
              height={227}
            ></GatsbyImage>
            <h6 className="blue-text card-title post-card-title ">{title}</h6>
            <p className="card-text">
              {renderRichText(text, options)[0].props.children[0].substring(
                0,
                200
              )}
            </p>
            <div className="d-grid gap-2 mt-auto">
              <Button href={`/${slug}`} variant="secondary" size="lg">
                read more
              </Button>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllPosts
