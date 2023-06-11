import style from "./Home.module.scss"
import Link from "next/link"

const Card = ({title,url}) => {
    return(
        <Link href={"https://google.com"} className={style.link} target="_blank">
            <div className={style.Card}>
                <h1>{title}</h1>
                <h2>{url}</h2>
            </div>
        </Link>
    )
}

export default Card