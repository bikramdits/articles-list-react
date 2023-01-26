import React, { memo, useCallback, useState } from "react";
import ArticleCard, { ArticleType } from "components/articles/ArticleCard";
import {
  ArticleCount,
  ArticleCountInput,
  CardContainer,
  Container,
  GetCountButton,
  LoadMore,
  MainHeading,
  Text,
} from "./ArticleListStyles";

import { SAMPLE_ARTICLE } from "../../mock-data/ARTICLE_SAMPLE";

export const initialArticlesCount = 5;

const genrateInitialArticlesList = (initialArticlesCount: number) => {
  const articles = [];
  for (let index = 0; index < initialArticlesCount; index++) {
    articles.push(SAMPLE_ARTICLE);
  }
  return articles;
};

const ArticlesList = () => {
  const [articlesCount, setArticlesCount] = useState<number>(initialArticlesCount);
  const [error, setError] = useState("");
  const [articlesList, setArticlesList] = useState<ArticleType[]>(
    genrateInitialArticlesList(initialArticlesCount),
  );

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const replaced = value.replace(/\D/g, "");
    setArticlesCount(Number(replaced));
  };

  const MAX_LIMIT = 5000;

  // using useCallback for preventing running loop for same number of articles
  const getArticlesList = useCallback(
    function () {
      // if (articlesCount > MAX_LIMIT) {
      //   return setError("Too many articles");
      // }

      // if (error) {
      //   setError("");
      // }

      const articles = [];
      for (let index = 0; index < articlesCount; index++) {
        articles.push(SAMPLE_ARTICLE);
      }
      return articles;
    },
    [articlesCount],
  );

  return (
    <Container>
      <MainHeading id="articles-heading">Related Articles </MainHeading>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Text>

      <CardContainer aria-labelledby="articles-heading">
        {articlesList.map((article: ArticleType, index: number) => (
          //using index as key for now because we don't have something unique.
          <ArticleCard {...article} key={index} articleNumber={index + 1} />
        ))}
      </CardContainer>
      <LoadMore>
        {/* <LoadMoreButton>Load More</LoadMoreButton> */}
        <ArticleCount>
          <ArticleCountInput
            data-testid="count-input"
            type="text"
            onChange={onInputChange}
            value={articlesCount}
          />{" "}
          <GetCountButton
            data-testid="render-count-button"
            onClick={() => {
              setArticlesList(getArticlesList);
            }}
          >
            Plot Articles
          </GetCountButton>
        </ArticleCount>
      </LoadMore>
    </Container>
  );
};

export default memo(ArticlesList);
