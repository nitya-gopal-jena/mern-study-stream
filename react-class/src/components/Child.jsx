
const Child = () => {
  let age = 15
  // if (age >= 18) {
  //   return <h1>The Person is eligible for voting</h1>
  // } else {
  //   return <h1>The Person is not eligible for voting</h1>
  // }


  return (
    <>
      {age>=18 ? <h1>Eligible for voting</h1> : <h1>Not Eligible for voting</h1>}
    </>
  )
}

export default Child