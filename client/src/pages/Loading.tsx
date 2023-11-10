import { Flex, Spin } from "antd";

const Loading: React.FC = () => {
  return (
    <Flex align="center" gap="middle">
      <Spin size="small" className="mx-auto" />
    </Flex>
  );
};
export default Loading;
