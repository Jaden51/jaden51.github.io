import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = ({ children }) => {
    return (
        <div>
            <StyledNavBar>
                <div>
                    <h3 className='navBar'><Link className='link' to='/'>Home</Link></h3>
                    <h3 className='navBar'><Link className='link' to='/jokes'>Quotes</Link></h3>
                </div>
                {children}
            </StyledNavBar>
        </div>
    )
}

export default NavBar;

const StyledNavBar = styled.div`
    .navBar {
        font-family: 'Economica', sans-serif;
        display: inline-block;
        margin: 10px;
    }

    .link {
        text-decoration: none;
        font-size: 20px;
        color: #008CBA;
    }

    text-align: center;
`;