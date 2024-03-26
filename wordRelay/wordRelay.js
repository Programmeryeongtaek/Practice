// 변수 설정
let word; // 제시어
let newWord; // 새로 입력한 단어
const number = Number(propmt(`참가자는 몇 명 인가요?`), 10); // 참가자 수 입력
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');

// 확인 버튼을 눌렀을 때, 게임이 계속 진행
const onClickButton = () => {
  // word가 falsy 값으로 되어 있으니까, !word를 통해 truthy 값으로 바꾸고
  // 제시된 단어의 '마지막 글자'와 '작성한 단어'의 첫 번째 글자가 같으면 if문 시작
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord; // 입력한 단어가 '제시어'가 된다.
    $word.textContent = word; // 화면에 '제시어'가 나타나게 만든다.
    const order = Number($order.textContent); // '순서'를 나타나게 만든다.
    if (order + 1 > number) {
      // 모든 참가자가 다 진행했을 때
      $order.textContent = 1;
    } else {
      // 한 명이 진행했을 때, 다음 순서 안내
      $order.textContent = order + 1;
    }
  } else {
    alert('올바르지 않은 단어입니다.');
  }
  $input.value = ''; // 입력하고 나면 입력창 초기화
  $input.focus(); // 입력 후, 입력창 자동 포커싱
};

// 새로운 단어를 입력할 떄, 입력창에 따라서 나오게 만든다.
const onInput = (e) => {
  newWord = e.target.value;
};

//
$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);
