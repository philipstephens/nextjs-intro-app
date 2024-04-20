import { CreateToDo } from "./action";
import { CreateButton } from '../components/createButton';

export default async function Page() {
return (
<form action={CreateToDo}>
    <input name="fullName" style={{color: "black"}}></input>
    <CreateButton/>
</form>)
}
