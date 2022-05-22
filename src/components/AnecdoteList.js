import { useSelector, useDispatch } from "react-redux";
import { castVote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();

  let anecdotes = useSelector((state) => state.anecdotes);
  anecdotes.sort((a, b) => b.votes - a.votes);

  const vote = (id) => {
    dispatch(castVote(id));
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
