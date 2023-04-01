import Card from './Card';

// passing props of tours and removeTour
function Tours({tours , removeTour}){
    return (
        <div className="wrapper">
            <div>
                <h1 className="title1">Plan With Love</h1>
            </div>
            <div className="cards">
                {/* for handling each and every data we use map function method. If we are using map function then we must pass the key it is a wise choice thats why tour.id and {...tour} it will cloning the data */}
                {
                 tours.map((tour) => {
                        return <Card key = {tour.id} {...tour} removeTour={removeTour}></Card>
                    })
            }
            
            </div>
        </div>
    )
}

export default Tours;

