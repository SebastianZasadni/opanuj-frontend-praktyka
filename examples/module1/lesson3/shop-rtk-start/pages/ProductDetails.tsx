import { useParams } from 'react-router-dom';
import { addToCart } from '../state/cartSlice';
import { useGetProductsQuery } from '../services/products';
import { CartItem } from '../types/CartItem';
import { useAppDispatch } from '../hooks/rtk';

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductsQuery(null);

  if (!data) {
    return;
  }

  const product = data.find((item: CartItem) => {
    return item.id === parseInt(id!);
  });

  const { title, price, description, image } = product;
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div>
          <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                  <img
                    className="max-w-[200px] lg:max-w-xs"
                    src={image}
                    alt=""
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                    {title}
                  </h1>
                  <div className="text-2xl text-red-500 font-medium mb-6">
                    $ {price}
                  </div>
                  <p className="mb-8">{description}</p>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="bg-green-600 py-4 px-8 text-white"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
