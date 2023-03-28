import GameSavingLoader from '../GameSavingLoader';

test('testing loading', () => GameSavingLoader.load()
  .then((saving) => {
    expect(saving.id).toBe(9);
  }));
