import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  display: block;
  height: 100%;
  padding: 8px;
  background-color: ${colors.gray};
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${colors.white};

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`
export const Description = styled.p`
  display: block;
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
