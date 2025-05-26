$(function() {
  function infiniteText(marqueeElement, times) {
    for (let i = 0; i < times; i++) {
      marqueeElement.innerHTML += marqueeElement.innerHTML;
    }
  }

  let marquee1 = document.getElementById("marquee1");
  let marquee2 = document.getElementById("marquee2");
  let marquee3 = document.getElementById("marquee3");

  // 각 마퀴에 대해 텍스트 복제
  infiniteText(marquee1, 5);
  infiniteText(marquee2, 5);
  infiniteText(marquee3, 5);
});
