import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
const NavContainer = styled.ul`
display:flex;
color:white !important;
background-color:black !important;
padding-left:80%;
height:50px;
`;
const NavItem = styled.li`
margin-left:40px;
list-style:none;
align-self:center;
`;
const LinkItem = styled(Link)`
color:white !important;
background-color:black !important;
`;

const NavListItem = [{pageId:'home',pageName:'Home',display:'ALL'},{pageId:'update',pageName:'Update chart',display:'ALL'}];

//NavBar component
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            navList:NavListItem
        };
    }
    componentDidMount(){
    }

    handleNavigation =(item)=>{
        if(item.pageId ==='home'){
            this.props.history.push('/home');
        }else if(item.pageId ==='update'){
            this.props.history.push('/update');
        }
    }
    render(){
        const{navList}= this.state;

        return(
            <NavContainer>
                {
                    navList.map((item,index)=>(
                     <NavItem key={`${item.pageName} ${index}`}>
                         <LinkItem to={`/${item.pageId}`}>
                            {item.pageName}
                         </LinkItem>
                    </NavItem>
                    ))
                }
            </NavContainer>
        );
    }
}

export default (Header);