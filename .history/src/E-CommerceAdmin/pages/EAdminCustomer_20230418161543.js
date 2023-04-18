import React from 'react'
import HOC from '../layout/HOC'

const EAdminCustomer = () => {
  return (
    <>
        <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Delivery Person{" "}
          </span>
          <button
            onClick={() => {
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add New
          </button>
        </div>
        </section>
    </>
  )
}

export default HOC(EAdminCustomer)