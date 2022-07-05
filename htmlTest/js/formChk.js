function join() {
    var f = document.joinForm;
    if(f.userId.value == '') {
        alert("아이디를 입력하세요.");
        f.userId.focus();
        return;
    }
    if(f.userPw.value == '') {
        alert("비밀번호를 입력하세요.");
        f.userPw.focus();
        return;
    }
    if(f.userPwCheck.value == '') {
        alert("비밀번호 확인란을 입력하세요.");
        f.userPwCheck.focus();
        return;
    }
    if(f.userPw.value !== f.userPwCheck.value) {
        alert("비밀호가 다릅니다.");
        f.userPwCheck.value = "";
        f.userPw.focus();
        return;
    }
    if(f.userNick.value == '') {
        alert("닉네임을 입력하세요.");
        f.userNick.focus();
        return;
    }
    if(f.userName.value == '') {
        alert("이름을 입력하세요.");
        f.userName.focus();
        return;
    }
    if(f.userRNum.value == '') {
        alert("주민등록번호를 입력하세요.");
        f.userRNum.focus();
        return;
    }
    if(f.userTel.value == '') {
        alert("전화번호를 입력하세요.");
        f.userTel.focus();
        return;
    }
    if(f.userEmail.value == '') {
        alert("이메일을 입력하세요.");
        f.userEmail.focus();
        return;
    }
    if(f.userAddr.value == '') {
        alert("주소를 입력하세요.");
        f.userAddr.focus();
        return;
    }
    if(f.nomiId.value == '') {
        alert("추천인 아이디를 입력하세요.");
        f.nomiId.focus();
        return;
    }
    
    if(confirm('저장하시겠습니까?')) {
        f.submit(); //전송
    }

}