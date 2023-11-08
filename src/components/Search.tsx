import React, { useEffect, useState } from "react";
import { Avatar, Empty, Input, List, Popover } from "antd";
import useDebounce from "../hooks/useDebounce";
import pages from "../utils/data";
const { Search } = Input;
const SearchBar = () => {
  const [search, setSearch] = useState<string>();
  const [change, setChange] = useState(false);
  const [data, setData] = useState<unknown>();
  const onChange = (value: string) => {
    setSearch(value);
  };
  const searchDebounce = useDebounce(search, 1000);
  useEffect(() => {
    if (searchDebounce) {
      const content = pages.filter((item) =>
        item.title.toLowerCase().includes(searchDebounce.toLowerCase())
      );
      console.log(searchDebounce);
      setChange(true);
      setData(content);
    }
  }, [searchDebounce]);
  const onSearch = (value: string) => {
    console.log(typeof value);
  };

  const content =
    data && data.length > 0 ? (
      <List
        itemLayout="horizontal"
        dataSource={data}
        style={{ width: 400 }}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<img src={item.images[0].src} className="w-20 h-20" />}
              title={<a href={`/page/${item.title}`}>{item.title}</a>}
            />
          </List.Item>
        )}
      />
    ) : (
      <Empty style={{ width: 400 }} />
    );
  return (
    <div className="w-fit flex flex-col items-center">
      <Search
        placeholder="Tìm kiếm"
        enterButton
        className="bg-gray-300 rounded-lg w-96 "
        loading={false}
        onSearch={onSearch}
        onChange={(e) => onChange(e.target.value)}
      ></Search>
      <div className="bg-gray-300 rounded-lg w-96 ">
        <Popover
          content={content}
          open={change}
          placement={"bottomLeft"}
        ></Popover>
      </div>
    </div>
  );
};
export default SearchBar;
