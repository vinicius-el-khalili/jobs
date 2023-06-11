import style from "./Home.module.scss"
import Card from "./card"
import { data } from "../../../data/data"

const Home = () => {

    return(
        <div className={style.Home}>
            {data.map( platform => (
            
            <Card title={platform.title} url={platform.url} key={platform.title}/>

            ))}
        </div>
    )
}

export default Home