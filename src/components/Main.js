
import heroImageMobile from '../images/image-hero-mobile.png'
import heroImageDesktop from '../images/image-hero-desktop.png'
import databiz from '../images/client-databiz.svg'
import audiophile from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'
import './Main.css'
import { useState } from 'react'

function Main() {
    return (
        <section id="main" className="main display_flex flex_direction_column align_items_center">
            <picture className="hero_image">
                <source media="(max-width:692px)" srcSet={heroImageMobile} />
                <source media="(min-width:692px)" srcSet={heroImageDesktop} />
                <img src={heroImageDesktop} />
            </picture>
            <section className="hero_text display_flex flex_direction_column align-items_center">
                <h1 className="text_align_center">Make Remote Work</h1>
                <p className="text_align_center">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <a className="text_align_center display_block" href="#">Learn More</a>
                <section className="clients display_flex flex_direction_row justify_content_space_between align_items_center">
                    <picture><img src={ databiz } /></picture>
                    <picture><img src={ audiophile } /></picture>
                    <picture><img src={ meet } /></picture>
                    <picture><img src={ maker } /></picture>
                </section>
            </section>
        </section>
    )
}

export default Main