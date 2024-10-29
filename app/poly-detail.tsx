import React, { useState } from "react";
import { QueueHeader } from "~/components/queue";

const polyData = {
    id: "1",
    name: "poli gigi",
    image: "",
    clinic: {
        name: "Klinik Permata",
        isVerified: true,
        address: "Unnamed Road, Sekar Putih, SekarPutih, Bagor, Nganjuk Regency, East Java 64461"
    },
    queue: [
        {
            id: "",
            status: "COMPLETED",
            sequence: 1,
            userId: ""
        },
        {
            id: "",
            status: "ON_GOING",
            sequence: 2,
            userId: ""
        },
        {
            id: "",
            status: "WAITING",
            sequence: 3,
            userId: ""
        },
    ]
}

interface Queue {
    id: string
    status: string
    sequence: number
    userId: string
}

interface Clinic {
    name: string
    isVerified: boolean
    address: string
}

interface Poly {
    id: string
    name: string
    image: string
    clinic: Clinic
    queue: Queue[]
}

export function QueueScreen() {
    const [ { id, name, clinic, queue }, setDate] = useState<Poly>(polyData)
    return (
        <>
            <QueueHeader clinicname={clinic.name} isVerified={clinic.isVerified} poly={name} address={clinic.address} />
        </>
    )
}