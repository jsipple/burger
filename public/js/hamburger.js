$('#devour').on('click', (e) => {
 const id = $(this).data('id')
 $.ajax('/api/burgers' + id, {
  type: 'PUT',
  data: {devoured: true}
 }).then(() => {
  console.log(`devoured ${this.data.burger_name}`)
  location.reload()
 })
})

$('.create-form').on('submit', e => {
 e.preventDefault()
 const newBurger = {
  name: $("#name").val().trim()
 }
 $.ajax('/api/burgers', {
  type: 'POST',
  data: newBurger
 }).then(() => {
  console.log(`added ${newBurger.name}`)
  location.reload
 })
})