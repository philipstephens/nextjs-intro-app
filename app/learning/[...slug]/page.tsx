'use client'
export default function Page() {
    function clickMe() {
        alert('Client component');
    }
    return  <button onClick={clickMe}>Click me</button>
}
