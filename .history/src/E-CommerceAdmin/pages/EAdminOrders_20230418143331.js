import React from 'react'
import { Badge, Table } from 'react-bootstrap'
import HOC from '../layout/HOC'

const EAdminOrders = () => {
  return (
    <>
        
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Order's
          </span>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Number</th>
              <th>date</th>
              <th>Customer</th>
              <th>Paid</th>
              <th>Status</th>
              <th>Items</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             <td> #1 </td>
             <td> June 26, 2021 </td>
             <td> Jessica Moore </td>
             <td><Badge bg='success'>Paid</Badge> </td>
             <td><Badge bg='success'>Shipped</Badge> </td>
            
            </tr>
          </tbody>
        </Table>

        </section>
    </>
  )
}

export default HOC(EAdminOrders)