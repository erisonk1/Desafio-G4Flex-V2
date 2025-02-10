import style from "./CardTask.module.css";

function CardTask({ name, desc, date }) { // Desestruturação das props
    return (
        <div className={style.card}>
            <h2 className={style.card_name}>{name}</h2>
            <p className={style.card_desc}>{desc}</p>
            <div className="card_info">
                <p className="card_indo_date">{date}</p>
            </div>
        </div>
    );
}

export default CardTask;
