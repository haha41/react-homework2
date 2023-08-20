function Footer() {

  const footerLink = [
    '개인정보 처리방침',
    '위치정보 이용약관',
    '사이트맵',
    '임차문의',
    '고객문의',
    '인재채용',
  ]
  
  const footerInform = [
    "한국맥도날드(유)",
    "대표이사: 김기원",
    "사업자등록번호: 101-81-26509",
    "전화주문: 1600-5252",
    "COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.",
  ]

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
        <ul className="footerLink" >
          {footerLink.map((item) => {
            return <li 
              key={item} 
              className="footerLinkList"
               >
                <a href="#">{item}</a>
              </li>;
            })
          }
        </ul>

        <ul className="footerInform" >
          {footerInform.map((item) => {
            return <li 
              key={item} 
              className="footerInformList" >{item}</li>;
            })
          }
        </ul>

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

export default Footer;
