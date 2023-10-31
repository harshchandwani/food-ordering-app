import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
    return (
        <div>
            <div>
                {items.map((item) => (
                    <div 
                        key={item.card.info.id}
                        className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between ">
                        <div className="py-2">
                            <span className="font-semibold">{item.card.info.name}</span>
                            <span className="font-semibold text-right">
                                - Rs.
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4 text-right">
                            <img className ="w-full" src={CDN_URL + item.card.info.imageId} />
                            <button className="p-2 bg-white shadow-lg absolute m-auto"></button>
                        </div> 
                       
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default ItemList;