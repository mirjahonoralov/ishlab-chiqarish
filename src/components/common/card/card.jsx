import card_image from "./../../../assets/icons/mijoz_tahlili/cart.svg"
function Card({data}) {
    return(
        <>
        <div className="card">  
            <img className="card_image" src={card_image} width={40} height={40} alt={card_image}/>
            <h3 className="card-heading">{data.name}</h3>
            <p className="card-padding">{data.title}</p>
        </div>
        </>
    )
}
export default Card