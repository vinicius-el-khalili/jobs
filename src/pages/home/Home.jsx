import style from "./Home.module.scss"
import Card from "./card"

const data = [
    {
        title:"Glassdoor",
        url:"https://www.glassdoor.com/",
        img:"",
    },
    {
        title:"Linkedin",
        url:"https://www.linkedin.com/",
        img:"",
    },
    {
        title:"Catho",
        url:"https://www.catho.com.br/",
        img:"",
    },
    {
        title:"Vagas",
        url:"https://www.vagas.com.br/",
        img:"",
    },
    {
        title:"Gupy",
        url:"https://www.gupy.io/",
        img:"",
    },
    {
        title:"Trampos",
        url:"https://trampos.co/",
        img:"",
    },
    {
        title:"Trabalha Brasil",
        url:"https://www.trabalhabrasil.com.br/",
        img:"",
    },
    {
        title:"BNE",
        url:"https://www.bne.com.br/",
        img:"",
    },
    {
        title:"Jobs",
        url:"https://solides.jobs/",
        img:"",
    },
    {
        title:"ProgramaThor",
        url:"https://programathor.com.br/",
        img:"",
    },

]

const Home = () => {
    return(
        <div className={style.Home}>
            {data.map( platform => (
            
            <Card title={platform.title} url={url?platform.url:""} key={platform.title}/>

            ))}
        </div>
    )
}

export default Home