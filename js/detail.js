$(() => {
  $("#refresh").click(() => {
    refresh()
  })

  refresh()
})

function refresh() {
  $.getJSON("http://localhost:27091/api/users/1")
    .then((res) => {
      console.debug(res)
      display(res)
    })
    .fail((err) => {
      console.error(err)
    })
}

function display(user) {
  $("#dId").text(user.id)
  $("#dName").text(`${user.firstname} ${user.lastname}`)
  $("#dUsername").text(user.username)
  $("#dPhone").text(user.phone)
  $("#dEmail").text(user.email)
  $("#dReviewer").text(user.isReviewer ? "Yes" : "No")
  $("#dAdmin").text(user.isAdmin ? "Yes" : "No")
}
