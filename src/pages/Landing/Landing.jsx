const Landing = ({ user }) => {
  return (
    <div>
      <main className="flex-auto bg-black text-yellow-600 text-center text-xl">
        <h1>hello, {user ? user.name : 'sign in to make an offering'}</h1>
        <img src="../logo.gif" alt="idol" />
        <img src="../fuzz-1.gif" alt="fuzz-1" />
        <img src="../fuzz-2.gif" alt="fuzz-2" />
      </main>
    </div>
  )
}

export default Landing