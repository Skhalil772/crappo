function Coin({ Icon, Title, Abb, Det }) {
  return (
    <div className="lg:max-w-xs max-w-md cursor-pointer     ">
      <div className="items-center space-y-6 p-3 flex flex-col ">
        <img className="w-20 h-20 rounded-full" src={Icon} alt="" />
        <h3 className="">
          <span className="text-4xl font-bold"> {Title}</span>
          <span className="text-gray-400 text-2xl  pl-3">{Abb}</span>
        </h3>
        <p className="text-center">{Det}</p>
      </div>
    </div>
  );
}
export default Coin;
