import * as React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { NavbarDiv } from './style';

const Navbar = () => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          allDatoCmsNewpage {
            edges {
              node {
                id
                pageTitle
                slug
              }
            }
          }
        }
      `}
      render={data => (
        <div>
<NavbarDiv>
      <div className='logo'>
      <Link to="/">
      <StaticImage src="../images/icon.png" alt="A kitten"  />
      </Link>
      </div>
      <nav>
        <ul>
          {
          data.allDatoCmsNewpage.edges.map(({ node: navItem }) => (
            <li key={navItem.id}><Link to={`/${navItem.slug}`} >{navItem.pageTitle}</Link>
            </li>
          ))
          }
        </ul>
      </nav>
    </NavbarDiv>
              </div>
      )}
    />
  );
};

export default Navbar;
