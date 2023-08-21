import garlicBurger from './../assets/macdonalds/garlicBurger.jpg';
import shake from './../assets/macdonalds/shake.jpg';
import crispyBurger from './../assets/macdonalds/crispyBurger.jpg';
import snackWrap from './../assets/macdonalds/snakWrap.jpg';
import macWing from './../assets/macdonalds/macWing.jpg';
import latte from './../assets/macdonalds/latte.jpg';


function FoodList() {

  const foods = {
    garlicBurger: [garlicBurger, '맥도날드가 찾은 한국의 맛! 창녕 갈릭 버거'],
    shake: [shake, '100% 우리 곡물로 살린 고소한 한국의 맛'],
    crispyBurger: [crispyBurger, '빠삭하게 빠져드는 맛, 맥크리스피!'],
    snackWrap: [snackWrap, '갓성비 간식 맛집, 맥도날드 해피 스낵!'],
    macWing: [macWing, '여름의 맛! 겉바속쫄 맥윙!'],
    latte: [latte, '달콤한 아이스크림과 진~한 라뗴의 만남!'],
  };

  return (
    <div className="foodList">
      {Object.entries(foods).map(([foodKey, [imgPath, description]]) => (
        <div key={foodKey} className="foodItem">
          <img src={imgPath} alt={foodKey} />
          <span className="text">{description}</span>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
