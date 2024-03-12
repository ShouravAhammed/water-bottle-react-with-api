import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    
    const {name, img, price} = bottle
    


    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h3>bottle: {name}</h3>
            <p>Price: {price}tk</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;