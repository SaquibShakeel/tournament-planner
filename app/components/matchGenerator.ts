export interface Match {
  player1: string;
  player2?: string;
  winner?: string;
}

export const matchGenerator = (teams: string[]): Match[] => {
  const round: Match[] = [];
  const n = teams.length;

  const isEven = n % 2 === 0;
  const needBye = !isEven;

  const shuffledTeams = [...teams].sort(() => Math.random() - 0.5);

  for (let i = 0; i < n - 1; i += 2) {
    const match: Match = {
      player1: shuffledTeams[i],
      player2: shuffledTeams[i + 1],
    };
    round.push(match);
  }

  if (needBye) {
    const byeParticipant = shuffledTeams[n - 1];
    const byeMatch: Match = {
      player1: byeParticipant,
      winner: byeParticipant,
    };
    round.push(byeMatch);
  }

  return round;
};
