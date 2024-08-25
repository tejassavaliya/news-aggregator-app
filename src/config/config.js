import moment from "moment";

export const header = (category) => `News - Top ${category} Headlines`;
export const summary = "Channel and PublishedAt";
export const newsChannel = (channel) => `${channel}`;
export const lastUpdate = (published) =>
  `${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")}`;
export const arrowImage = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);
export const noResultFound = "No Results Found";

export const sources = [
  {
    name: "All Data Sources",
    key: "all",
  },
  {
    name: "News API",
    key: "news-api",
  },
  {
    name: "The Guardian API",
    key: "guardian-api",
  },
  {
    name: "New Yourk Times API",
    key: "ny-times",
  },
  {
    name: "Gnews API",
    key: "gnews-api",
  },
];

export const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

export const capitaLize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
function createMockArticle(id) {
  return {
    id: id,
    title: `Article Title ${id}`,
    description: `Description for article ${id}...`,
    publishedAt: new Date().toISOString(),
    source: {
      name: `Source Name ${id}`,
      id: id,
    },
    image: `https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg`,
    url: `https://example.com/article${id}`,
  };
}

export function generateMockArticles(count) {
  const articles = [];
  for (let i = 1; i <= count; i++) {
    articles.push(createMockArticle(i));
  }
  return articles;
}
