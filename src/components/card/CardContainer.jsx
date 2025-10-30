import Card from "./Card";

function CardContainer() {
    return ( 
        <div className="my-8">
            <h1 className="font-bold text-lg md:text-2xl xl:text-3xl text-center mb-5">Premium e'lonlar</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Card items go here */}
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
     );
}

export default CardContainer;