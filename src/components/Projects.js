import projectImg1 from'../assets/todo.jpg';
import projectImg2 from'../assets/otp.jpg';
import projectImg3 from'../assets/time.jpg';

export default function Projects(){
    const config={
        projects:[
            {
                image:projectImg1,
                description:'ToDo list using ReactJs',
                link:'https://listworks.vercel.app/'
            },
            {
                image:projectImg2,
                description:'OTP Authendication using MEAN Stack',
                link:'https://github.com/DineshKumar115/ALTERNATE_OTP'
            },
            {
                image:projectImg3,
                description:'Event Scheduler using NextJs',
                link:'https://github.com/DineshKumar115/event-scheduler'
            },
        ]
    }
    return <section id='projects' className="flex flex-col py-11 justify-center bg-primary text-white " >
        <div>
        <div className="flex flex-col px-10 py-20">
            <h1 className='text-4xl  border-b-4 border-secondary  w-[175px] font-bold'>PROJECTS</h1>
            <br />
            <br />
            <p>These projects are my finest ones. These were created using HTML, CSS, JS, and ReactJS. Look them up .</p>
        </div >
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-10'>
           {config.projects.map((projects)=>(
            
            <div className='relative'>
                <img className='h-[200px] w-[500px] ' src={projects.image}/>
                <div className='project-desc' >
                    <p className='text-center px-5 py-5'>{projects.description}</p>
                    <div className='flex justify-center'> 
                <a className='btn'  href={projects.link}>View Project</a>
                </div>
                </div>
                
            </div>
            
            ))}
           
           
           </div>
           <div id='skillss'></div>
            </div>
<br/>
        
    </section>
}