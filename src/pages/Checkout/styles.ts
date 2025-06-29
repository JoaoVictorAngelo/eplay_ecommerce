import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type TabButtonsProps = {
  isActive: boolean
}

type RowProps = {
  marginTop?: string
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
  }

  input,
  select {
    width: 100%;
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    background-color: ${colors.white};

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButtons = styled.button<TabButtonsProps>`
  height: 32px;
  margin-right: 16px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
    margin-top: 8px;
  }
`
