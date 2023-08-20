function FoodList() {

  const foods = {
    garlicBurger: ['/src/assets/macdonalds/garlicBurger.jpg', '맥도날드가 찾은 한국의 맛! 창녕 갈릭 버거'],
    shake: ['/src/assets/macdonalds/shake.jpg', '100% 우리 곡물로 살린 고소한 한국의 맛'],
    crispyBurger: ['/src/assets/macdonalds/crispyBurger.jpg', '빠삭하게 빠져드는 맛, 맥크리스피!'],
    snackWrap: ['/src/assets/macdonalds/snakWrap.jpg', '갓성비 간식 맛집, 맥도날드 해피 스낵!'],
    macWing: ['/src/assets/macdonalds/macWing.jpg', '여름의 맛! 겉바속쫄 맥윙!'],
    latte: ['/src/assets/macdonalds/latte.jpg', '달콤한 아이스크림과 진~한 라뗴의 만남!'],
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
