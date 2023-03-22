type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

// type Player = {
//   nickname: string;
//   team: Team;
//   health: Health;
// };

interface Player {
  nickname: string;
  team: Team;
  health: Health;
}

const nico: Player = {
  nickname: "nico",
  team: "yellow",
  health: 1,
};

interface User {
  name: string;
}
interface User {
  nickname: string;
}
interface User {
  age: number;
}

const jiny: User = {
  name: "jin",
  nickname: "jiny",
  age: 24,
};
