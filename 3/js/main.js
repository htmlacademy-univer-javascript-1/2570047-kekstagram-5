const NAMES = [
    "Павел", 
    "Анастасия", 
    "Турабхан", 
    "Никита", 
    "Артём", 
    "Лидия", 
    "Надежда", 
    "Владимир"
];

const MESSAGES = [
    "Всё отлично!",
    "В целом всё неплохо.",
    "Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра.",
    "В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают.",
    "Как можно было поймать такой неудачный момент?!"
];

const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomMessages = (messages) => {
  const count = getRandomInteger(1, 2);
  const selectedMessages = new Set();

  while (selectedMessages.size < count) {
    selectedMessages.add(getRandomArrayElement(messages));
  }

  return Array.from(selectedMessages).join(' ');
};

let uniqueCommentId = 1;

const createComment = () => ({
  id: uniqueCommentId++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomMessages(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = (photoId, commentsCnt) => {
  const commentsList = [];

  for (let i = 0; i < commentsCnt; i++) {
    commentsList.push(createComment());
  }

  return {
    id: photoId,
    url: `photos/${getRandomInteger(1, 25)}.jpg`,
    description: `Описание фотографии ${photoId}`,
    likes: getRandomInteger(15, 200),
    comments: commentsList,
  };
};

const createPhotosArray = () => {
  const photos = [];
  const numPhotos = 25;

  for (let i = 1; i <= numPhotos; i++) {
    const commentsCnt = getRandomInteger(0, 30);
    photos.push(createPhotoDescription(i, commentsCnt));
  }

  return photos;
};

const photosArray = createPhotosArray();
console.log(JSON.stringify(photosArray, null, 2));