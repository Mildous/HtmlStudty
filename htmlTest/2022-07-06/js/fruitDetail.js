	var isOpen = false;
	var bigPic = document.querySelector("#fImg");	//큰 이미지 가져오기
	var smallPics = document.querySelectorAll(".small");	//작은 이미지 가져오기

	for(var i=0; i<smallPics.length; i++){	//노드 리스트의 각 요소에 접근
		smallPics[i].onclick = function(event) {	//요소를 누르면
			bigPic.src = this.src;	//bicPic의 src를 클릭한 요소의 src로 변경
		};
	}

	var view = document.querySelector("#view");  // #view 요소를 가져옴
	view.addEventListener("click", function() {
		if(isOpen == false) {	//상세 정보가 감춰져 있을 때
			document.querySelector("#detail").style.display = "block";	//상세 정보 표시
			view.innerHTML = "상세 설명 닫기";	//링크 내용 수정
			isOpen = true;	//표시 상태로 지정

		} else {	//상세 정보가 표시되어 있을 때
			document.querySelector("#detail").style.display = "none";	//상세 정보를 화면에서 감춤
			view.innerHTML = "상세 설명 보기";
			isOpen = false;
		}
	});


