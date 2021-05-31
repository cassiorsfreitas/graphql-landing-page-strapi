import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

import * as S from './styles'
import { Author } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribble: <FaDribbble />,
  Facebook: <FaFacebook />,
  LinkedIn: <FaLinkedin />
}

const ProfileCard: React.FC<Author> = ({
  name,
  role,
  media,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={getImageUrl(media.url)} alt={media.alternativeText} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.title}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
