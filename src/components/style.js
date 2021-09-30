import styled from "styled-components";

const NavbarDiv = styled.div`
display:flex;
width:1oo%
justify-content:start;
& .logo {
  width:5%;

}
& nav {
  width:95%;
  & ul {
    & li {
      display:inline-block;
      padding:15px;
    }
  }
}
`

export {NavbarDiv};