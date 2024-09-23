export default  function Header(){
    //  const [toggleMenu ,setToggleMenu]=useState(false)
    return <header className=" font-bold">
        <nav className="navbar">
        <ul className="flex text-white">
            <li><a href="/#home" >Home</a></li>
            <li><a href="/#about" >About</a></li>
            <li><a href="/#skil" >Skills</a></li>
            <li><a href="/#projects" >Project</a></li>
            {/* <li><a href="/#resume" >Resume</a></li> */}
            <li><a href="/#contact" >Contact</a></li>
        </ul>
        </nav>
       {/* { toggleMenu &&< nav className="block md:hidden ">
        <ul onClick={()=>setToggleMenu(!toggleMenu)}className="flex flex-col text-white mobile-nav">
            <li><a href="#" >HOME</a></li>
            <li><a href="#about.js" >ABOUT</a></li>
            <li><a href="#projects" >PROJECT</a></li>
            <li><a href="#resume" >RESUME</a></li>
             <li><a href="#contact" >CONTACT</a></li>


        </ul>
        </nav>}
        <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button> */}
    </header>
}