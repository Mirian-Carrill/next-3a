import "./login.css"


export default function login (){
    email:""
    password:""

})

   const handlechange = (event) => {
    console.log(event)
    const {name,value }= event.target;
    setstae({
        ...state,
        
    })
 
   }
   
   return(
    <div className="cointainer">

        <input opChange={handlechange}
         name="email"
         values={state.email}
         type="text"
         placeholder="email" 
        />


        <input 
            type="password"
            onChange={handlechange}
            type="password" 
            placeholder="123456"
        />
        <button>login</button>
    </div>
   )


}