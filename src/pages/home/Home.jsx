import React from "react"
import banner from "../../assets/banner.webp"

export default function Home() {
    return (
       <main>
            <img className="home-banner" src={banner} alt="banner" />
       </main>
    )
}