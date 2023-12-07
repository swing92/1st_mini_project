const action_info = [
  // 10개
  {
    no: "sAc00",
    name: "파티 애니멀즈",
    made: "Recreate GameS",
    year: "2023.09.20",
    genre: "액션",
    age: "ALL",
    link: "https://store.steampowered.com/app/1260320/Party_Animals/",
    desc: "고양이와 개, 공룡, 토끼 등 다양한 동물 캐릭터를 조작해 즐기는 대전 액션게임",
  },

  {
    no: "sAc01",
    name: "마인크래프트",
    made: "Mojang Studios",
    year: "2049.04.19",
    genre: "액션, 어드벤쳐",
    age: "전체이용가",
    link: "https://store.steampowered.com/app/1672970/Minecraft_Dungeons/",
    desc: "3차원 공간 내에서 특별한 목적 없이 플레이어가 자유롭게 게임을 플레이하는 법을 찾기를 권장하는 일명 샌드박스 게임",
  },
  {
    no: "sAc02",
    name: "하데스",
    made: "Supergiant Games",
    year: "2018.12.06",
    genre: "액션",
    age: "15",
    link: "https://store.steampowered.com/app/1145360/Hades/",
    desc: "Bastion, Transistor, Pyre의 제작사에서 선보이는 이 로그라이크 던전 탐색형 게임에서 핵 앤 슬래시로 지하 세계를 탈출하고 죽음의 신에게 도전하세요.",
  },
  {
    no: "sAc03",
    name: "몬스터헌터 : 월드",
    made: "CAPCOM",
    year: "2018.01.26",
    genre: "액션",
    age: "12세",
    link: "https://store.steampowered.com/app/582010/Monster_Hunter_World/",
    desc: "캡콤에 의해 개발된 플레이스테이션 2 기반의 액션 비디오게임",
  },
  {
    no: "sAc04",
    name: "스타워즈 제다이 서바이버",
    made: "리스폰 엔터테인먼트",
    year: "2023.04.28",
    genre: "액션, 어드벤처, RPG",
    age: "12",
    link: "https://store.steampowered.com/app/1774580/_/",
    desc: "Respawn Entertainment의 3인칭 액션 어드벤처 게임인 스타워즈 제다이: 오더의 몰락에서 온 은하계를 누비는 모험을 시작하세요. 탈주한 파다완이 되어 훈련을 마치고, 새로운 포스 능력을 개발하고, 광선검 사용법을 익히십시오. 이 장대한 모험에서 항상 제국보다 한발 먼저 움직여야 한다는 사실도 잊지 마십시오. 3인칭 액션 어드벤처 게임 스타워즈 제다이: 서바이버™에서 칼 케스티스의 이야기가 계속 이어집니다.",
  },
  {
    no: "sAc05",
    name: "블라스퍼머스",
    made: "The Game Kitchen",
    year: "2019.09.10",
    genre: "메트로배니아(액션 RPG)",
    age: "전체이용가",
    link: "https://store.steampowered.com/app/774361/Blasphemous/",
    desc: "Blasphemous는 Cvstodia 세계의 악몽 속에서 숙련된 핵 앤 슬레시 전투를 펼치는 잔혹한 액션 플랫폼 게임입니다. 탐험하면서 능력을 업그레이드하고 여러분의 앞을 가로막는 수많은 적들에게 참혹한 처형을 내리고 영겁의 지옥을 파괴하세요.",
  },
  {
    no: "sAc06",
    name: "Marvel’s Spider-Man Remastered",
    made: "인섬니악 게임즈",
    year: "2022.08.12",
    genre: "액션, 어드벤처",
    age: "전체이용가",
    link: "https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/",
    desc: "Marvel’s Spider-Man Remastered의 오리지널 액션으로 꽉 찬 스토리에서 피터 파커와 스파이더맨의 세계가 서로 충돌합니다. 마블의 뉴욕시에서 거대 범죄 및 상징적인 빌런과 싸우는 노련한 피터 파커가 되어보세요. 생동감 넘치는 동네를 웹 스윙으로 이동하며, 극적인 테이크다운으로 악당을 제압하세요.",
  },
  {
    no: "sAc07",
    name: "Red Dead Redemption 2",
    made: "Rockstar Games",
    year: "2019.12.06",
    genre: "액션, 어드벤쳐",
    age: "18",
    link: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
    desc: "아서 모건과 반 더 린드 갱단은 도주 중인 무법자입니다. 정부 요원과 일류 현상금 사냥꾼들에게 추격당하는 그들은 살아남기 위해 강도질과 도둑질, 싸움을 거듭하며 미국의 험난한 심장부를 달려 나갑니다. 심해져 가는 내부 갈등으로 갱이 해체될 위기 속에서, 아서는 자기를 키워 준 갱에 대한 의리와 자신의 이상 중 하나를 선택해야만 합니다.",
  },
  {
    no: "sAc08",
    name: "Grand Theft Auto V",
    made: "Rockstar Games",
    year: "2015.04.14",
    genre: "액션, 어드벤쳐",
    age: "전체이용가",
    link: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
    desc: "어느 날 문득, 동네 건달과 은퇴한 은행 강도, 미치광이 사이코패스는 자신들이 어두운 범죄 세계와 미국 정부 기관, 엔터테인먼트 회사의 가장 끔찍하고 무시무시한 현실과 복잡하게 얽혀 있다는 걸 깨닫습니다. 아무도 믿을 수 없는, 서로조차 믿을 수 없는 이 무자비한 도시에서 살아남기 위해 그들은 여러 번의 위험한 습격에 몸을 던져야 합니다.",
  },
  {
    no: "sAc09",
    name: "Dead by Daylight",
    made: "Behaviour Interactive Inc.",
    year: "2016.06.14",
    genre: "액션",
    age: "전체이용가",
    link: "https://store.steampowered.com/app/381210/Dead_by_Daylight/",
    desc: "데드 바이 데이라이트는 한 명의 플레이어가 생존자를 고문하고 죽이려는 잔학한 살인마의 역할을 담당하고, 나머지 네 명의 플레이어는 살인마로부터 도망치려는 생존자로 플레이하는 (4vs1) 공포게임 입니다. 생존자는 3인칭 시야를 가져서 주변의 상황을 파악하는데 유리하고, 살인마는 1인칭 시야를 가지고 그들의 먹잇감만을 쫒습니다. 매 게임마다 알 수 없게 바뀌는 환경은 탈출을 더욱 어렵게 만들겠지만, 생존자의 가장 중요한 목표는 살인마로부터 도망쳐 도살장에서 벗어나는 것 입니다.",
  },
];