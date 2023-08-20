// eslint-disable-next-line no-unused-vars
import tailwind from '@/styles/tailwind.css';

function NavList({isHover, handleHover}) {
// console.log(props);  

  const renderList = [
    'Menu',
    'Store',
    "What's New",
    'Story'
  ]

  // const renderList = [
  //   {title: 'Menu', list1: '버거', list2: '맥런치', list3: '맥모닝', list4: '해피 스낵', list5: '사이드 & 디저트'},
  //   {title: 'Store', list1: '매장찾기', list2: '맥딜리버리', list3: '맥드라이브', list4: '임차문의'},
  //   {title: "What's New", list1: '프로모션', list2: '새로운 소식', list3: '이달의 해피밀'},
  //   {title: 'Story', list1: '브랜드 소개', list2: '사회적 책임과 지원', list3: '맥도날드 사람들'},
  // ]

  // function handleHover() {
    // let state = isHover ? console.log('호버') : console.log('벗어남');
    // isHover ? console.log('호버') : console.log('벗어남');
    if(isHover) {
      console.log('호버');
      
    } else {
      console.log('벗어남');
    }
  //   // return change
  //   // console.log(e.target); // li

  // }

    

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

        {/* {Object.entries(renderList).map(([key, value]) => {
          return (
            <li key={key}
                className="navList" 
                onMouseEnter={handleHover} 
                onMouseLeave={handleHover} >{value}</li>
          )
        })} */}
      </ul>
    </>
  )
}

export default NavList