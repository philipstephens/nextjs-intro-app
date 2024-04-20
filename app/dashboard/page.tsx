import {Suspense} from 'react';
import Country from '../components/country';

export default async function page() {
    const html = 
            <>
                <Suspense fallback={<p>Loading...</p>}>
                    <Country/>
                </Suspense>
                <div>Show another UI while the first one loads.</div>
            </>

    return (html)
}
