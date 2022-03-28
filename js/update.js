let user

$(() => {
  $('#get').click(() => {
    let id = $('#xId').val()
    display(id)
  })
})

function display(id) {
  $.getJSON('http://localhost:27091/api/users/' + id)
    .then((res) => {
      user = res
      console.debug(res)
      $('#iId').val(user.id)
      $('#iUsername').val(user.username)
      $('#iFirstname').val(user.firstname)
      $('#iLastname').val(user.lastname)
      $('#iPhone').val(user.phone)
      $('#iEmail').val(user.email)
      $('#iReviewer').prop('checked', user.isReviewer)
      $('#iAdmin').prop('checked', user.isAdmin)
    })
    .fail((err) => {
      console.error(err)
    })
}
