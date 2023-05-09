import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUsersTweetsThunk } from "redux/thunk/contactsThunk";
import { selectIsLoading, selectUsersTweets } from "redux/selector/selectors";
import { addDots } from "service/utilities";

import backgroundCard from "assets/img/background-card.png";
import Sprite from "assets/img/sprite.svg";
import {
   Avatar,
   AvatarWrap,
   FollowButton,
   FollowersText,
   TweetCard,
   TweetIcon,
   TweetLine,
   TweetText,
} from "./TweetItem.styled";

const TweetItem = () => {
   const dispatch = useDispatch();

   const IsLoading = useSelector(selectIsLoading);
   const usersTweets = useSelector(selectUsersTweets);

   const handelFollow = async (user) => {
      console.log(user.id);
      if (!user.follow) {
         const editedUser = {
            ...user,
            ...{ follow: !user.follow, followers: user.followers + 1 },
         };
         dispatch(updateUsersTweetsThunk({ id: user.id, editedUser }))
            .unwrap()
            .then(() => {
               toast.success(`You following`);
            })
            .catch((error) => {
               toast.error("Something went wrong, try again later");
            });
      } else {
         const editedUser = {
            ...user,
            ...{ follow: !user.follow, followers: user.followers - 1 },
         };
         dispatch(updateUsersTweetsThunk({ id: user.id, editedUser }))
            .unwrap()
            .then(() => {
               toast.info(`You are unfollow`);
            })
            .catch((error) => {
               toast.error("Something went wrong, try again later");
            });
      }
   };

   return usersTweets.map((user) => {
      return (
         <TweetCard backgroundCard={backgroundCard} key={user.id}>
            <TweetIcon>
               <use href={Sprite + "#icon-logo"}> </use>
            </TweetIcon>
            <TweetLine />
            <AvatarWrap>
               <Avatar src={user.avatar} alt="avatar" />
            </AvatarWrap>

            <TweetText>{user.tweets} tweets</TweetText>
            <FollowersText>{addDots(user.followers)} followers </FollowersText>
            <FollowButton
               isFollow={user.follow}
               onClick={() => handelFollow(user)}
               disabled={IsLoading}
            >
               {!IsLoading && user.follow && <>following</>}
               {!IsLoading && !user.follow && <>follow</>}
            </FollowButton>
         </TweetCard>
      );
   });
};

export default TweetItem;
