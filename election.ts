interface Voter {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  gender: string,
  votedFor: string,
}

export function filterFemaleVoters(voters: Voter[]): Voter[] {
  // Return only female voters
  return null;
}

interface VoterWithFullName {}

export function createVotersWithFullName(voters: Voter[]): VoterWithFullName[] {
  // same as Voter, but should have additional property of fullName, ex. John Doe
  return null;
}

interface ElectionResult {}

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

export function calculateMostVotingAge(voters: Voter[]): MostVotingAge {
  // The age that voted the most
  // RETURN: { age: ??, count: ?? };
  return null;
}
