import React from 'react'
import { FaGithub } from 'react-icons/fa'

import Container from 'components/Container'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <p>
        <FaGithub className="icon-github" />
        Developed by{' '}
        <a href="https://github.com/cassiorsfreitas?tab=repositories">
          Cássio Freitas{' '}
        </a>
      </p>
    </Container>
  </S.Wrapper>
)

export default Footer
