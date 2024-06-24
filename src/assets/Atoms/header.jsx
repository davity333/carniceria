import React from "react";
function Header({children}){
return(
<>
    <header className='flex bg-red-500 h-36 items-center px-4' >
        {children}
    </header>
</>


)
}
export default Header;

