import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TweetsList from "components/TweetsList/TweetsList";

import { selectCurrentPage } from "redux/selector/selectors";
import {
   getAllPageTweetsThunk, getPageUsersTwitsThunk,

} from "redux/thunk/contactsThunk";

const TweetsPage = () => {
   const dispatch = useDispatch();
   const currentPage = useSelector(selectCurrentPage);

   useEffect(() => {
      dispatch(getAllPageTweetsThunk());
      dispatch(getPageUsersTwitsThunk({ currentPage }));
   }, [dispatch, currentPage]);

   return <TweetsList />;
};

export default TweetsPage;
