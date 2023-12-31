const fps_info = [
  // 10개
  {
    no: "ofs00",
    name: "발로란트",
    made: "라이엇게임즈",
    year: "2020.06.02",
    genre: "FPS",
    age: "15세",
    link: "https://playvalorant.com/ko-kr/",
    desc: "발로란트는 5대5 전술 슈팅 게임으로, 진영에 따라 스파이크를 설치하거나 해체하는 것이 목표이다. 한 번 처치되면 다음 라운드까지 기다려야 하며, 13라운드를 먼저 이기는 팀이 승리한다. 총기와 탄약뿐만 아니라 유연하고 신속하며 치명적인 스킬로 무장한 요원을 선택해 총격전을 더욱 빛내줄 절묘한 기회를 만들어야 한다.",
  },
  {
    no: "ofs01",
    name: "서든어택",
    made: "넥슨GT",
    year: "2005.08.23",
    genre: "FPS",
    age: "15세 18세",
    link: "https://sa.nexon.com/main/index.aspx",
    desc: "넥슨GT에서 제작하고 넥슨에서 배급하는 온라인 슈팅 게임이다.",
  },
  {
    no: "ofs02",
    name: "오버워치2",
    made: "블리자드",
    year: "2022.10.05",
    genre: "FPS",
    age: "12세 15세",
    link: "https://game.naver.com/lounge/OVERWATCH/home",
    desc: "오버워치(Overwatch)는 블리자드 엔터테인먼트가 개발하고 배급하는 다중 사용자 1인칭 슈팅 게임이다. 2016년 5월 24일 마이크로소프트 윈도우, 플레이스테이션 4, 엑스박스 원으로 출시하였다.",
  },
  {
    no: "ofs03",
    name: "PUGB",
    made: "크래프톤",
    year: "2017.11.14",
    genre: "FPS",
    age: "15세",
    link: "https://www.pubg.com/ko/events/unknown",
    desc: "《배틀그라운드》(영어: PLAYERUNKNOWN'S BATTLEGROUNDS, PUBG)는 PUBG 주식회사(前 블루홀 지노게임즈)에서 개발하고 크래프톤에서 발행한 서바이벌 슈터 게임이다.",
  },
  {
    no: "ofs04",
    name: "에이펙스 : 레전드",
    made: "리스폰 엔터테인먼트",
    year: "2019.02.05",
    genre: "FPS",
    age: "청소년이용불가",
    link: "https://www.ea.com/ko-kr/games/apex-legends?isLocalized=true&setLocale=ko-kr",
    desc: "무료 플레이* 히어로 슈팅 게임 Apex 레전드에서 나만의 캐릭터로 전장을 점령하세요. 강력한 능력을 지닌 레전드 캐릭터들이 힘을 합쳐 프런티어의 변경에서 영예와 부를 차지하기 위한 전투에 뛰어드세요. 계속 추가되는 레전드, 깊이 있는 전술적 분대 플레이, 배틀 로얄 그 이상의 혁신을 경험하세요. 이 모든 것이 어떤 제약도 없는 거친 세계에서 펼쳐집니다. 새롭게 진화한 히어로 슈팅을 플레이하세요.",
  },
  {
    no: "ofs05",
    name: "카운터 스트라이크 온라인",
    made: "넥슨",
    year: "2007.12.20",
    genre: "FPS",
    age: "15세 18세",
    link: "https://csonline.nexon.com/Eventfull/E231130/Event",
    desc: "FPS게임의 ORIGINALITY!COUNTER-STRIKE가 온라인으로 다시 태어났다! 카운터-스트라이크 온라인은 COUNTER-TERRORIST와 TERRORIST의 대결 구도를 담은 게임으로 이 게임의 원작인 카운터-스트라이크는 VALVE사의 하프라이프의 모드로 처음 등장했습니다.",
  },
  {
    no: "ofs06",
    name: "이스케이프 프롬 타르코프",
    made: "배틑 스테이트 게임즈",
    year: "2017.12.18",
    genre: "FPS",
    age: "미분류",
    link: "https://www.escapefromtarkov.com/",
    desc: "기본적으로 이스케이프 프롬 타르코프(Escape from Tarkov)는 긴장감 있고 현실적인 총격전을 통해 전리품을 획득하여 능력을 높이는 게임입니다. 현실적인 탄도학 모델과 함께 방대한 총기 옵션과 커스터마이징을 자랑하며, 게임 내에서의 사망이 순식간에 일어나기 때문에 어려운 게임입니다. 또한 무기가 마모되고 고장 나고 과열되지 않도록 관리해야 해서 현실감을 더합니다. 플레이어도 마찬가지로 뼈가 부러지고 상처에서 피가 나고 탈진할 수 있기 때문에 자신의 건강 상태도 관리해야 하므로 소심한 사람에게 걸맞는 게임은 아닙니다. 이스케이프 프롬 타르코프의 대규모 레벨과 장소를 통해 플레이어는 다른 플레이어에 대해 전술적 이점을 얻을 수 있고 전장마다 서로 다른 아름다움을 느낄 수 있습니다. 현실적인 하드코어 슈팅 게임을 찾는 플레이어를 통해 결실을 맺을 것입니다.",
  },
  {
    no: "ofs07",
    name: "승리의 여신:니케",
    made: "시프트업",
    year: "2022.11.04",
    genre: "FPS",
    age: "15세",
    link: "https://nikke-kr.com/",
    desc: "니케의 작품 배경은 머나먼 미래의 지구. 인류는 어느 날 하늘에서 침공한 정체불명의 기계 생물인 랩쳐의 공격을 받아 패배하여 지하에서 방주라는 거대 지하도시를 만들어 거주하고 있고, 전투 사이보그 군인인 니케를 보내어 랩쳐들과 싸워 지구를 수복하려고 하고 있다.",
  },
  {
    no: "ofs08",
    name: "블랙스쿼드",
    made: "밸로프",
    year: "2019.06.26",
    genre: "FPS",
    age: "청소년이용불가",
    link: "https://blacksquad.valofe.com/",
    desc: "Black Squad는 무료로 플레이할 수 있는 군사 1인칭 슈팅 게임입니다. 플레이어는 선택할 수 있는 다양한 게임 맵, 모드 및 무기를 통해 자신의 기술을 익히고 전략을 뽐낼 수 있습니다. Steam에서 가장 많이 플레이되는 게임 중 하나에서 전 세계 수천 명의 FPS 플레이어와 함께하세요!",
  },
];
