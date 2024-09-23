export default function Resume(){
const config={
    link:'https://drive.google.com/file/d/15TNVE6J7tXqQv1MH1x7DFLm6n4KZNZ0M/view?usp=sharing'
}

    return<section className="pt-4 pb-4 text-white text-bold">
        <div className='resume'>
        <a className='bton' href={config.link}>View CV</a>
        </div>
    </section>
}