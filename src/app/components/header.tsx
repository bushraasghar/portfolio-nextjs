import { MdMenu } from "react-icons/md";

export default function Header(){
    return(
        <>
        <header className="position-fixed font-serif">
            <div className="bg-slate-500 justify-between top-0 flex left-0 p-5 text-lg font-bold font-regular text-9x1">
                <h1>Bushra Asghar.</h1>
                <div className="gap-6 flex font-serif" >
                    <a href="#home" id="home" className="menuLink">Home</a>
                    <a href="#about" id="about" className="menuLink">About</a>
                    <a href="#education" id="education" className="menuLink">Education</a>
                    <a href="#projects" id="education" className="menuLink">projects</a>
                    <a href="#skills" id="skills" className="menuLink">Skills</a>
                    <a href="#contact" id="contact" className="menuLink">Contact</a>
                    <MdMenu className="md:hidden" size={30}/>
                    </div>   
            </div>
        </header>
        </>
    )
}