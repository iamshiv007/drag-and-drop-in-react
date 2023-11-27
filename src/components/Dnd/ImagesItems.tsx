import { Image } from '@chakra-ui/react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  image: string;
}

const ImagesItems = ({ image }: Props) => {
  const { listeners, attributes, setNodeRef, transform } =
    useSortable({ id: image });

  const style = {
    transform: CSS.Translate.toString(transform)
  };

  return (
    <Image
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      width={'80px'}
      height={"100%"}
      src={image}
    />
  );
};

export default ImagesItems;
