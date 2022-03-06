//- 깊은 복사를 적용하지 예시
class Crew {
  #profile;

  set profile(profile) {
    this.#profile = profile;
  }

  get profile() {
    return this.#profile;
  }
}

const lokba = new Crew();

lokba.profile = { nickname: "lokba", name: "김상록", age: 26 };

//1번
console.log(lokba.profile); //{nickname: 'lokba', name: '김상록', age: 26}

const copyProfile = lokba.profile;
copyProfile.name = "장준혁";
copyProfile.nickname = "juunzzi";

//2번
console.log(copyProfile); //{nickname: 'juunzzi', name: '장준혁', age: 26}
console.log(lokba.profile); //{nickname: 'juunzzi', name: '장준혁', age: 26}

//- 깊은 복사를 적용한 예시
class Crew1 {
  #profile;

  set profile(profile) {
    this.#profile = profile;
  }

  get profile() {
    //깊은 복사 적용
    return JSON.parse(JSON.stringify(this.#profile));
  }
}

const lokba1 = new Crew1();

lokba1.profile = { nickname: "lokba", name: "김상록", age: 26 };

//1번
console.log(lokba1.profile); //{nickname: 'lokba', name: '김상록', age: 26}

//2번
const copyProfile1 = lokba1.profile;
copyProfile1.name = "장준혁";
copyProfile1.nickname = "juunzzi";

console.log(copyProfile1); //{nickname: 'juunzzi', name: '장준혁', age: 26}
console.log(lokba1.profile); //{nickname: 'lokba', name: '김상록', age: 26}
