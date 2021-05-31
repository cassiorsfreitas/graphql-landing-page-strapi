import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((authors) => (
        <ProfileCard
          key={authors.name}
          name={authors.name}
          role={authors.role}
          media={authors.media}
          socialLinks={authors.socialLinks}
          description={authors.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
