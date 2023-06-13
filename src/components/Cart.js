export const Cart = ({
  cart,
  setCart,
  setIsCartOpen,
  setSelectedGame,
  total,
}) => {
  console.log(cart);

  const onDelete = (id) => {
    console.log(id);
    setCart(cart.filter((game) => game.id !== id));
    setSelectedGame();
  };

  return (
    <>
      <div
        className={`negativeSidebar fixed left-0 h-full bg-zinc-800 brightness-50 
        opacity-70 z-10`}
      ></div>

      <div
        className="fixed right-0 h-full bg-zinc-800
        w-[70%] sm:w-[400px] lg:w-[420px] xl:w-[470px] 2xl:w-[520px] z-10 p-6 
        sidebar"
      >
        <div className="text-slate-50 flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between mb-4">
              <div className="text-3xl">My Cart</div>
              <button onClick={() => setIsCartOpen(false)}>Close</button>
            </div>

            <div className="flex flex-col gap-3">
              {cart.map((cartItem) => {
                return (
                  <div
                    key={cartItem.id}
                    className="flex justify-between bg-zinc-700 p-4 rounded-xl"
                  >
                    <div className="font-bold">{cartItem.title}</div>
                    <div className="flex items-center gap-2.5">
                      <div>${cartItem.price}</div>
                      <button
                        className="px-2 bg-zinc-800 rounded-full"
                        onClick={(e) => onDelete(cartItem.id)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div>{cart.length > 0 ? `Total: $${total}` : `Total: $0`}</div>
            <div className="text-2xl">Checkout ➜</div>
          </div>
        </div>
      </div>
    </>
  );
};
