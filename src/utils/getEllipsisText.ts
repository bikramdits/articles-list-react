const getEllipsisText = (description: string, isReadMore: boolean, maxLength: number) => {
  let descToShow = description;
  const strLength = descToShow.trim().length;
  if (strLength > maxLength && !isReadMore) {
    descToShow = description.substring(0, maxLength) + "....";
  }
  return descToShow;
};

export default getEllipsisText;
