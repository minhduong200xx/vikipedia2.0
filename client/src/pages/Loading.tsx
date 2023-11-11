import { Flex, Spin } from "antd";

const Loading: React.FC = () => {
  return (
    <Flex align="center" gap={100} className="flex items-center justify-center">
      <Spin size="large" className="mx-auto absolute top-80" />
    </Flex>
  );
};
export default Loading;
