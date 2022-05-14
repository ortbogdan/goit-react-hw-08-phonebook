import styled from "styled-components";

export const NavItem = styled.div`
    padding: 10px;
    border-radius: 6px;
    :hover,
    :focus {
      transform: scale(1.2);
      text-shadow: 1px 1px 1px rgb(121, 170, 154), 0 0 0.2em rgb(194, 236, 222);
    }
   > a {
      
      text-decoration: none;

      color: black;
      
      &.active {
      cursor: default;
      color: rgb(221, 233, 224);
      text-shadow: 1px 1px 1px rgb(121, 170, 154), 0 0 0.2em rgb(194, 236, 222);
      transform: scale(1.2);
      }
    }
`

export const Header = styled.header`
  width:100%;
`

