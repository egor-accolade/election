import { calculateElectionWinner } from "./election";
import { voters } from "./voters";

it("should compute election winner", function () {
  expect(calculateElectionWinner(voters)).toEqual({
    votesForJohn: 44,
    votesForMike: 58,
    totalVotes: 102,
    winner: "Mike Fake",
  });
});