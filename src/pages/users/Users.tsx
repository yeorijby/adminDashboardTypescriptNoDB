import { DataTable } from '../../components/dataTable/DataTable';
import './users.scss';

export const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataTable />
    </div>
  )
}
