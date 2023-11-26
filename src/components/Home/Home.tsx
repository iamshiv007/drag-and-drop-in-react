import ImagesDnd from "../Dnd/ImagesDnd";
import { Flex } from "@chakra-ui/react";

const Home = () => {

  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <ImagesDnd />
      </Flex>
    </>
  );
};

export default Home;