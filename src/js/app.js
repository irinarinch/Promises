import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  return saving;
}, (error) => {
  console.log(error);
});
