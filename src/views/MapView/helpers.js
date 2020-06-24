export const checkSelectedPos = (roomEle, setPosition) => {
  const roomPos = roomEle.getBoundingClientRect();
  const hintPos = document.getElementById('map_hint').getBoundingClientRect();
  const { x, y } = roomPos;

  const STANDARD_POSITION = { x: x - (hintPos.width - roomPos.width) / 2, y: y - 160 };

  if (roomPos.left < 32 + hintPos.width) {
    setPosition({ x: x + roomPos.width + 16, y: STANDARD_POSITION.y });
  } else if (roomPos.top < 32 + hintPos.height) {
    setPosition({ x: STANDARD_POSITION.x, y: y + roomPos.height + 16 });
  } else if (roomPos.right < 32 + hintPos.width) {
    setPosition({ x: x - roomPos.width - 16, y: STANDARD_POSITION.y });
  } else if (roomPos.bottom < 32 + hintPos.height) {
    setPosition({ x: STANDARD_POSITION.x, y: y - roomPos.height - 16 });
  } else {
    setPosition(STANDARD_POSITION);
  }
};
