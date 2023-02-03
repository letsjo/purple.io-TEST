const foo = (str) => {
  let byte = 0;
  return str.split('').map((letter) => {
    const encodeLetter = encodeURIComponent(letter);
    let byteLetter = 1;
    if (encodeLetter.length > 4) byteLetter += 1;
    byte += byteLetter;
    if (byte > 80) {
      if (encodeLetter === '%20') {
        byte = 0;
        return '\n'
      }
      byte = byteLetter;
      return '\n' + letter;
    };
    return letter;
  }).join('');
}

console.log(foo("이 글은 도커에 대해 1도 모르는 시스템 관리자나 서버 개발자를 대상으로 도커 전반에 대해 얕고 넓은 지식을 담고 있습니다. 도커가 등장한 배경과 도커의 역사, 그리고 도커의 핵심 개념인 컨테이너와 이미지에 대해 알아보고 실제로 도커를 설치하고 컨테이너를 실행해 보도록 하겠습니다."));