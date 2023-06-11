import style from "./Home.module.scss"
import Link from "next/link"

const Card = ({title,url}) => {
    return(
        <>
            <a 
            className={style.link}
            href={url} 
            target="_blank" 
            rel="noopener noreferrer">
            <div className={style.Card}>
                <h1>{title}</h1>
            </div>
            </a>
        </>
    )
}

export default Card