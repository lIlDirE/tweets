import {
   Header,
   HeaderContainer,
   HeaderNav,
   HeaderNavLink,
} from "./AppBar.styled";

const AppBar = () => {
   return (
      <Header>
         <HeaderContainer>
            <HeaderNav>
               <HeaderNavLink to="/">Home</HeaderNavLink>
               <HeaderNavLink to="tweets">Tweets</HeaderNavLink>
            </HeaderNav>
         </HeaderContainer>
      </Header>
   );
};

export default AppBar;
