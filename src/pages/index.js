import React, { forwardRef } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card } from "../components/Card"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Card>
      <StaticImage
        src="../images/image-qr-code.png"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A QR code"
      />
      <Card.Content>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </Card.Content>
    </Card>
  </Layout>
)

export default IndexPage
