import React from "react";
import { useForm } from "react-hook-form";
function EditProduct() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container h-full flex items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 flex flex-col justify-center m-auto"
      >
        <div className="mb-6">
          <label
            htmlFor="s"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Product Id
          </label>
          <input
            type="number"
            id="s"
            {...register("id", {
              required: true,
              minNumber: 0,
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Edit Product Id"
          />
          {errors.id && (
            <p className="text-red-500 text-left">Product Id required</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Product Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: true,
              minLength: 5,
              maxLength: 15,
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Product Title"
          />
          {errors.title && (
            <p className="text-red-500 text-left">Product Title required</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", { required: true, minNumber: 5 })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.price && (
            <p className="text-red-500 text-left">Product Price required</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Description{" "}
          </label>
          <input
            type="text"
            id="description"
            {...register("description", {
              required: true,
              minLength: 8,
              maxLength: 25,
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.description && (
            <p className="text-red-500 text-left">description required </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            İmage Url
          </label>
          <input
            type="url"
            name="image"
            {...register("url", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.url && <p className="text-red-500 text-left">invalid url</p>}
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              {...register("checkbox", { required: true })}
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 flex flex-col text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
            {errors.checkbox && (
              <p className="text-red-500 text-left">check please !! </p>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
