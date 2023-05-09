import {
   WelcomeContainer,
   WelcomeSection,
   WelcomeText,
   WelcomeTextLink,
} from "./Welcome.styled";

const Welcome = () => {
   return (
      <WelcomeSection>
         <WelcomeContainer>
            <WelcomeText>
               Welcome to tech part of the tweets task{" "}
               <WelcomeTextLink to="tweets">Tweets</WelcomeTextLink>
            </WelcomeText>
         </WelcomeContainer>
      </WelcomeSection>
   );
};

export default Welcome;
