import React from 'react';
import heroBcg from './assets/hero.svg'
const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>I'm baby pok pok franzen 90's gochujang shaman irony typewriter street art
                        thundercats distillery vexillologist pork belly cupping live-edge. Lyft succulents occupy,
                        typewriter direct trade knausgaard drinking vinegar hoodie try-hard flannel.
                    </p>
                </div>
                <div className="img-container">
                    <img src={ heroBcg} alt="woman with browser" className='img' />
                </div>
            </div>
        </section>
    );
}

export default Hero;
