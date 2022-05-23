import { filterChange } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = (props) => {
  const dispatch = useDispatch();

  let handleFilterChange = (event) => {
    dispatch(filterChange(event.target.value));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      Filter:
      <input
        type="text"
        value={props.filterValue}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
