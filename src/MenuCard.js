const MenuCard = (props) => {

    const { itemName, price, description } = props;

    return (
        <div className="column category">
            <div className="row">
                <h3>{itemName}</h3>
                <p className="cover">{price}</p>
            </div>
            <p>{description ? description : ""}</p>
        </div>
    )
}

export default MenuCard