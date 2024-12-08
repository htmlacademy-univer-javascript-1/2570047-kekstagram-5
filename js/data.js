import { getRandomElement, getRandomInteger } from './utils.js';

const AVATAR_COUNT = 6;
const PHOTO_COUNT = 25;
const MIN_LIKE = 15;
const MAX_LIKE = 200;
const COMMENT_COUNT = 30;

const DESCRIPTIONS = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Лиза',
  'Ира',
  'Андрей',
  'Илья',
  'Марина',
  'Дима',
  'Вероника'
];

const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomElement(COMMENTS)
).join(' ');

const createComment = () => ({
  id: getRandomInteger(1, 25),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomElement(NAMES)
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKE, MAX_LIKE),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment)
});

const getPhoto = () => Array.from(
  {length: PHOTO_COUNT },
  (_, photoIndex) => createPhoto(photoIndex + 1)
);

export { getPhoto };