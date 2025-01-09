import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props = {
    slug : string;
    columns: GridColDef[];
    setOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

export const Add = (props:Props) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: () => {
            //console.log(props.slug);
            return fetch(`http://localhost:8800/api/${props.slug}`, {
                method: "post",
                headers :{
                    Accept : "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id:111, 
                    img:"",
                    lastName:"Hello",
                    firstName:"Test",
                    email:"testme@gmail.com",
                    phone:"123-456-789",
                    createAt:"01.02.2025",
                    verified:true,
                }),
            });
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:[`all${props.slug}`]});//-
        }
    });

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        //add new item
        mutation.mutate();
        props.setOpen(false);
    }
    return (
        <div className='add'>
            <div className="modal">
                <span className="close" onClick={()=>props.setOpen(false)}>X</span>
                <h1>Add New {props.slug}</h1>
                <form action="" onSubmit={handleSubmit}>
                    {
                        props.columns
                        .filter((item) => item.field !== "id" && item.field !== "img")
                        .map((column) => (
                            <div className="item">
                                <label htmlFor="">{column.headerName}</label>
                                <input type={column.type} placeholder={column.field} />
                            </div>
                        ))
                    }
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}
