let users = [];

$(() => {
  let url = "http://localhost:27091/api/users";

  $.getJSON(url)
    .then(
      (res) => {
        console.debug(res)
        users = res;
        getUsers(users);
      }
    )
    .fail(
      (err) => {
        console.error(err)
      }
    );
});

function getUsers(users) {
  let tbody = $("#users");
  tbody.empty();
  for (let user of users) {
    let tr = $("<tr></tr>");
    let tdId = $(`<td>${user.id}</td>`)
    let tdName = $(`<td>${user.firstname} ${user.lastname}</td>`)
    let tdUser = $(`<td>${user.username}</td>`)
    let tdPhone = $(`<td>${user.phone}</td>`)
    let tdEmail = $(`<td>${user.email}</td>`)
    let tdReviewer = $(`<td>${(user.isReviewer ? "Yes" : "No")}</td>`)
    let tdAdmin = $(`<td>${(user.isAdmin ? "Yes" : "No")}</td>`)
    tr.append(tdId, tdName, tdUser, tdPhone, tdEmail, tdReviewer, tdAdmin);
    tbody.append(tr);
  }
}