const COLUMNS_COUNT = 2;

const getCommentsColCount = (commentsCount) => {

  const commentsColCount = {
    left: 0,
    right: 0,
  };

  if (commentsCount > 0) {
    commentsColCount.left = Math.round(commentsCount / COLUMNS_COUNT);
    commentsColCount.right = commentsCount - commentsColCount.left;
  }

  return commentsColCount;
};

export default getCommentsColCount;
