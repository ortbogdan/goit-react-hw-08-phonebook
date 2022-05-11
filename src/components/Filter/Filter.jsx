import { FilterWrapper } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import * as selectors from "../../redux/contacts/contacts-selectors";

export const Filter = () => {
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filter"
        onChange={(e) =>
          dispatch(changeFilter(e.target.value.trim().toLowerCase()))
        }
        value={filter}
      ></input>
    </FilterWrapper>
  );
};
