import { GameSavingLoader } from './loader';

const save = new GameSavingLoader;

save.load().then(saving => {
  JSON.parse(saving);
  console.log(saving);
}, (error) => {
  console.log(error);
});




