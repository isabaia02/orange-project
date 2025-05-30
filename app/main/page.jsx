import Card from "../../components/Card";
import React from 'react'


export default function MainPage() {
    return (
        <>
        <h1 className="title">LIST OF PLACES</h1>
        <hr></hr>
        <div className="grid">
            {items.map((place) => (
                <Card key={place.id} image={place.image.link} name={place.name} />
            ))}
        </div>
        </>
    )
}