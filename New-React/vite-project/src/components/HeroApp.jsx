import { useState } from 'react';
import HeroList from './heroList';
import HeroInfo from './heroInfo';

let HeroApp = () => {
    let [selectedHero, setSelectedHero] = useState(null)
  return (
    <>
      <section className='container mt-4'>
        <div className='row'>
          <h2>Hero App Section </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae odit excepturi suscipit, tenetur dolor omnis ex quam est minus?</p>
        </div>
        <button className='btn btn-warning'>View More</button>
      </section>

      <section className='container mt-4'>
        <div className='row'>
          <div className='col-8 mt-4'>
            <HeroList onHeroSelect={setSelectedHero} />
          </div>

          <div className='col-4'>
            <HeroInfo hero={selectedHero} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroApp;
