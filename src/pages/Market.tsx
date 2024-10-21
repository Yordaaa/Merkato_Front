import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Product from "../components/Product";


const sortOptions = [
  { name: "Date: Old to New", value: "createdAt", current: false },
  { name: "Date: New to Old", value: "-createdAt", current: false },
  { name: "Price: Low to High", value: "price", current: false },
  { name: "Price: High to Low", value: "-price", current: false },
];

export default function Market() {
  const [isMobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <>
      <div className=" pt-24">
        {/* Mobile filter dialog */}
        <Dialog
          open={isMobileFiltersOpen}
          onClose={() => setMobileFiltersOpen(false)}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="relative ml-auto h-full w-full max-w-xs flex flex-col bg-white py-4 pb-12 shadow-xl">
              <div className="flex justify-between pr-1 pl-4 pt-20 items-center">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="h-10 w-10 rounded-md  text-gray-400 text-3xl"
                >
                  <span className="sr-only">Close menu</span>&times;
                </button>
              </div>

              {/* Filters for mobile view */}
              <div className="mt-4 border-t border-gray-200">
               
                  <Disclosure
          
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                        label
                        </span>
                        <span className="ml-6 flex items-center">
                          <i className="fas fa-plus group-data-[open]:hidden" />
                          <i className="fas fa-minus [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label className="ml-3 flex-1 text-gray-500">
                            option
                          </label>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                
              </div>
              <div className="mt-4 border-t border-gray-200">
                                <p className="font-medium text-gray-900 ml-4 mt-8">
                                    <span>Price Range</span>
                                    <form className="grid grid-cols-2 gap-4 mt-4" >
                                        <input
                                            type="text"
                                
                                            name="min"
                                            id="min"
                                            placeholder="min..."
                                            className="w-20 border  border-grey rounded"
                                        />

                                        <input
                                            type="text"
                                            
                                            name="max"
                                            id="min"
                                            placeholder="max..."
                                            className="w-20 border border-grey rounded"
                                        />
                                    </form>
                                </p>
                            </div>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-4xl font-bold text-gray-900">Products</h1>

            <div className="flex items-center">
              <div className="relative text-left">
                <div className="group inline-flex text-md font-medium text-gray-700 hover:text-gray-900">
                  <div className=" text-sm origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5">
                    <select>
                      {sortOptions.map(({ name, value }) => (
                        <option key={value} value={value}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                >
                  <i className="fas fa-filter h-5 w-5" />
                  <span className="sr-only">Filters</span>
                </button>
              </div>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <div className="hidden lg:block">
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">label</span>
                      <span className="ml-6 flex items-center">
                        <i className="fas fa-plus group-data-[open]:hidden" />
                        <i className="fas fa-minus [.group:not([data-open])_&]:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label className="ml-3 text-sm text-gray-600">
                          option
                        </label>
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>

                <div className="mt-4 min-h-60">
                  <p className="font-medium mt-8">
                    <span className="text-gray-900">Price Range</span>
                    <form className="grid grid-cols-3 gap-4 mt-4">
                      <input
                        type="text"
                        name="min"
                        id="min"
                        placeholder="min ($)"
                        className="w-20 border  border-grey rounded"
                      />

                      <input
                        type="text"
                        name="max"
                        placeholder="max($)"
                        className="w-20 border border-grey rounded"
                      />
                    </form>
                  </p>
                </div>
              </div>
              <div className="lg:col-span-3">
                <>
                  <Product />
                </>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
