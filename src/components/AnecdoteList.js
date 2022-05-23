import { useSelector, useDispatch } from "react-redux";
import { castVote } from "../reducers/anecdoteReducer";
import {
  createNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === "") {
      return anecdotes;
    }
    return anecdotes.filter((a) => a.content.includes(filter));
  });

  const vote = async (id) => {
    const anecdote = anecdotes.find((a) => a.id === id);
    dispatch(castVote(anecdote));
    dispatch(createNotification(`You voted for \'${anecdote.content}\'`));
    setTimeout(() => dispatch(removeNotification()), 5000);
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
