import { useEffect, useState } from "react";
import { box, boxes } from "../data/data";
type Props = {
  boxes: box[];
};
export function Checkboxes() {
  const [checkBoxes, setCheckboxes] = useState<box[]>(boxes);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const row = 4;

  const handleChange = (event, item: box) => {
    let array = structuredClone(checkBoxes);
    let item1 = array.find((element : box) => element.id === item.id )
    item1.mine = event.target.checked

    setCheckboxes(array);

    
  };

  function randomItem() {
    //let twentyPercent  = (items.length * 0.2).toFixed(0)

    const newArray = structuredClone(checkBoxes);

    let twentyPercent = Math.round(checkBoxes.length * 0.2);
    while (twentyPercent >= 0) {
      const item: box = newArray[Math.floor(Math.random() * checkBoxes.length)];
      if (!item.mine === false) {
        item.mine = true;
        twentyPercent--;
        newArray[item.id] = item;
      }
    }
    setCheckboxes(newArray);
  }

  function increase() {
    let newArray: box[] = structuredClone(checkBoxes);
    if (newArray[0].mine) {
      newArray[0 + 1].count++;
      newArray[0 + row].count++;
      newArray[0 + row + 1].count++;
    }

    for (let index = 1; index <= 2; index++) {
      if (newArray[index].mine) {
        newArray[index + 1].count++;
        newArray[index - 1].count++;
        newArray[index - 3].count++;
        newArray[index - 4].count++;
        newArray[index - 5].count++;
      }
    }

    if (newArray[3].mine) {
      newArray[0 - 1].count++;
      newArray[0 + row].count++;
      newArray[0 + row - 1].count++;
    }

    for (let index = 5; index <= index + row; index + row) {
      if (newArray[index].mine) {
        newArray[index + 1].count++;
        newArray[index - row].count++;
        newArray[index - row + 1].count++;
        newArray[index + row].count++;
        newArray[index + row + 1].count++;
      }
    }
    for (let index = 8; index <= index + row; index + row) {
      if (newArray[index].mine) {
        newArray[index - 1].count++;
        newArray[index - row].count++;
        newArray[index - row - 1].count++;
        newArray[index + row].count++;
        newArray[index + row - 1].count++;
      }
    }
    for (let index = 6; index <= index + 1; index++) {
      for (index; index <= index + row; index + row) {
        if (newArray[index].mine) {
          newArray[index + 1].count++;
          newArray[index - 1].count++;
          newArray[index - row].count++;
          newArray[index - row + 1].count++;
          newArray[index - row - 1].count++;
          newArray[index + row].count++;
          newArray[index + row + 1].count++;
          newArray[index + row - 1].count++;
        }
      }
    }
    if (newArray[13].mine) {
      newArray[13 + 1].count++;
      newArray[13 - row].count++;
      newArray[13 - row + 1].count++;
    }
    for (let index = 14; index <= index + 1; index + 1) {
      if (newArray[index].mine) {
        newArray[index - 1].count++;
        newArray[index + 1].count++;
        newArray[index - row - 1].count++;
        newArray[index - row].count++;
        newArray[index + row - 1].count++;
      }
    }
    if (newArray[16].mine) {
      newArray[16 - 1].count++;
      newArray[16 - row].count++;
      newArray[16 - row - 1].count++;
    }

    setCheckboxes(newArray);
  }

  return checkBoxes.map((box) => {
    console.log(box);

    return (
      <input
        type="checkbox"
        name=""
        id=""
        checked={box.mine}
        onChange={handleChange}
        key={box.id}
      />
    );
  });
}
