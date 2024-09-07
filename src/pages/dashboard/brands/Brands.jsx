import { Button, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import DefaultLayout from "../../../components/dashboard/DefaultLayout"

const Brands = () => {
  return (
    <DefaultLayout>
    <div className = 'd-flex justify-content-between align-item-center bm-3 mt-2'>
        <h1>Brands</h1>
        <Link to="/admin/brands/new">
            <Button size='sm' className="mt-3">Add New</Button>
        </Link>
     </div>
     <div className = 'card-table animated fadeInDown shadow-sm'>
        <Table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Keterangan</th>                    
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Loading...</td>
                    <td>Loading...</td>
                    <td>Loading...</td>
                    <td>
                        <Link to="/admin/brands/:id">
                        <Button className = 'btn-warning text-white me-2' size = 'sm'>Edit</Button>
                        </Link>
                        <Button className = 'btn-danger' size = 'sm'>Delete</Button>                     
                    </td>
                </tr>
            </tbody>
        </Table>
     </div>
    </DefaultLayout>
  )
}

export default Brands