import React from "react";

const initialState = "";

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NOTIFICATION":
      return action.notification;
    case "REMOVE_NOTIFICATION":
      return initialState;
    default:
      return state;
  }
};

// action creators
export const createNotification = (notification) => {
  return {
    type: "CREATE_NOTIFICATION",
    notification,
  };
};

export const removeNotification = () => {
  return { type: "REMOVE_NOTIFICATION" };
};

export default notificationReducer;
