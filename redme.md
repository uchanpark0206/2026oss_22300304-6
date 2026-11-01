Deployment: GitHub URL, Vercel URL, MockAPI Endpoint URL (비밀 키·비밀번호는 기록하지 않음)

Service: 주제, Field, CRUD 기능
1.주제: 도서 관리
2.필드
    a.id:아이디
    b.title:제목
    c.avatar:작가
    d.genre:장르
    e.price:가격
3.crud기능
    a.c:생성 
    b.r
    c.u수정
    d.d삭제
    
 

Key Learning: fetch(), JSON, async/await, REST API 등 배운 내용 3가지

GET, POST, PUT, DELETE가 각각 CRUD에 조회 추가 수정 삭제에 대응한다는 것을 알게됨
response.ok로 성공 여부를 확인하고 try/catch로 오류를 처리하는 방법이 있다는 것을 배움
POST, PUT는 각각 바디에서 값을 가져오기 떄문에 Content-Type: application/json 헤더를 통해 지금 보내는 바디의 형색이 jason이라는것을 알려줘야한다는 것을 알게됨






AI / Search Usage: 사용 내역과 본인 추정 AI 코드 기여율(%)
추정 AI 코드 기여율:15%
오류가 날때 도저히 모르겠으면 왜 안되는지 물어봄.

Problem & Solution / Reflection: 문제 해결 및 느낀 점
이제껏 잘되던 것이 ckeck를 만든 순가부터 안되는 오류가 발생함
이는 ckeck를 let이 아닌 const로 만들었기 때문이었고
이를 통해 변수를 만들 때는 이 변수가 어떤 곳에 사용해야 하는지 제대로 생각하고 선언 해야겠다고 느낌

<!--
        자바스크립트 객체
        제이슨: 폼의 형태 자바스크립트 객체(브라우저)  <  >   제이슨(서버)
        const srudent{
            name:"a"
            age:20
        }
        js object
        >>>
        {
            "name":"a"
            "age":20
        }
        json(따옴표 중요)

        객체와 배열표현식

        객체의 배열(json)
        배열은 대괄호
        객체는 중괄호
        >>>배열의 객체,객체의 배열 구분 필요
        forEach()와map()
        map은 값을 반환을 함


        구조 분해 할당
        배열 구조분해 위치가 중요
        객체 구조 분해 이름이 중요

        spread&rest Syntax
        1.spread Syntax 보통 앞쪽에 나옴
        새로운 배열이나 객체를 생성할때

        2.rest Syntax 보통 뒤에 나옴
        const [first, ...others] = [10,20,30]
        >>others에 20,30이 들어있는 배열이 됨

        arry Update&imutability


        모듈러
        math.js
        app.ja
        
        JSON.strirgify()
        JSON.parse()

        synchroous vs Asynchronous

        promise(than,catch,하나더)
        상태 
        pending.fulfilled,rejected

        promie처리

        fetch()  프로미스 객체 리턴함  >>.than과 .catth가 나옴

        async(함수 앞에 사용)/awit()

        Fetch API 오류 처리


        AJAX(관련 기술:Fetch API)

        rest api 
        put(전체 데이터 업데이트) vs patch(일부분만 업데이트)
        -->