import style from "./Home.module.scss"
import Link from "next/link"

const Card = ({title,url,img}) => {
    return(
        <Link href={url} className={style.link} target="_blank">
            <div className={style.Card}>
                <h1>{title}</h1>
            </div>
        </Link>
    )
}

export default Card