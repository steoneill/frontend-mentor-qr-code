import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: 320px;
  padding: 16px;
  border-radius: 20px;
`

const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 24px;
`

const ContentWrapper = styled.div`
  text-align: center;
  gap: 16px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 700;
    font-size: 22px;
    color: ${p => p.theme.colours.darkBlue};
  }

  p {
    font-size: 15px;
    margin-top: 8px;
    color: ${p => p.theme.colours.blue};
  }
`

export const Card = ({ children: _children, ...rest }) => {
  const children = React.Children.toArray(_children)
  const image = children.find(child => child.type === StaticImage)
  const content = children.filter(child => child.type === ContentWrapper)

  return (
    <Wrapper {...rest}>
      <ImageWrapper>{image}</ImageWrapper>
      <ContentWrapper>{content}</ContentWrapper>
    </Wrapper>
  )
}

Card.Image = StaticImage
Card.Content = ContentWrapper
