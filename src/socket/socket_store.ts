// store online user
export let onlineUsers = [] as string[];

// add user
export function addOnlineUser(id: string) {
  onlineUsers.push(id);
}
// get user
export function getOnlineUser(id: string) {
  const user = onlineUsers.find((x) => x === id);
  return user;
}

// remove user
export function removeOnlineUser(id: string) {
  const users = onlineUsers.filter((x) => x !== id);
  onlineUsers = users;
}
