import AboutImg from'../assets/about1.png'
export default function About(){
   /* const config={
        line1:'',
        iine2:'',
        line3:''
    }*/
    return<div id='about'>
       <section className='flex flex-col md:flex-row bg-primary px-10 py-20'>
        <div className='py-5 md:w-1/2 mb-5'>
            <img  src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white' >
        <h1 className='text-4xl  border-b-4 border-secondary  mb-5 w-[190px] font-bold'>ABOUT ME</h1>
        <p className='pb-5'>Hi, I'm Dineshkumar V, A B.Tech student in Computer Science and Business Systems. I'm passionate about web application development and have experience with front-end technologies like React.js, HTML, CSS, and JavaScript.</p>
        <p>My goal is to find a role where I can apply my skills, continue learning, and stay current with the latest technologies to help drive the success of the company I work with.</p>
        {/* <p className='pb-5'>Beyond my technical skills, I’m a strong advocate for user-centered design. I believe in the power of empathy and research to drive decisions that make a real difference in the user experience. Collaboration is at the heart of my process, and I enjoy working closely with designers, developers, and stakeholders to bring ideas to life.</p> */}
        </div>  
           
        </div>
    </section> 
    </div>

    
}