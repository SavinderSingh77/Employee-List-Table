import { useDispatch } from "react-redux";
import { globalSearch } from "./Utils/searchSlice";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const SearchBar = () => {
  const [text, setText] = useState("");
  console.log(text);
  const dispatch = useDispatch();
  const handleGlobalSearch = (input) => {
    dispatch(globalSearch(input));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleGlobalSearch(text);
    }, 200);

    return () => clearTimeout(timer);
    
  }, [text]);

  const clearInput = () => {
    setText("");
  };

  return (
    <div className="search-container">
      <input
        className=" search-input focus:ring-offset-2 focus:ring-2 focus:ring-#0ed3cf focus:shadow-outline  "
        placeholder="Search..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      {text ? (
        <div className="cross-btn" onClick={clearInput}>
          <RxCross1 />
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
