abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}

  abstract getNickName(): string;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const jin = new Player("yoo", "jin", "잇츠지닝");

console.log(jin.getNickName());
console.log(jin.getFullName());
