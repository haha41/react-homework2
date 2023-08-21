
function Controller({ changeBanner, currentImgIndex, slideImg }) {

  const handlePreviousImage = () => {
    const newIndex = (currentImgIndex - 1 + slideImg.length) % slideImg.length;
    changeBanner(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (currentImgIndex + 1) % slideImg.length;
    changeBanner(newIndex);
  };

  return (
    <div role="group" className="buttonGroup">
      <img src="/previous.png" alt="이전 이미지" className="prev" onClick={handlePreviousImage}/>
      <img src="/next.png" alt="다음 이미지" className="next" onClick={handleNextImage}/>
    </div>
  );
}

export default Controller;
