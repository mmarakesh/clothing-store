function Clothes ({apple}) {
    return(
        <div className="products">
            {apple.map(item => {
                const {id, name, price, image} = item;
                return(
                    <div className="product-card" key={id}>
                        <img src={image} alt="clothes" width="400px" height="500px"/>
                        <h3> {name} </h3>
                        <h4>$ {price} </h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Clothes;