//- getter/settter를 사용하지 않은 예
const crew = {
  name: "김상록",
  nickname: "lokba",

  getProfile() {
    return `name : ${this.name}, nickname : ${this.nickname}`;
  },

  setProfile(value) {
    [this.name, this.nickname] = value.split(" ");
  },
};

//1번
console.log(crew); // {name: '김상록', nickname: 'lokba', getProfile: ƒ, setProfile: ƒ}

//- getter/settter를 사용한 예
const crew1 = {
  name: "김상록",
  nickname: "lokba",

  get profile() {
    return `name : ${this.name}, nickname : ${this.nickname}`;
  },

  set profile(value) {
    [this.name, this.nickname] = value.split(" ");
    console.log(this);
  },
};

//2번
console.log(crew1); // {name: '김상록', nickname: 'lokba'}
