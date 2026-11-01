        //moc api의 url
        const url = "https://6adea6df4e88f1bba4a53a44.mockapi.io/books";
        let ckeck = null;
        let booksdata = []; // fillter를 쓰기위해 데이터를 보관할 전역 변수 추가

        async function rander() {
            try {
                const response = await fetch(url); // GET 요청

                if (!response.ok) {
                    throw new Error('데이터를 불러오는데 실패했습니다.');
                }

                const data = await response.json(); // JSON을 자바스크립트 배열로 변환

                // 가져온 데이터 확인용 
                console.log("서버에서 가져온 데이터:", data);

                booksdata = data;//jason을 통해 저장된 데이터를 array에 옮김

                // 3번의 화면 출력 함수 호출
                renderData(booksdata);

            } catch (error) {
                console.error(error);
                alert(error.message); // 화면에 오류 메시지 표시
            }
        }
        function renderData(data) {
            // 이전 과제에서 사용했던 HTML 요소 선택 및 그리기 로직 활용
            const container = document.getElementById('datatable');
            container.innerHTML = ''; // 화면 초기화

            data.forEach(item => {
                const tr = document.createElement('tr');
                //mok에서 사용한 데이터 정리하기(필드 5개 완료)
                //수정 삭제 버튼 추가
                //아이디는 무조건 하나여야함 따라서 id대신 class를 사용해야함

                tr.innerHTML = `
                <td>${item.id}</td>
                <td> 제목: ${item.title};</td>
                <td> 작가: ${item.avatar};</td>
                <td> 장르: ${item.genre};</td>
                <td> 가격: ${item.price};</td>
                <button class="edit" type = "button">수정</button>
                <button class="del" type = "button">삭제</button>
                `;
                const edit = tr.querySelector('.edit');

                // 수정 버튼 클릭시 데이터 폼으로 넣기
                edit.addEventListener('click', () => {
                    document.getElementById('t').value = item.title;
                    document.getElementById('a').value = item.avatar;
                    document.getElementById('g').value = item.genre;
                    document.getElementById('p').value = item.price;
                    document.querySelector('#form button[type="submit"]').textContent = '수정';//버튼 이름 바꾸기
                    ckeck = item.id;

                });
                const del = tr.querySelector('.del');
                del.addEventListener('click', async () => {
                    if (confirm('정말로 이 책을 삭제하시겠습니까?')) {
                        try {
                            const response = await fetch(`${url}/${item.id}`, {
                                method: 'DELETE'
                            });

                            if (!response.ok) throw new Error('데이터 삭제에 실패했습니다.');
                            alert('삭제되었습니다!');

                            // 대소문자 통일 (booksdata)
                            booksdata = booksdata.filter(book => book.id !== item.id);
                            renderData(booksdata);
                        } catch (error) {
                            alert(error.message);
                        }
                    }
                });

                container.appendChild(tr);
            });
        }
        // 시작시 바로 실행
        rander();
        //폼을 통해 추가하기
        const form = document.getElementById('form');

        form.addEventListener('submit', async (event) => {
            // 새로고침 막기
            event.preventDefault();

            //input에 있는 내용들로 array만들기
            const newBook = {
                title: document.getElementById('t').value,
                avatar: document.getElementById('a').value,
                genre: document.getElementById('g').value,
                price: document.getElementById('p').value
            };
            //벨리데이션 추가
            if (!newBook.title.trim()) {
                alert('제목을 입력하세요.'); return;
            }
            if (!newBook.avatar.trim()) {
                alert('작가를 입력하세요.'); return;
            }
            if (!newBook.genre.trim()) {
                alert('장르를 입력하세요.'); return;
            }
            if (newBook.price === '' || Number(newBook.price) <= 0) {
                alert('0보다 큰 숫자를 입력하세요.'); return;
            }

            try {
                if (ckeck != null) {//수정에서 들어왔다면 실행

                    const response = await fetch(`${url}/${ckeck}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(newBook) // bookData를 newBook으로 수정
                    });

                    if (!response.ok) throw new Error('데이터 수정에 실패했습니다.');
                    alert('책 정보가 수정되었습니다!');

                    // 작업이 끝났으니 다시 '추가 모드'로 돌려놓기 위해 비워줌
                    ckeck = null;
                    document.querySelector('#form button[type="submit"]').textContent = "저장";

                }

                else {
                    //fetch()를 이용해 POST 요청 보내기
                    const response = await fetch(url, {
                        method: 'POST', // 추가할 때는 무조건 POST
                        headers: {
                            // 서버에 우리가 보낼 데이터가 JSON 형태임을 알려주는 역할
                            'Content-Type': 'application/json'
                        },
                        // 자바스크립트 객체를 JSON 문자열로 변환해서 서버로 전송
                        body: JSON.stringify(newBook)
                    });

                    if (!response.ok) {
                        throw new Error('데이터 추가에 실패했습니다.');
                    }

                    alert('새로운 책이 추가되었습니다!');
                }

                // 입력창 비우기
                form.reset();

                // 화면 목록 갱신
                rander();

            } catch (error) {//서버 통싱 에러 발생시 에러 띄우기
                alert(error.message);
            }
        });

        document.getElementById('sbtn').addEventListener('click', () => {
            const kw = document.getElementById('surch').value.trim().toLowerCase();
            renderData(booksdata.filter(item => (item.title || '').toLowerCase().includes(kw)));
        });

