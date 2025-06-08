const cityData = {
  incheon: {
    name: "인천",
    beach: "을왕리 해수욕장, 선녀바위 해수욕장",
    feature: "서해안, 조수 간만의 차가 크고 갯벌이 발달함.",
    fish: ["농어", "숭어", "꽃게"]
    image: "image/incheon.jpg"
  },
  gangneung: {
    name: "강릉",
    beach: "경포해변, 주문진 해수욕장",
    feature: "동해안, 물 맑고 수심 깊음",
    fish: ["오징어", "고등어", "도루묵"]
    image: "image/gangneung.jpg"
  },
  busan: {
    name: "부산",
    beach: "해운대, 광안리",
    feature: "동해안, 수온 따뜻하고 여름철 피서객들로 붐비는 곳",
    fish: ["고등어", "참돔", "우럭"]
    image: "image/busan.jpg"
  },
  yeosu: {
    name: "여수",
    beach: "만성리검은모래해변, 모사금 해수욕장",
    feature: "남해안, 수온 따뜻하고 해류 풍부",
    fish: ["참돔", "전어", "장어"]
    image: "image/yeosu.jpg"
  },
  jeju: {
    name: "제주",
    beach: "협재 해수욕장, 김녕 해수욕장",
    feature: "화산섬, 맑은 바다, 회와 해녀 문화 유명.",
    fish: ["방어", "자리돔", "갈치"]
    image: "image/jeju.jpg"
  }
};

function showCity(cityKey) {
  const city = cityData[cityKey];
  const section = document.getElementById("city-info");
  const imageBox = document.getElementById("city-image");

  section.innerHTML = `
    <h2>${city.name}</h2>
    <p><strong>📍 특징:</strong> ${city.feature}</p>
    <p><strong>🏖️ 유명 해변:</strong> ${city.beach}</p>
    <p><strong>🐟 서식 물고기:</strong> ${city.fish.join(", ")}</p>
  `;

imageBox.innerHTML = `
  <img src="${city.image}" alt="${city.name} 이미지" class="w-full max-w-xl mx-auto rounded-Ig shadow-md"/>
  `;
}
