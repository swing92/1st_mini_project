// -------------------------------------모달창--------------------------------------------

	const bodyElem = document.body
						
	const closeModal = (event) => {

		const modalWrapperElem = document.querySelector('.modal-wrapper');
		bodyElem.removeChild(modalWrapperElem);
	}

	const stopPropagation = (e) => {
		e.stopPropagation();
	}



	const openModal = (message) => {
		const modalWrapperElem = document.createElement('div');
		modalWrapperElem.addEventListener("click", closeModal);
		modalWrapperElem.classList.add('modal-wrapper');


		const modalElem = document.createElement('div');
		modalElem.classList.add('modal');
		modalElem.addEventListener('click', stopPropagation);

		const modalContentElem = document.createElement('div');
		modalContentElem.classList.add('modal-content');
		modalContentElem.innerHTML = message;

		const closeBtn = document.createElement('div');
		closeBtn.classList.add('close-modal-btn');
		closeBtn.innerHTML = "확인";

		closeBtn.addEventListener("click", closeModal);

		modalElem.appendChild(modalContentElem);
		modalElem.appendChild(closeBtn);

		modalWrapperElem.appendChild(modalElem);
		bodyElem.appendChild(modalWrapperElem);
	}

	const idCheck = () => {
		openModal("사용 가능한 아이디입니다.")
	}
	const sendCode = () => {
		openModal("입력하신 전화번호로 인증번호가 발송되었습니다.")
	}
	const codeCheck = () => {
		openModal("전화번호가 인증되었습니다.")
	}

	const sendEmail = () => {
		openModal("입력하신 이메일 주소로 계정 인증 URL이 발송되었습니다.")
	}

	const sendId = () => {
		openModal("입력하신 이메일 주소로 아이디가 발송되었습니다.")
	}






	const sendPassword = () => {
		openModal("비밀번호 초기화 URL 주소로 접속하여 비밀번호를 변경해 주세요.");
	
		// 모달창이 뜬 후 닫기 버튼을 누르면 login.html로 이동
		const closeModalAndRedirect = () => {
			closeModal();
			window.location.href = 'login.html';
		}
	
		// 닫기 버튼 클릭 이벤트 핸들링
		const closeBtn = document.querySelector('.close-modal-btn');
		closeBtn.addEventListener("click", closeModalAndRedirect);
	}
	


	const init = () => {
		const idCheckBtn = document.querySelector('.id-check-button');
		const sendCodeBtn = document.querySelector('.send-code-button');
		const codeCheckBtn = document.querySelector('.code-check-button');
		const sendEmailBtn = document.querySelector('.send-email-button');
		const createAccBtn = document.querySelector('.create-acc-button');
		// 여기까지 register 버튼
		const logInBtn = document.querySelector('.log-in-button');
		// 여기까지 로그인 버튼
		const sendIdBtn = document.querySelector('.send-id-button')
		const sendPasswordBtn = document.querySelector('.send-password-button')
		// 여기까지 아디비번찾기 버튼


		idCheckBtn.addEventListener('click', idCheck)
		sendCodeBtn.addEventListener('click', sendCode)
		codeCheckBtn.addEventListener('click', codeCheck)
		sendEmailBtn.addEventListener('click', sendEmail)
		createAccBtn.addEventListener('click', createAcc);

		logInBtn.addEventListener('click', logIn);
		sendIdBtn.addEventListener('click', sendId);
		sendPasswordBtn.addEventListener('click', sendPassword);

	}


	document.addEventListener('DOMContentLoaded', () => {
		init();
	});

// ------------------------------------- 모달창--------------------------------------------










// -------------------------------------------비밀번호 유효성검사---------------------------------------------------------------------------------
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
	const password = passwordElem.value; 
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



// 가입완료 메시지

		function createAcc() {
			alert("가입완료");
			window.location.href="login.html";
	}




