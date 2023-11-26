import { Card, CardBody, Image, Textarea } from '@chakra-ui/react';
import cssLogo from 'https://raw.githubusercontent.com/luis-moguea/languages-dnd/1f52e07cb961a23ab61cf30639786995a8860847/src/assets/css-png.png';
import { useEffect } from 'react';

const Css = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#84b4d5';

    return () => {
      document.body.style.backgroundColor = '';
    };
  });

  return (
    <Card w="250px" h="400px" mt="10px">
      <Image src={cssLogo} />
      <CardBody>
        <Textarea fontSize="12px" height="100%" textAlign="justify">
          CSS is a language used for styling and formatting web documents. It
          defines how elements on a webpage should look, including colors,
          fonts, spacing, and layout. It allows developers to create visually
          appealing and consistent designs for their websites.
        </Textarea>
      </CardBody>
    </Card>
  );
};

export default Css;
