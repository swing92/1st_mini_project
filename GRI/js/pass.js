
const inputElem = document.querySelector('.pw'); // 입력란 엘리먼트 가져오기
const lowercaseElem = document.querySelector('.lowercase'); // 소문자 요소 가져오기
const uppercaseElem = document.querySelector('.uppercase'); // 대문자 요소 가져오기
const numberElem = document.querySelector('.number'); // 숫자 요소 가져오기
const specialElem = document.querySelector('.special'); // 특수문자 요소 가져오기
const characterLengthElem = document.querySelector('.character-length'); // 길이 요소 가져오기

//정규 표현식 
//값을 뭘로 출력할 것? true와 false가 나온다 
const isValidLowercase = (pw) => {
return pw.search(/[a-z]/g) >= 0; // 소문자 포함 여부 확인
}
const isValidUppercase = (pw) => {
return pw.search(/[A-Z]/g) >= 0; // 대문자 포함 여부 확인
}
//g는 특수문자 구분하라는 것
const isValidNumber = (pw) => {
return pw.search(/[0-9]/g) >= 0; // 숫자 포함 여부 확인
}

//gi는 특수문자 구분하지 말라는 것(전역변수)
const isValidSpecial = (pw) => {
return pw.search(/[~!@#$%^&*()_+|<>?:{}`]/gi) >= 0; // 특수문자 포함 여부 확인
}
const isValidCaracterLength = (pw) => {
return pw.length >= 8 // 최소 8자 이상 여부 확인
}

inputElem.addEventListener('input', (e) => {
const pw = e.target.value;

isValidLowercase(pw) ? lowercaseElem.classList.add('active') : lowercaseElem.classList.remove('active'); // 소문자 유효성 표시 여부 업데이트
isValidUppercase(pw) ? uppercaseElem.classList.add('active') : uppercaseElem.classList.remove('active'); // 대문자 유효성 표시 여부 업데이트
isValidNumber(pw) ? numberElem.classList.add('active') : numberElem.classList.remove('active'); // 숫자 유효성 표시 여부 업데이트
isValidSpecial(pw) ? specialElem.classList.add('active') : specialElem.classList.remove('active'); // 특수문자 유효성 표시 여부 업데이트
isValidCaracterLength(pw) ? characterLengthElem.classList.add('active') : characterLengthElem.classList.remove('active'); // 길이 유효성 표시 여부 업데이트

const ok = document.querySelector('.passok');
const no = document.querySelector('.passno');
if (isValidLowercase(pw) && isValidUppercase(pw) && isValidNumber(pw) && isValidSpecial(pw) && isValidCaracterLength(pw)) {      
	ok.style.display = "block"
	no.style.display = "none"
}
else {
	ok.style.display = "none"
	no.style.display = "block"
}

})

// // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // ---------------------------비번 동일한지 봐줘-----------------------------------------------------------


const passwordElem = document.querySelector('.pw');
const confirmElem = document.querySelector('.confirm');
const matchMessageElem = document.querySelector('.match-message');
const noMatchMessageElem = document.querySelector('.no-match-message');

const checkPasswordMatch = () => {
const password = passwordElem.value; //선언 password=비밀번호.값;
const confirm = confirmElem.value;

if (password === confirm) {
	matchMessageElem.style.display = 'block';
	noMatchMessageElem.style.display = 'none';
} else {
	matchMessageElem.style.display = 'none';
	noMatchMessageElem.style.display = 'block';
}
};

passwordElem.addEventListener('input', checkPasswordMatch);
confirmElem.addEventListener('input', checkPasswordMatch);

	function createAcc() {
		alert("변경완료");
		window.location.href="login.html";
}


//비번 바꾸기
       document.getElementById('registerForm').addEventListener('submit', function (e) {
					e.preventDefault(); // 폼 제출 기본동작 막기

					// 입력 된 아이디 비밀번호 가져오기
					var memberPw = document.getElementById('memberPw').value;
					 localStorage.setItem('pw', memberPw);
					createAcc();}
				);


// 회원 탈퇴
function withdraw() {
    localStorage.removeItem('id');
    localStorage.removeItem('pw');
    alert('회원 탈퇴가 완료되었습니다.');
	window.location.href = "index.html";
}
      
	

