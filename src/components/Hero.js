import Resume from './Resume';
// import heroimg from '../assets/hero1.jpg'
export default function Hero(){
       const config = {
    subtitle:'Front-End Developer & UI Designer',
       }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' id='home'>
        
        <div className='flex flex-col' ><br></br>
        <p className='text-2xl text-white font-hero-font'>Hi., I'm</p>
        <h1 className=' w-1/2 py-0 text-white text-6xl justify-center mr-5 font-hero-font name'><span>DINESH KUMAR V</span>  </h1>
        <p className='text-2xl text-white'>{config.subtitle}</p>
        <Resume/>
        </div>
        <div className='prof_img'>
            <div className='color_border'>
                <div className='img'> </div>
                {/* <img className='md:w-1/4' id='img' src={heroimg}/> */}
            </div>
        </div>
       
     
        

    </section>
}
