// The game consists of 10 frames. In each frame the player has two rolls to knock down 10 pins.
// The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

// A spare is when the player knocks down all 10 pins in two rolls.
// The bonus for that frame is the number of pins knocked down by the next roll.

// A strike is when the player knocks down all 10 pins on his first roll.
// The frame is then completed with a single roll.
// The bonus for that frame is the value of the next two rolls.
// In the tenth frame, a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame.
// However no more than three balls can be rolled in the tenth frame

export const frame = (rollOne: number, rollTwo: number): number | string => {
  if (rollOne === 10) {
    return 'X';
  }
  let score = rollOne + rollTwo;
  return score === 10 ? 'S' : score;
};

export const totalScore = (FrameScoreCard: [number, number][]): number => {
  let scoreArray: any = [];
  let score: number = 0;
  FrameScoreCard.forEach((frameRoll) => {
    const frameScore = frame(frameRoll[0], frameRoll[1]);
    scoreArray.push(frameScore);
  });

  for (let index = 0; index < 10; index++) {
    let roundScore = scoreArray[index];
    if (roundScore === 'S') {
      // handle Spare
      roundScore = 10 + FrameScoreCard[index + 1][0];
    }
    if (roundScore === 'X') {
      // handle Strike

      const futurePoint = FrameScoreCard[index + 2]
        ? FrameScoreCard[index + 2][0]
        : 10;
      const nextPoint =
        FrameScoreCard[index + 1][1] || FrameScoreCard[index + 1][0] !== 10
          ? FrameScoreCard[index + 1][1]
          : futurePoint;
      roundScore = 10 + FrameScoreCard[index + 1][0] + nextPoint;
    }
    score = score + parseInt(roundScore);
  }

  return score;
};

export const game = (Rolls: number[]): number => {
  const FrameScoreCard = listToMatrix(Rolls);
  // verify the end of the game
  return totalScore(FrameScoreCard);
};

const listToMatrix = (list: number[]) => {
  let matrix: any = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % 2 === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
};
