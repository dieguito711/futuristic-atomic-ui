import React from "react";
import { SearchContainer, DivSearchContainer } from "./styled";
import { BsSearch } from "react-icons/bs";

const Search = ({ children, ...props }) => {
  const { type } = props;
  return (
    <DivSearchContainer whileHover={{ scale: 1.1 }}>
      <SearchContainer type="text">{children}</SearchContainer>
      <BsSearch />
    </DivSearchContainer>
  );
};

export default Search;
