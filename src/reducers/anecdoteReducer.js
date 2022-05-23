import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload.id;
      let newState = state.map((anecdote) =>
        anecdote.id !== id ? anecdote : action.payload
      );
      newState.sort((a, b) => b.votes - a.votes);
      return newState;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      const anecdotes = action.payload;
      anecdotes.sort((a, b) => b.votes - a.votes);
      return anecdotes;
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const castVote = (anecdote) => {
  return async (dispatch) => {
    const response = await anecdoteService.vote(anecdote);
    const newAnecdote = response.data;
    dispatch(vote(newAnecdote));
  };
};

export const { vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
