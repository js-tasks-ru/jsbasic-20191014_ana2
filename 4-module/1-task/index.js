/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let friendsListHTML = document.createElement('ul');
  friends.forEach(function (friend) {
    let friendHTML = document.createElement('li');
    friendHTML.innerText = friend.firstName + ' ' + friend.lastName;
    friendsListHTML.appendChild(friendHTML);
  });

  return friendsListHTML;
}
