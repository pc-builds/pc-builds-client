import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetBuilds } from '../../api';
import { Hero, Section } from '../../components-stateless';
import { Builds } from '../../components';
import useOnlyOnUpdateEffect from '../../hooks/use-only-update-effect';

const getSearcParamValues = (searchParams) => Object.fromEntries([...searchParams])

export default function FunnelResultsPage() {
    const [searchParams] = useSearchParams();
    const [searchParamValues, setSearchParamValues] = useState(() => getSearcParamValues(searchParams));
    const { data, isLoading, isError } = useGetBuilds(searchParamValues);

    useOnlyOnUpdateEffect(() => {
        setSearchParamValues(getSearcParamValues(searchParams));
    }, [searchParams]);

    console.log(data?.data);
    return (
        <>
        <Section>
           <Hero />
        </Section>

         <Section>
            <Builds builds={data?.data}/>
         </Section>
        </>
    )
}
