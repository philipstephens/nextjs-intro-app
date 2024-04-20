"use client"

import { useFormStatus } from "react-dom"

export function CreateButton() {
    const {pending} = useFormStatus()
    return <button disabled={pending} type="submit" style={{background:"white", padding:"5px", color:"#000"}}>submit</button>
};