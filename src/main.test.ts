import { frame, totalScore, game } from './main';

describe('Game function', () => {
  test('it should return 0 for only zero rolls', () => {
    const gameScore = game([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]);
    expect(gameScore).toBe(0);
  });
  test('it should return correct score when last frame is a strike', () => {
    const gameScore = game([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10,
      0,
      5,
      2,
    ]);
    expect(gameScore).toBe(17);
  });
  test('it should return correct score when last frame is a spare', () => {
    const gameScore = game([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      5,
      5,
      2,
    ]);
    expect(gameScore).toBe(12);
  });

  test('All strikes should have correct score ', () => {
    const gameScore = game([
      10,
      0,
      10,
      0,
      10,
      0,
      10,
      0,
      10,
      0,
      10,
      0,
      10,
      0,
      10,
      0,
      10,
      0,
      10,
      10,
      10,
    ]);
    expect(gameScore).toBe(300);
  });
  test('Complex numbers ', () => {
    const gameScore = game([
      5,
      4, // 9
      8,
      2, // S  -- 29
      10,
      0, // X -- 50
      10,
      0, // X -- 61
      1,
      0, // 1 -- 62
      9,
      1, // S -- 72
      0,
      10, // S -- 92
      10,
      0, // X -- 112
      6,
      4, // S -- 129
      7,
      3, // S -- 149
      10,
    ]);
    expect(gameScore).toBe(149);
  });
});

describe('Frame function', () => {
  test('it should return the correct score after two rolls', () => {
    const score = frame(2, 3);
    expect(score).toBe(5);
  });

  test('it should return the S sign if the players hit a spare', () => {
    const score = frame(3, 7);
    expect(score).toBe('S');
  });

  test('it should return the X sign if the players hit a strike on the first roll', () => {
    const score = frame(10, 0);
    expect(score).toBe('X');
  });
});

describe('Total Score', () => {
  test('it shoudl correctly calculate the score without spares or strikes', () => {
    const score = totalScore([
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ]);
    expect(score).toBe(20);
  });

  test('it shoudl correctly calculate the score with a spare', () => {
    const score = totalScore([
      [1, 1],
      [1, 1],
      [5, 5],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ]);
    expect(score).toBe(29);
  });

  test('it shoudl correctly calculate the score with multiple spares', () => {
    const score = totalScore([
      [1, 1],
      [1, 1],
      [5, 5],
      [1, 1],
      [1, 1],
      [5, 5],
      [5, 5],
      [1, 1],
      [5, 5],
      [1, 1],
    ]);
    expect(score).toBe(60);
  });

  test('it shoudl correctly calculate the score with a strike', () => {
    const score = totalScore([
      [1, 1],
      [1, 1],
      [10, 0],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ]);
    expect(score).toBe(30);
  });

  test('it shoudl correctly calculate the score with multiple strikes', () => {
    const score = totalScore([
      [1, 1],
      [1, 1],
      [10, 0],
      [10, 0],
      [5, 1],
      [1, 1],
      [10, 0],
      [1, 1],
      [1, 1],
      [1, 1],
    ]);
    expect(score).toBe(71);
  });
});
