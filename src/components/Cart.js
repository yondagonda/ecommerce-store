import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Cart = ({
  cart,
  setCart,
  setIsCartOpen,
  setSelectedGame,
  total,
  isCartOpen,
}) => {
  const onDelete = (id) => {
    setCart(cart.filter((game) => game.id !== id));
    setSelectedGame();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <div
            className={`negativeSidebar fixed left-0 h-full bg-zinc-800 brightness-50 
              opacity-70 z-10`}
          ></div>

          <motion.aside
            key="cart"
            className="fixed right-0 h-full bg-zinc-800 z-10"
            initial={{ width: '0px' }}
            animate={{
              width: 'auto',
              transition: {
                width: {
                  duration: 0.4,
                },
              },
            }}
            exit={{
              width: 0,
              transition: {
                width: {
                  duration: 0.4,
                },
              },
            }}
          >
            <div
              className="text-slate-50 flex flex-col justify-between h-full 
          p-6 w-[330px] xs:w-[360px] sm:w-[400px] lg:w-[420px] xl:w-[470px] 2xl:w-[520px] 2xl:p-10
          3xl:w-[600px]"
            >
              <section>
                <div className="flex justify-between mb-4">
                  <h2 className="text-xl sm:text-3xl font-secondary select-none">
                    My Cart
                  </h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="hover:text-blue-200 duration-100 2xl:text-lg"
                  >
                    Close
                  </button>
                </div>

                <main className="flex flex-col gap-3">
                  <AnimatePresence>
                    {cart.map((cartItem, i) => {
                      return (
                        <motion.li
                          whileTap={{ scale: 0.99 }}
                          transition={{
                            duration: 0.1,
                          }}
                          variants={{
                            hidden: {
                              opacity: 0,
                              x: 50,
                            },
                            visible: (i) => ({
                              opacity: 1,
                              x: 0,
                              transition: { delay: i * 0.1 },
                            }),
                            removed: {
                              opacity: 0,
                            },
                          }}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          exit="removed"
                          key={cartItem.id}
                          className="flex justify-between bg-zinc-700 p-4 rounded-xl cursor-default 
                          select-none items-center"
                        >
                          <h4 className="font-bold lg:text-lg 3xl:text-xl">
                            {cartItem.title}
                          </h4>
                          <div className="flex items-center gap-2.5">
                            <h5 className="sm:text-lg 2xl:text-xl">
                              ${cartItem.price}
                            </h5>
                            <button
                              className="px-2 py-0.5 bg-zinc-800 rounded-full hover:text-red-500 duration-100"
                              onClick={(e) => onDelete(cartItem.id)}
                            >
                              ✕
                            </button>
                          </div>
                        </motion.li>
                      );
                    })}
                  </AnimatePresence>
                </main>
              </section>

              <section className="flex justify-around items-center  font-secondary">
                <h3 className="text-lg sm:text-xl 2xl:text-2xl">
                  {cart.length > 0 ? `Total: $${total}` : `Total: $0`}
                </h3>
                <motion.button
                  whileTap={{ scale: 0.93 }}
                  className="text-xl sm:text-2xl  cursor-pointer select-none outline-none"
                >
                  Checkout ➜
                </motion.button>
              </section>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
