import OrderedItemCard from "./orderedItemCard";
import OrderTotal from "./OrderTotal";
const CashierHomeRight = ({ setOrder, order }) => {
  return (
    <div className="h-[200px] sticky top-0  bg-red-90">
      <header className=" flex p-3 pt-0 mb-5 text-white">
        <div>
          <p className="text-2xl">Table 5</p>
          <p className="text-l mt-2 text-gray-400">Oliver Queen</p>
        </div>
      </header>

      <div className="  item__point flex flex-col gap-6">
        {order.length > 0 && (
          <section className="flex flex-col gap-2 max-h-[350px] overflow-hidden hover:overflow-auto hover:overflow-x-hidden pr-3">
            {order.map((item, i) => (
              <OrderedItemCard
                item={item}
                i={i}
                order={order}
                setOrder={setOrder}
                key={item.id}
              />
            ))}
          </section>
        )}
        <OrderTotal order={order} />
      </div>
    </div>
  );
};

export default CashierHomeRight;
