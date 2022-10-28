const Card = ({ item, onClick }) => {
  return (
    <div className="w-full h-44 bg-white p-4 rounded-lg drop-shadow-md cursor-pointer" onClick={onClick}>
      <div className="h-4/5">
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
      <div className="flex justify-between h-1/5 text-sm">
        <p>{item.price}</p>
        <p className="text-blue-600">{item.qty} available</p>
      </div>
    </div>
  );
}

export default Card;
