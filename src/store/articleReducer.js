import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';

console.log(articles);

// action creator function
function loadArticles() {
  return {
    type: LOAD_ARTICLES,
    articles
  }
}


export const loadArticles;
