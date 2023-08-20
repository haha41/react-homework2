// eslint-disable-next-line no-unused-vars
import tailwind from '@/styles/tailwind.css';

function MovePage() {

  const movePage = [
    {text: '임차문의', color: '#db0007'},
    {text: 'RECRUIT', color: '#d87e00'},
    {text: 'ENG', color: '#264a36'}
  ]

  const handleLinkClick = (e) => {
    e.preventDefault();
    window.location.href = '#';
  };

  return (
    <div className="movePage" >
      {movePage.map((item) => {
        return <div 
                key={item.text} 
                className="movePageLink"
                style={{backgroundColor: `${item.color}`}}
                onClick={handleLinkClick}
              >
                {item.text}
              </div>;
      })}
        <button type="button" className="search">
          <img src="/public/ico_search.png" alt="검색" />
        </button>
    </div>
  )
}

export default MovePage