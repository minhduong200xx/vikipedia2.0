import React, { useEffect, useState } from "react";
import { Image, Empty, Input, List, Popover } from "antd";
import useDebounce from "../hooks/useDebounce";
import pages from "../utils/data";
import { Link, useNavigate } from "react-router-dom";
const { Search } = Input;
const SearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>();
  const navigate = useNavigate();
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
      setChange(!change);
      setData(content);
    }
  }, [searchDebounce]);
  const onSearch = (value: string) => {
    navigate(`/pages/${value}`);
  };

  const content =
    data && data.length > 0 ? (
      <List
        itemLayout="horizontal"
        dataSource={data}
        size={"small"}
        style={{ width: 350 }}
        renderItem={(item, index) => (
          <Link to={`/page/${item.id}`}>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Image
                    height={60}
                    width={80}
                    preview={false}
                    src={item.images[0].src}
                  />
                }
                title={<b>{item.title}</b>}
                description={item.shortDesc[0]}
              />
            </List.Item>
          </Link>
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
          onOpenChange={() => setChange(!change)}
          placement={"bottomLeft"}
        ></Popover>
      </div>
    </div>
  );
};
export default SearchBar;
