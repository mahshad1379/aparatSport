import React from 'react'
import { TagContainer, TagText } from './style'

const Tag = ({tag}) => {
  return (
    <TagContainer>
      <TagText>
        # {tag}
      </TagText>
    </TagContainer>
  )
}

export default Tag