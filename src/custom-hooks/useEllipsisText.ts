import React, { useState } from "react";
import getEllipsisText from "../utils/getEllipsisText";

type Props = {
  maxLength: number;
  text: string;
};

const useEllipsisText = ({ maxLength, text }: Props) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  const textToBeShown = getEllipsisText(text, isShowMore, maxLength);

  return { setIsShowMore, textToBeShown, isShowMore };
};

export default useEllipsisText;
