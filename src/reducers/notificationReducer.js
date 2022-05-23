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
export const createNotification = (content) => {
  return {
    type: "CREATE_NOTIFICATION",
    notification: content,
  };
};

export const removeNotification = () => {
  return async (dispatch) => {
    dispatch({
      type: "REMOVE_NOTIFICATION",
    });
  };
};

export default notificationReducer;
