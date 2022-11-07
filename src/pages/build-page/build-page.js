import React from 'react';
import { Button, Distance, H1, H5, Section } from '../../components-stateless';
import webbhallenLogo from "./Webhallen-logo-main-blue.svg";
import inStockIcon from "./ready-stock.png";

const retailers = [
    { name: "Komplett", price: "21 300", inStock: true },
    { name: "Inet", price: "20500", inStock: true },
    { name: "Webbhallen", price: "19 899", inStock: false },
]

export default function BuildPage() {
    return (
        <>
            <Section>
                <Distance size="32" />
                <H1>Tarzan 1301</H1>
                <Distance size="16" />
                {retailers.map((retailer) => (
                    <div style={{ width: "100%", display: "flex" }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center"}}>
                            <img height="auto" width="100" src={webbhallenLogo} alt="tyst" />
                            <H5>{retailer.name}</H5>
                        </div>
                        <span><img src={inStockIcon}/>Finns i lager</span>
                        <span>{retailer.price} kr</span>
                        <Button>Till Varukorg</Button>
                    </div>
                ))}
            </Section>
        </>
    )
}
