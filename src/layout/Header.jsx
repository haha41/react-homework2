import Navigation from '@/components/Navigation';

function Header() {
  return (
    <header className="header">
      <div className='headerWrapper'>
        <h1 className="logo" >
          <a href="#">
            <img src="/public/logo.png" alt="맥도날드" />
          </a>
        </h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
