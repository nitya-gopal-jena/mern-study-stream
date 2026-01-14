const HeroInfo = ({ hero }) => {
  if (!hero) {
    return <p className='mt-4 text-muted'>Click on a hero row to see details.</p>;
  }

  return (
    <div className='col-12 col-md-6 mt-3'>
      <div className='card shadow-lg '>
        <div className='card-header p-1'>
          <img src={hero.imgUrl} alt={hero.hName} className='img-fluid rounded-top' style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className='card-body'>
          <h3 className='card-title text-primary fw-bold mb-3'>{hero.hName}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <strong>Movies:</strong> {hero.movies}
            </li>
            <li className='list-group-item'>
              <strong>Age:</strong> {hero.age}
            </li>
            <li className='list-group-item'>
              <strong>Place:</strong> {hero.place}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
