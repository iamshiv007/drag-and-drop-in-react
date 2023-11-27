import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { imageArray } from '../../utils/models';
import ImagesItems from './ImagesItems';

const imagesDnd = () => {
  const [languageImage, setLanguageImage] = useState<string[]>(imageArray);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
  
    if (active.id !== over?.id) {
      setLanguageImage((items) => {
                const activeIndex = items.indexOf(active.id.toString());
        const overIndex = over ? items.indexOf(over?.id.toString()) : -1;
  
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };
  
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext strategy={rectSortingStrategy} items={languageImage}>
        <Flex width={"100vw"} minHeight={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Flex
          justifyItems="center"
          alignItems={"center"}
          border="solid"
          borderWidth="1px"
          rounded="2xl"
          borderColor="gray.300"
          padding="2em"
          flexWrap={"wrap"}
          gap={8}
          maxWidth={"500px"}
        >
          {languageImage.map((image, index) => (
            <ImagesItems key={index} image={image}></ImagesItems>
          ))}
        </Flex>
        </Flex>
      </SortableContext>
    </DndContext>
  );
};

export default imagesDnd;
