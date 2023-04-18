import React from 'react'
import HOC from '../layout/HOC'

const EAdminCustomer = () => {
  return (
    <>
        <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Customers 
          </span>
        </div>

        <div style={{width  : '100%' , overflow : 'auto'}}>
      <Tabl striped bordered hover >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Nick Name</th>
            <th>Gender</th>
            <th>Religion</th>
            <th>Email Id</th>
            <th>Address</th>
            <th>Birth Country</th>
            <th>Birth City</th>
            <th>Wallet</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>
            <i className='fa-solid fa-trash' onClick={() => toast('User Deleted Successfully')} />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
        </section>
    </>
  )
}

export default HOC(EAdminCustomer)