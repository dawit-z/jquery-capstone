let user
let parms

$(() => {
  parms = getUrlParms()
  console.debug("Parms:", parms)
  display(parms.id)

  $("#save").click(() => {
    save()
  })
})

function display(id) {
  $.getJSON("http://localhost:27091/api/users/" + id)
    .then((res) => {
      user = res
      console.debug(res)
      $("#iId").val(user.id)
      $("#iUsername").val(user.username)
      $("#iFirstname").val(user.firstname)
      $("#iLastname").val(user.lastname)
      $("#iPhone").val(user.phone)
      $("#iEmail").val(user.email)
      $("#iReviewer").prop("checked", user.isReviewer)
      $("#iAdmin").prop("checked", user.isAdmin)
    })
    .fail((err) => console.error(err))
}

function save() {
  user = {
    id: +$("#iId").val(),
    username: $("#iUsername").val(),
    password: "Train@MAX",
    firstname: $("#iFirstname").val(),
    lastname: $("#iLastname").val(),
    phone: $("#iPhone").val(),
    email: $("#iEmail").val(),
    isReviewer: $("#iReviewer").prop("checked"),
    isAdmin: $("#iAdmin").prop("checked"),
  }
  console.debug(user)
  $.ajax({
    url: "http://localhost:27091/api/users/" + user.id,
    method: "PUT",
    data: JSON.stringify(user),
    contentType: "application/json",
  })
    .then((res) => {
      console.log(res)
      document.location.href = "index.html"
    })
    .fail((err) => {
      console.error(err)
    })
}
