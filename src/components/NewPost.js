const NewPost = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://minitwitterbackend.herokuapp.com/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: e.target.message.value,
        userId: '61682251fc694e5e2ee07445',
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' id='message'></input>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default NewPost
