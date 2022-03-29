let parms

$(() => {
  parms = getUrlParms()
  console.debug("Parms: ", parms)

  $("#refresh").click(() => {
    refresh()
  })

  $("#delete").click(() => {
    remove()
  })
  refresh()
})

function remove() {
  let id = parms.id
  $.ajax({
    method: "DELETE",
    url: `http://localhost:27091/api/users/${id}`,
    contentType: "application/json",
  })
    .then((res) => {
      console.debug("Delete Response:", res)
      document.location.href = "index.html"
    })
    .fail((err) => {
      console.error(err)
    })
}

function refresh() {
  let id = parms.id
  $.getJSON(`http://localhost:27091/api/users/${id}`)
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
