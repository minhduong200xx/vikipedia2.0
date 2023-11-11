import { Flex, Spin } from "antd";

const Loading: React.FC = () => {
  return (
    <Flex align="center" className="flex items-center justify-center">
      <Spin size="large" className="mx-auto relative top-80" />
    </Flex>
  );
};
export default Loading;
