// eslint-disable-next-line no-unused-vars
import tailwind from '@/styles/tailwind.css';

function NavList() {

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
            className="navList">{item}</li>;
        })
      }
      </ul>
    </>
  )
}

export default NavList