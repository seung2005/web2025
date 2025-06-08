const cityData = {
  incheon: {
    name: "인천",
    beach: "을왕리해수욕장, 송도달빛축제공원",
    feature: "서해안에 위치, 조수 간만의 차가 큼. 갯벌이 발달함.",
    fish: ["농어", "숭어", "전어", "넙치", "꽃게"]
  },
  gangneung: {
    name: "강릉",
    beach: "경포대, 안목해변, 정동진",
    feature: "동해안에 위치, 물 맑고 수심 깊음. 회와 해산물 다양.",
    fish: ["오징어", "고등어", "도루묵", "가자미", "광어"]
  },
  busan: {
    name: "부산",
    beach: "해운대, 광안리, 송정",
    feature: "동해와 남해 접경, 수온 따뜻. 회와 해산물의 천국.",
    fish: ["고등어", "참돔", "전갱이", "민어", "우럭"]
  },
  yeosu: {
    name: "여수",
    beach: "만성리해수욕장, 무슬목해변",
    feature: "남해안, 수온 따뜻하고 해류 풍부. 양식업도 활발.",
    fish: ["참돔", "도다리", "전어", "장어", "삼치"]
  },
  jeju: {
    name: "제주",
    beach: "함덕, 협재, 중문",
    feature: "화산섬, 난류 영향으로 어종 다양. 회와 해녀 문화 유명.",
    fish: ["방어", "자리돔", "갈치", "광어", "능성어"]
  }
};

function showCity(cityKey) {
  const city = cityData[cityKey];
  const section = document.getElementById("city-info");

  section.innerHTML = `
    <h2>${city.name}</h2>
    <p><strong>📍 특징:</strong> ${city.feature}</p>
    <p><strong>🏖️ 유명 해변:</strong> ${city.beach}</p>
    <p><strong>🐟 서식 물고기:</strong> ${city.fish.join(", ")}</p>
  `;
}
