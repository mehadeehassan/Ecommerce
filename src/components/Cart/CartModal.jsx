const CartModal = ({ children }) => {
  return (
    <div className="w-screen h-screen top-0 left-0 fixed">
      <div className="bg-gray-200 p-5 py-6 rounded-lg absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ">
        {children}
        <button className="px-6 py-2 bg-orange-500 text-white mt-6 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
