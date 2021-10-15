interface Voter {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  gender: string,
  votedFor: string,
}

// approx. 3 min.
export function filterFemaleVoters(voters: Voter[]): Voter[] {
  // Return only female voters
  return null;
}

interface VoterWithFullName {}

// approx. 7 min
export function createVotersWithFullName(voters: Voter[]): VoterWithFullName[] {
  // same as Voter, but should have additional property of fullName, ex. John Doe
  return null;
}

interface ElectionResult {}

// approx. 10 min
export function calculateElectionWinner(voters: Voter[]): ElectionResult {
  // calculate election winner
  // return {
  //   votesForA: ??,
  //   votesForB: ??,
  //   totalVotes: ??,
  //   winner: ??,
  // };
  return null;
}

interface VotersByDecade {
  10: Voter[],
  20: Voter[],
  30: Voter[],
  40: Voter[],
  50: Voter[],
  60: Voter[],
  70: Voter[],
  80: Voter[],
  90: Voter[],
}

// approx. 15 min.
export function chunkVotersByAgeGroup(voters: Voter[]): VotersByDecade {

  // chunk voters by age group, in each chunk they should be sorted from youngest to oldest
  const votersByDecade: VotersByDecade  = {
    '10': [],
    '20': [],
    '30': [],
    '40': [],
    '50': [],
    '60': [],
    '70': [],
    '80': [],
    '90': [],
  };

  return null;
}

interface MostVotingAge {}

// approx. 20 min
export function calculateMostVotingAge(voters: Voter[]): MostVotingAge {
  // The age that voted the most
  // RETURN: { age: ??, count: ?? };
  return null;
}
