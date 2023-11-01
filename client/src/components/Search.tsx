import React from "react";
import { Input } from "antd";

const { Search } = Input;
const SearchBar = () => {
  return (
    <Search
      placeholder="Tìm kiếm"
      enterButton
      className="bg-gray-300 rounded-lg w-96 "
    />
  );
};
export default SearchBar;
