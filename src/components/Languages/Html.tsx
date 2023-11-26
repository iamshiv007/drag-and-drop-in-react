import { Card, CardBody, Image, Textarea } from '@chakra-ui/react';
import htmlLogo from 'https://raw.githubusercontent.com/luis-moguea/languages-dnd/1f52e07cb961a23ab61cf30639786995a8860847/src/assets/html-png.png';
import { useEffect } from 'react';

const Html = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f3632b';

    return () => {
      document.body.style.backgroundColor = '';
    };
  });

  return (
    <Card w="250px" h="400px" mt="10px">
      <Image src={htmlLogo} backgroundSize="cover" />
      <CardBody>
        <Textarea fontSize="12px" height="100%" textAlign="justify">
          HTML is a markup language that defines the structure and content of a
          webpage. It uses tags to create elements like headings, paragraphs,
          images, and links. HTML is the backbone of the web and is responsible
          for organizing and presenting information on websites.
        </Textarea>
      </CardBody>
    </Card>
  );
};

export default Html;
