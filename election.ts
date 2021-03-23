interface Voter {}

export function filterFemaleVoters(voters: Voter[]): Voter[] {
  // RETURN Voter[]
  return null;
}



interface MostVotingAge {}

export function calculateMostVotingAge(voters: Voter[]): MostVotingAge {
  // The age that voted the most
  // RETURN: { age: ??, count: ?? };
  return null;
}


// A = "John Doe",
// B = "Mike Fake",
interface ElectionResult {}

export function calculateElectionWinner(voters: Voter[]): ElectionResult {
  // RETURN:
  // {
  //   votesForJohn: ??,
  //   votesForMike: ??,
  //   totalVotes: ??,
  //   winner: ??,
  // };
  return null;
}