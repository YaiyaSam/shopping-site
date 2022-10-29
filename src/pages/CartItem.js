import { HiOutlineTrash } from "react-icons/hi";

const CartItem = ({item}) => {

    const removeItem = () => {
    //delete request to remove a product
    };

    return(
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-1/5"> 
              <div class="flex flex-col justify-between ml-2 flex-grow">
                <p className="font-semibold">{item.name}</p>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <div className="w-2/5">
                <input
                  type="number"
                  defaultValue={item.qty}
                  className="text-center outline-none border-2 border py-1 w-4/5 rounded-lg"
                />
              </div>
            </div>
            <p className="text-center w-1/5 font-semibold text-sm">{item.price}</p>
            <p className="text-center w-1/5 font-semibold text-sm">{parseInt(item.price?.slice(0, -1)) * item.qty}$</p> 
            <div class="flex justify-center w-1/5">
              <HiOutlineTrash color="red" size="20px" onClick={removeItem}/>
            </div>
          </div>
    )
}

export default CartItem;
