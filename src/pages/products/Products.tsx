import { useState } from 'react';
import './products.scss';
import { DataTable } from '../../components/dataTable/DataTable';
import { Add } from '../../components/add/Add';
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../data';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: 'img',
      headerName: 'Image',
      width: 100, 
      renderCell(params) {
          return <img src={params.row.img } alt="" />
      },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    type: "string",
    headerName: "Producer",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "InStock",
    width: 150,
    type: "boolean",
  },
];



export const Products = () => {
  const [open, setOpen] = useState(false);  
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>{setOpen(true)}}>Add New Product</button>
      </div>
      <DataTable slug="product" columns={columns} rows={products}/>
      {open && <Add slug="product" columns={columns} setOpen={setOpen}/>}      
    </div>
  )
}
