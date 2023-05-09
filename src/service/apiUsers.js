import axios from "axios";

axios.defaults.baseURL = "https://645a419e95624ceb21fc636c.mockapi.io/";

export const getAllPageTweets = async (filter) => {
   let url = `/users`;
   if (filter === "Follow") {
      url = `/users?follow=false`;
   } else if (filter === "Following") {
      url = `/users?follow=true`;
   } else {
      url = `/users`;
   }

   try {
      const { data } = await axios.get(url);

      return await data;
   } catch (error) {
      return Promise.reject(error.message);
   }
};

export const getPageUsersTwits = async (currentPage) => {
      url = `/users?page=${currentPage}&limit=3`;
   
   try {
      const response = await axios.get(url);

      return await response.data;
   } catch (error) {
      return Promise.reject(error.message);
   }
};

export const updateUsersTweets = async (id, user) => {
   try {
      const response = await axios.put(`/users/${id}`, user);

      return await response.data;
   } catch (error) {
      return Promise.reject(error.message);
   }
};
