import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function FunnelResultsPage() {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const currentParams = Object.fromEntries([...searchParams]);
        console.log(currentParams); // get new values onchange
      }, [searchParams]);
    return (
        <>
        </>
    )
}
