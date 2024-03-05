import React, {useState, useCallback} from "react";
import {ButtonGroup, Button} from '@shopify/polaris';
function filteredTodos({changeFilter}){
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleButtonClick = useCallback(
    (index: number) => {
      if (activeButtonIndex === index) return;
      setActiveButtonIndex(index);
    },
    [activeButtonIndex],
  );

  return(
    <ButtonGroup variant="segmented">
      <Button
        pressed={activeButtonIndex === 0}
        onClick={() => {handleButtonClick(0); changeFilter('all')}}
      >
        All
      </Button>
      <Button
        pressed={activeButtonIndex === 1}
        onClick={() => {handleButtonClick(1); changeFilter('active')}}
      >
        Active
      </Button>
      <Button
        pressed={activeButtonIndex === 2}
        onClick={() => {handleButtonClick(2); changeFilter('completed')}}
      >
        Completed
      </Button>
    </ButtonGroup>
  )
}

export default filteredTodos;