import useEllipsisText from "custom-hooks/useEllipsisText";
import getDeviceOS from "utils/getDeviceOS";
import {
  Card,
  CardBody,
  CardFooter,
  CardHead,
  Date,
  ReadMore,
  Text,
  Title,
} from "./ArticleCardStyles";

export type ArticleType = {
  title: string;
  description: string;
  articleNumber?: number;
};

const MAX_LENGTH = 350;

const ArticleCard = ({ title, description, articleNumber }: ArticleType) => {
  const os = getDeviceOS();

  const { textToBeShown, setIsShowMore, isShowMore } = useEllipsisText({
    maxLength: os === "Other" ? MAX_LENGTH : MAX_LENGTH - 40,
    text: description,
  });

  return (
    <Card>
      <CardHead>
        <Date>28 Jan 2023</Date>
        <Title>{title + " " + articleNumber}</Title>
      </CardHead>
      <CardBody>
        <Text>{textToBeShown}</Text>
      </CardBody>
      <CardFooter>
        <ReadMore onClick={() => setIsShowMore(!isShowMore)}>
          Read {isShowMore ? " Less" : "More"}
        </ReadMore>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
