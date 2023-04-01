import {useState} from 'react';
//passing the props of data and removeTour
function Card({id,image,info,price,name,removeTour}){

    const[readmore,setReadmore] = useState(false);
    const description = readmore ? info:`${info.substring(0,200)}....  `; //it will show only upto 200 string from info and then hide

    // function for readmore handler 
    function readmoreHandler(){
        setReadmore(!readmore); //it change if readmore is false then it will show showless
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price">₹ {price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? `Show Less` : `Read More`}
                </span>
            </div>
            </div>
            <button className="btn-NI" onClick={() => removeTour(id)}>
                Not Interested
                </button>
        </div>
    )
}

export default Card;