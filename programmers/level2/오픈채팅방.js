/*
1. 오픈채팅방에 들어오고, 나가면 닉네임과 함께 메시지가 출력된다.
2. 닉네임을 변경하는 방법은 두 가지가 있다.
  1) 채팅방을 나간 후, 새로운 닉네임으로 재입장.
  2) 채팅방에서 닉네임을 변경.
3. 닉네임 변경 시 기존 채팅방에 출력되어있는 1번의 메시지가 전부 변경된다.
4. 채팅방에 들어오고 나가거나, 닉네임 변경한 기록이 담긴 문자열 배열 (record)이 주어진다.
5. 모든 기록들이 처리 된 후, 최종적으로 보여지는 메시지를 문자열 배열 형태로 반환하는 함수 작성.

[조건]
  - record의 길이는 1 이상 100,000 이하이다.
  - 유저들은 각각 [유저 아이디]로 구분한다.
  - 첫 단어는 Enter, Leave, Change 중 하나이다.
  - 각 단어는 공백으로 구분, 알파벳 대소문자와 숫자로만 이루어짐.
  - 유저 아이디와 닉네임은 알파벳 대소문자를 구별한다.
  - 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
  - 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지않음.

  - <입장 메시지>
    >> "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
  - <퇴장 메시지>
    >> "Leave [유저 아이디]" (ex. "Leave uid1234")
  - <닉네임 변경>
    >> "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi" - Muzi로 닉네임 변경)

[출력]
  - record의 기록들이 모두 처리된 후 최종적으로 보여지는 메시지들을 문자열 배열 형태로 리턴.
*/

function solution(record) {
  const nameSet = {};
  const messages = [];

  [...record].forEach((msg) => {
    const [action, id, name] = msg.split(" ");

    if (action !== "Leave") {
      nameSet[id] = name;
    }

    if (action === "Enter") {
      messages.push(`${id} 들어왔습니다.`);
    } else if (action === "Leave") {
      messages.push(`${id} 나갔습니다.`);
    }
  });

  return messages.map((msg) => {
    const [id, action] = msg.split(" ");

    return `${nameSet[id]}님이 ${action}`;
  });
}

/*
  answer = [
    [uid, 메시지],
    [uid, 메시지],
    ...
  ]

  update = [
    [uid, 나가기 전 닉네임]
  ]

  1. record 돌면서 uid별 닉네임 최신화
  2. 최신화 후 돌면서 uid별 닉네임 최신화해둔 배열에서 가져와서 메시지 리턴
*/

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
