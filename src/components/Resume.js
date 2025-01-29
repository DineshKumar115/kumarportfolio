export default function Resume(){
const config={
    link:'https://drive.google.com/file/d/18HC6h9Mck3PuJ-AdCWICd0WN6kA6N4jY/view?usp=sharing'
}

    return<section className="pt-4 pb-4 text-white text-bold">
        <div className='resume'>
        <a className='bton' href={config.link}>View CV</a>
        </div>
    </section>
}
