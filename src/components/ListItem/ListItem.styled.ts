import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListItemLink = styled(NavLink) <{ isDone: boolean }>`
    text-decoration: none;
    padding: 10px;
    color: ${(props) => (props.isDone ? 'green' : 'red')};
      &:hover {
    text-decoration: underline;
  }
  &.active {
    font-weight: bold;
  }
`