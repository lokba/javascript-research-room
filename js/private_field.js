//private class field 사용하지 않은 예시
class CrewProfile {
  constructor(name, nickname) {
    this.name = name;
    this.nickname = nickname;
  }
}

//1번
const juunzzi = new CrewProfile("장준혁", "juunzzi");
console.log(juunzzi); // CrewProfile {name: '장준혁', nickname: 'juunzzi'}

//2번
juunzzi.name = "김상록";
juunzzi.nickname = "lokba";
console.log(juunzzi); // CrewProfile {name: '김상록', nickname: 'lokba'}

//private class field 사용하지 않은 예시
class CrewProfile1 {
  #name;
  #nickname;

  constructor(name, nickname) {
    this.#name = name;
    this.#nickname = nickname;
  }
}

const lokba = new CrewProfile1("김상록", "lokba");

//1번
// lokba.#nickname = "juunzzi"; // Private field '#nickname' must be declared in an enclosing class
