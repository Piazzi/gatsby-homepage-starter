import React from "react"
import { Container, Col, Button } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import slugify from "slugify"
import "../assets/css/postsCarousel.scss"

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

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <span>{children}</span>,
  },
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const PostsCarousel = () => {
  const data = useStaticQuery(query)
  const posts = data.allContentfulBlogPost.edges

  return (
    <Container className="container-margin">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["", ""]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {posts.map((post, index) => {
          const { id, title, image, text } = post.node
          const pathToImage = getImage(image)
          const slug =
            "blog/" +
            slugify(title.replace("|", ""), { lower: true, ignore: "|" })

          return (
            <Col
              id={id}
              key={index}
              md={12}
              className="carousel-post h-100 d-flex flex-column "
            >
              <GatsbyImage
                className="rounded"
                image={pathToImage}
                alt={title}
                width={251}
                height={227}
              ></GatsbyImage>
              <h6 className="blue-text card-title ">{title}</h6>
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
      </Carousel>
    </Container>
  )
}

export default PostsCarousel
