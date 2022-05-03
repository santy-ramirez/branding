import { useState } from 'react'



 function Search (){
 const [count, setCount] = useState(0)

 const Hadlesubmit = (e) => {
	e.preventDefault()
 }

 	return(
 		<>
 			<form>
  				<label>
   					 Name:{count}
   					 <input type="text" name="name" />
  				</label>
  				<input type="submit" value="agregar" onClick={Hadlesubmit} />
			</form>
 		</>
 		)
 }


 export default Search