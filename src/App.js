import { useSelector, useDispatch } from "react-redux";
import { asObject } from "./reducers/anecdoteReducer";

const castVote = (id) => {
  return {
    type: "VOTE",
    data: { id },
  };
};

const createAnecdote = (anecdote) => {
  return {
    type: "NEW_ANECDOTE",
    data: asObject(anecdote),
  };
};

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const create = (event) => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createAnecdote(anecdote));
  };

  const vote = (id) => {
    dispatch(castVote(id));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
