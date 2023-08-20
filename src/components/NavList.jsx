// eslint-disable-next-line no-unused-vars
import tailwind from '@/styles/tailwind.css';

function NavList({isHover, handleHover}) {

  const renderList = [
    'Menu',
    'Store',
    "What's New",
    'Story'
  ]
  return (
    <>
      <ul className="navListWrapper" >
        {renderList.map((item) => {
          return <li 
            key={item} 
            className="navList" 
            onMouseEnter={handleHover} 
            onMouseLeave={handleHover} >{item}</li>;
        })
      }
      </ul>
    </>
  )
}

export default NavList