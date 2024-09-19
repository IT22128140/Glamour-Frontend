import { MdOutlineCancel } from 'react-icons/md'
import PropTypes from 'prop-types'

const ShowStoreItem = ({item, onClose}) => {

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] overflow-scroll max-h-full max-w-full h-auto bg-white rounded-xl p-4 flex flex-col relative"
      >
        <h1 className=" text-primary text-3xl my-4 font-Philosopher text-center">
          Store Product Details
        </h1>
        <MdOutlineCancel
          className="absolute top-6 right-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
          <div className="flex flex-col w-full items-center font-BreeSerif rounded-xl">
            <img src={item.image} className='w-60 h-60' ></img>
            <div className="flex flex-row w-[80%] justify-between mt-4">
              <div className="flex flex-col">
                <label className="ml-0.5 mb-1">Product Id</label>
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  type="text"
                  id="name"
                  value={item.productId}
                  name="name"
                  disabled
                />
              </div>
              <div className="flex flex-col ">
                <label className="ml-0.5 mb-1">Product Name</label>
                <input
                  className="h-11 p-2  border-gray-200 rounded-md border-2  shadow-sm "
                  label="Product Name"
                  type="text"
                  id="name"
                  value={item.name}
                  name="name"
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-col w-[80%] mt-4">
              <label className="ml-0.5 mb-1">Description</label>
              <input
                className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                type="text"
                id="description"
                value={item.description}
                name="description"
                disabled
              />
            </div>
            <div className="flex flex-row w-[80%] justify-between mt-4">
              <div className="flex flex-col">
                <label className="ml-0.5 mb-1">Min Price</label>
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  type="text"
                  id="minprice"
                  value={item.minprice}
                  name="minprice"
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <label className="ml-0.5 mb-1">Max Price</label>
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  type="text"
                  id="maxprice"
                  value={item.maxprice}
                  name="maxprice"
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-row w-[80%] justify-between mt-4">
              <div className="flex flex-col">
                <label className="ml-0.5 mb-1">Sales Difference</label>
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  type="text"
                  id="salesdifference"
                  value={item.salesdifference}
                  name="salesdifference"
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <label className="ml-0.5 mb-1">Price Increase</label>
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  type="text"
                  id="priceincrease"
                  value={item.priceincrease}
                  name="priceincrease"
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-row w-[80%] justify-between mt-4">
              <div className="flex flex-col">
                <label className="ml-0.5 mb-1">Category</label>
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  type="text"
                  id="category"
                  value={item.category}
                  name="category"
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-row w-[80%] justify-between mt-4">
              <div className="flex flex-col">
                <label className="ml-0.5 mb-1">Trending</label>
                <select
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  id="trending"
                  value={item.trending}
                  name="trending"
                  disabled
                >
                  <option value="" hidden>Select</option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="ml-0.5 mb-1">Stock</label>
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  type="text"
                  id="stock"
                  value={item.stock}
                  name="stock"
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-row w-[80%] justify-between mt-4">
              <div className="flex flex-col w-[50%]">
                <label className="ml-0.5 mb-1">Colors</label>
                <div className="flex flex-row">
                  {item.colors.map((color) => (
                    <div
                      key={color}
                      className="m-1 p-2 bg-gray-200 text-gray-700 font-semibold rounded-md"
                    >
                      {color}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-[50%]">
                <label className="ml-0.5 mb-1">Sizes</label>
                <div className="flex flex-row">
                  {item.sizes.map((size) => (
                    <div
                      key={size}
                      className="m-1 p-2 bg-gray-200 text-gray-700 font-semibold rounded-md"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

ShowStoreItem.propTypes = {
  item: PropTypes.object,
  onClose: PropTypes.func,
}

export default ShowStoreItem