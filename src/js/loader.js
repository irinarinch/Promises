import { json } from './parser';
import { read } from './reader';

export class GameSavingLoader {
  load() { 
    const response = read().then(data => json(data));
    
    return new Promise(resolve => {
      resolve(response);           
    }); 
  }
}





