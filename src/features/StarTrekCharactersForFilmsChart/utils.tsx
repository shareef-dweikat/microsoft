export function getRandomColor(index: number): string {
  let colorIndex = index;
  const colors = ["red", "blue", "yellow", "green", "orange", "pink"];

  if (colorIndex > colors.length - 1) {
    colorIndex = colorIndex - colors.length;
  }

  if (colorIndex < 0) colorIndex = 0;

  return colors[colorIndex];
}
