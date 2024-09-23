import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export default function Contact(){
    const config={
        Email:'dineshkumarvadg@gmail.com',
        Phone:'+91 9790540589',
        social:{
            linkedin:'https://www.linkedin.com/in/dinesh-kumar-vadg/',
            insta:'https://www.instagram.com/_.dinesh_kumar._008?utm_source=qr&igsh=MWo3dGtwOWl6bGp1dQ==',
            github:'https://github.com/DineshKumar115'
        }
    }

    return<section className='flex flex-col  bg-primary px-5  py-36 text-white h-'>
        
        <div className='flex  flex-col items-center'>
        <h1 className='text-4xl  border-b-4 text-white  border-secondary  mb-5 w-[167px] font-bold'>CONTACT</h1>
        <p className='pb-5  font-bold' >For Contacts & Get Connect..</p>
        <p className='pb-2'><span className="font-bold">Email:  </span>{config.Email}</p>
        <p className='pb-2'><span className="font-bold">Phone:  </span>{config.Phone}</p>

        </div>
        <div className= ' flex py-8 ml-auto mr-auto'> 
            <a href={config.social.linkedin}className='pr-5 hover:scale-110'><AiOutlineLinkedin size={40} target="_blank"/></a><br/>
            <a href={config.social.github} className='pr-5 hover:scale-110'><AiOutlineGithub size={40} target="_blank"/></a>
            <a href={config.social.insta} className='pr-5 hover:scale-110'><AiOutlineInstagram size={40} target="_blank"/></a>
        </div>
           
        
    </section>
}