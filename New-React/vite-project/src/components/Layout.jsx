import gta from './../assets/gta.jpg';
import Card from './Card';

function Layout() {
  return (
    <main className='container-fluid'>
      <div className='row'>
        <Card imgName={gta} />
        <Card imgName={gta} />
        <Card imgName={gta} />
        <Card imgName={gta} />
      </div>
    </main>
  );
}

export default Layout;
