import React from 'react'

export default function Skills() {
  return (
    <div className='bg-primary'>
    <div className='title   px-7  py-12' id='skil'>
    <h2 className='text-4xl px-2 py-2  border-b-4 border-secondary  ml-10npm w-[125px] font-bold justify-center text-white'>SKILLS</h2>
    </div>
    <div id='skills'>
    <h2>Programming Skills</h2>

    <div className='prog'>
        <div className='prog_skill' id='prog_c'></div>
        <div className='prog_skill' id='prog_cpp'></div>
        <div className='prog_skill' id='prog_java'></div>
    </div>
    <h2>Technical Skills</h2>

    <div className='tech'>
        <div className='tech_skill' id='tech_html'></div>
        <div className='tech_skill' id='tech_css'></div>
        <div className='tech_skill' id='tech_js'></div>
        <div className='tech_skill' id='tech_rjs'></div>
        <div className='tech_skill' id='tech_sql'></div>
        <div className='tech_skill' id='tech_tab'></div>
        
    </div>
    </div>
    </div>
    
  )
}
