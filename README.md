<img src="/public/result.png">

# 슬라이드 이미지
```jsx
function Slide() {

  const slideImg = [
    "src/assets/macdonalds/slide1.jpg",
    "src/assets/macdonalds/slide2.jpg",
    "src/assets/macdonalds/slide3.jpg",
    "src/assets/macdonalds/slide4.jpg",
  ]

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const changeImg = () => {
    const newIndex = (currentImgIndex + 1) % slideImg.length;
    setCurrentImgIndex(newIndex);
  };


  useEffect(() => {
    const interval = setInterval(changeImg, 5000);

    return () => clearInterval(interval);
  },[currentImgIndex]);

  const changeBanner = (index) => {
    setCurrentImgIndex(index);
  }

  return (
    <div className='slide'>
      <Controller changeBanner={changeBanner} currentImgIndex={currentImgIndex} slideImg={slideImg}/>
      <img src={slideImg[currentImgIndex]} alt="배너" className='banner'></img>
    </div>
  )
}
```
useState hook을 활용하여 인덱스 번호가 바뀔 때 새로운 이미지가 렌더링 되도록 함<br>
인덱스 번호는 useEffect hook 내에서 setInterval 함수를 사용하여 일정 시간 후 변경되도록 함<br>

# SNS로 이동
```jsx
function Footer() {

  const footerSns = [
    {text: '맥도날드 페이스북', url: "https://www.facebook.com/McDonaldsKorea"},
    {text: '맥도날드 인스타그램', url: "https://www.instagram.com/mcdonalds_kr/"},
    {text: '맥도날드 유투브', url: "https://www.youtube.com/user/McDonaldsKor" },
    {text: '맥도날드 카카오스토리', url: "https://story.kakao.com/ch/mcdonalds/feed"},
    {text: '한국디지털접근성진흥원 인증결과', url: "http://kwacc.or.kr/CertificationSite/WA/1664/Detail?page=1"}
  ]
  
  return (
    <footer className="footer">
      <div className="footerWrapper">
        
        ...

        <ul className="footerSns" >
          {footerSns.map((item, index) => {
            return <li 
              key={item.text} 
              className={`footerSnsList li_${index}`}>
                <a href={item.url}>{item.text}</a>    
            </li>;
            })
          }
        </ul>
      </div>
    </footer>
  )
}
```
아이템과 인덱스를 매개변수로 하여 map 메서드를 실행함.<br>
클래스명에 인덱스를 넣고, 스프라이트 이미지를 삽입함<br>
링크에는 객체의 url 키를 넣고, 글자는 text 키를 넣었으나 안보이게 처리함<br>



