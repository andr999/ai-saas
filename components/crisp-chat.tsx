"use client"

import {useEffect} from "react"
import {Crisp} from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
     Crisp.configure("b4d6069f-b72e-4b4b-8b14-dd5046000959")
    }, [])

    return null
}