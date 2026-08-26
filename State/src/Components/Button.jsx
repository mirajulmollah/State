function Button({ color,setColorchange,children}) {

  function news(){
    setColorchange(color)
  }
  return (
    <div>
        <button onClick={news} style={{backgroundColor:color}} className="w-32 px-5 py-2 mt-2 rounded-xl text-black font-semibold shadow-md hover:scale-105 transition duration-200" >{children}</button>
    
    </div>
  )
}
export default Button