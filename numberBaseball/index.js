// 변수 선언
const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

// 숫자 뽑기
const numbers = [];
for (let n = 0; n < 9; n++) {
  numbers.push(n + 1); // 0, 1, 2, ... , 9
}

const answer = [];
for (let n = 0; n <= 3; n++) {
  const index = Math.floor(Math.random() * numbers.length); // 0~8 정수
  answer.push(numbers[index]); // 대괄호 표기법으로 접근, 1 ~ 9 의 값 하나를 push
  number.splice(index, 1); // numbers의 0 ~ 8번 인덱스 하나를 제거
}

const tries = [];
function checkInput(input) {
  if (input.length !== 4) return alert(`4자리 숫자를 입력해 주세요.`);
  // new Set()은 중복되는 값을 자동으로 제거해준다. ex) 3144 => 314
  if (new Set(input).size !== 4) return alert(`중복되지 않게 입력해주세요.`);
  if (tries.includes(input)) return alert(`이미 시도한 값입니다.`);
  // alert의 리턴 값은 undefined
  return true;
}

$form.addEventListener('submit', (event) => {
  event.target.preventDefault(); // form의 기본동작을 막는다.
  const value = $input.value;
  $input.value = '';
  // else를 지우기 위해 조건식 앞에 !를 붙여서 처리
  if (!checkInput(value)) {
    // 합수도 값이므로 조건식에 들어갈 수 있다.
    return;
  }
  // join('') : [a, b, c] => 'abc' //
  // join(':') => a:b:c // join('') <===> split('')
  if (answer.join('') === value) {
    // 문자가 나타난다.
    $logs.textContent = '홈런!';
    return;
  }
  if (tries.length >= 9) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
    // appendChild(document.createTextNode(`문자~~~`)) == document.textContent(innerTHML) = document.textContent + '문자'
    $logs.appendChild(message);
    return;
  }
  // 몇 스트라이크 몇 볼인지 검사
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]); // indexOf() : 일치하는 값 있으면 1, 아니면 -1 반환
    index > -1 ? (strike += 1) : (ball += 1);
  }
  $logs.append(
    `${value}: ${strike} 스트라이크 ${ball} 볼`,
    document.createElement('br')
  );
  tries.push(value);
});
