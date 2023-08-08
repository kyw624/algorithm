function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);

  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";

  // const [userId, userPw] = id_pw;

  // for (const [id, pw] of db) {
  //     if (userId === id && userPw === pw) {
  //         return 'login';
  //     } else if (userId === id && userPw !== pw) {
  //         return 'wrong pw';
  //     }
  // }

  // return 'fail';
}
