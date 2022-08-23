chat-web

pair with chat-api and maybe cassandra db

don't care about socketIOclient id,

just care chat message

{
  chatId: uuid()
  chatRoomId: 1,
  sendUserNickname: "dulee",
  message: "blablabla",
}

identify user by nickname not id

but use user as id in backend and db

first send message to BE and show what get from BE

add createdAt, readUserCnt

need event 

* sendChat

* join

* left

chat / chatRoom nameSpace both need