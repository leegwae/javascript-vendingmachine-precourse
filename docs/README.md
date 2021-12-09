<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/beverage_icon.png?raw=true"/>
</p>
<h1 align="middle">자판기</h1>

<h2 align="middle">기능 목록</h2>

이 문서는 🥤`자판기`🥤의 기능 목록을 정리합니다.



# 자판기 만들기 전 준비하기

## ⚙ 초기화하기

[완료 커밋](https://github.com/leegwae/javascript-vendingmachine-precourse/commit/664acff5f4795b71cb6d1a8d4ae3e550a8fd12b7)

- [x] linter: `eslint `with airbnb convention
- [x] code formatter: `prettier`



# 자판기 만들기

## 🥤 자판기 만들기

[완료 커밋](https://github.com/leegwae/javascript-vendingmachine-precourse/commits/leegwae)

자판기 관리자는 다음과 같이 생긴 자판기를 만들기로 했다.

- [x] 자판기는 간판을 이마에 써붙이고 있다.
- [x] 자판기는 세 개의 탭을 가진다.
  - 상품 관리
  - 잔돈 충전
  - 상품 구매
- [x] 자판기는 각각의 탭에 대하여 패널을 가진다. 탭을 누르면 해당 패널이 보인다.



## 🛠 상품 관리 탭

상품 관리 탭을 누르면 상품 관리 패널은 다음 내용을 보여준다.

- [ ] 최초의 `상품 목록`은 비워진 상태이다.
- [ ] 상품 추가하기: 상품을 추가한다.
- [ ] 상품 현황: 재고 상품들을 테이블로 보여준다.



### 🛒 상품 추가하기

관리자는 상품 한 개씩 `상품 정보`를 입력하여 제출할 수 있다.

- [ ] `상품 정보` 입력하기
  - [ ] `상품 이름` 입력하기
  - [ ] `상품 가격` 입력하기
  - [ ] `상품 수량` 입력하기
- [ ] `상품 정보` 제출하기: 입력 값들을 제출한다.
- [ ] 자판기는 `상품 정보`가 제출되면 다음을 수행한다.
  - [ ] 입력 값 검사하기: 입력 값이 유효한지 검사한다.
  - [ ] 입력 값 처리하기: 입력 값 검사하기 결과에 따라 입력 값을 처리한다.



#### 입력 값 검사하기

`상품 이름`은 다음 조건을 만족해야 한다.

- [ ] 상품 이름은 고유하다.
- [ ] 상품 이름은 공백 문자로만 이루어져 있어서는 안된다.
- [ ] 상품 이름은 숫자로만 이루어져 있어서는 안된다.
- [ ] 상품 이름은 특수 문자로만 이루어져 있어서는 안된다.



`상품 가격`은 다음 조건을 만족해야 한다.

- [ ] 상품 가격은 100원 이상이다.
- [ ] 상품 가격은 10원으로 나누어떨어진다.



`상품 개수`는 다음 조건을 만족해야 한다.

- [ ] 상품 개수는 1개 이상이다.



#### 입력 값 처리하기

입력 값이 유효하다면, 다음을 수행한다.

- [ ] `상품 정보`를 `상품 목록`에 추가한다.
- [ ] 현재 `상품 목록`을 테이블에 갱신한다.



입력 값이 유효하지 않다면, 다음을 수행한다.

- [ ] 입력 값을 모두 초기화한다.
- [ ] `alert`로 메시지를 출력한다.



### 📋 상품 현황

- [ ] 현재 `상품 목록`을  테이블에 출력한다.



## :atm: 잔돈 충전 탭

잔돈 충전 탭을 누르면 잔돈 충전 패널은 다음 내용을 보여준다.

- [ ] 자판기 동전 충전하기: 자판기의 `보유 금액`을 충전할 수 있다.
- [ ] 자판기가 보유한 동전: 자판기의 현재 `보유 금액`을 테이블로 보여준다.
  - [ ] 동전은 `10`, `50`, `100`, `500`원만 존재한다.



### 💰 자판기 동전 충전하기

- [ ] 최초 자판기의 `보유 금액`은 0원이다.
  - [ ] 각 동전의 개수는 0개이다.
- [ ] `충전할 금액` 입력하기: 관리자는 자판기에 충전할 금액을 입력할 수 있다.
- [ ] `충전할 금액` 제출하기:  관리자는 자판기에 충전할 금액을 제출할 수 있다.
- [ ] 자판기는 `충전할 금액`이 제출되면 다음을 수행한다.
  - [ ] 입력 값 검사하기: 입력 값이 유효한지 검사한다.
  - [ ] 입력 값 처리하기: 입력 값 검사하기의 결과에 따라 입력 값을 처리한다.



#### 입력 값 검사하기

`충전할 금액`은 다음 조건을 만족해야 한다.

- [ ] 충전할 금액은 0원 이상이다.
- [ ] 충전할 금액은 10원으로 나누어떨어진다.



#### 입력 값 처리하기

입력 값이 유효하다면, 다음을 수행한다.

- [ ] `충전 금액`을 더하여 현재 자판기의 `보유 금액`을 갱신한다.
- [ ] 현재 자판기의 `보유 금액`을 보여준다.
  - [ ] `보유 금액: {금액}원` 형식이다.
- [ ] 현재 자판기의 `보유 금액`을 테이블에 갱신한다.
  - [ ] `충전 금액`만큼 동전은 무작위로 생성된다.
  - [ ] 무작위로 생성된 동전들을 기존 동전에 더한다.



입력 값이 유효하지 않다면, 다음을 수행한다.

- [ ] 입력 값을 모두 초기화한다.
- [ ] `alert`로 메시지를 출력한다.



### 자판기가 보유한 동전

- [ ] 자판기의 현재 `보유 금액`을 테이블로 보여준다.
  - [ ] `{개수}개` 형식이다.



## 💸 상품 구매

상품 구매 탭을 누르면 상품 구매 패널은 다음 내용을 보여준다.

- [ ] 금액 투입: 사용자는 금액을 투입할 수 있다.
- [ ] 구매할 수 있는 상품 현황: 자판기는 현재 자신이 가지고 있는 재고 상품들을 보여준다.
- [ ] 잔돈: 사용자는 잔돈을 반환받을 수 있다.
  - [ ] 동전은 `10`, `50`, `100`, `500`원만 존재한다.



### 💰 금액 투입

- [ ] 최초 `충전 금액`은 0원이다.
  - [ ] 반환된 각 동전의 개수는 0개이다.
- [ ] `금액` 입력하기: 사용자는 투입할 금액을 입력할 수 있다.
- [ ] `금액` 투입하기: 사용자는 투입할 금액을 제출할 수 있다.
- [ ] 자판기는 `금액`이 투입되면 다음을 수행한다.
  - [ ] 입력 값 검사하기: 입력 값이 유효한지 검사한다.
  - [ ] 입력 값 처리하기: 입력 값 검사하기의 결과에 따라 입력 값을 처리한다.



#### 입력 값 검사하기

 투입된 `금액`은 다음 조건을 만족해야 한다.

- [ ] 투입된 금액은 0원 이상이다.
- [ ] 투입된 금액은 10원 단위로 나누어떨어진다.



#### 입력 값 처리하기

입력 값이 유효하다면, 다음을 수행한다.

- [ ] 현재까지 자판기에 `투입한 금액` 갱신하기
- [ ] 현재까지 자판기에 `투입한 금액` 보여주기
  - [ ] `투입한 금액: {금액}원` 형식이다.



### 📝 구매할 수 있는 상품 현황

- [ ] 상품 보여주기: 현재 자판기가 가지고 있는 `상품 목록`을 테이블로 보여준다.
- [ ] 상품 구매하기: 사용자는 `구매하기` 버튼으로 해당 상품을 구매하고 싶다는 의사를 전달할 수 있다.
- [ ] 자판기는 `구매하기` 버튼이 눌리면 다음을 수행한다.
  - [ ] 사용자의 `투입한 금액` 검사하기
  - [ ] `상품의 수량` 검사하기
  - [ ] `투입한 금액`과 `상품의 수량` 처리하기: 위 두 개의 조건을 통과했는지에 따라 금액과 수량을 처리한다.



#### 상품 보여주기

자판기의 현재 `상품 목록`을 테이블로 보여준다.

- [ ] 각 상품마다 `구매하기` 버튼이 있다.



#### 사용자의 투입한 금액 검사하기

- [ ] 현재 사용자의 `투입한 금액`이 구매하고자 하는 `상품의 가격`보다 많은지 검사한다.



#### 상품의 수량 검사하기

- [ ] 현재 상품이 수량이 `1`개 이상인지 검사한다.



#### 투입한 금액과 상품의 수량 처리하기

위 두 검사를 모두 통과하면 다음을 수행한다.

- [ ] `상품의 수량`을 한 개 줄인다.
- [ ] `상품의 수량`을 테이블에 갱신한다.
- [ ] `투입한 금액`을 `상품의 가격`만큼 줄인다.
- [ ] `투입한 금액`을 갱신하여 보여준다.



위 두 검사를 모두 통과하지 못하면 다음을 수행한다.

- [ ] `alert`로 구매에 실패하였음을 알린다.



### :purse: 잔돈

- [ ] 자판기는 `반환하기` 버튼이 눌리면 다음을 수행한다.
  - [ ] 잔돈으로 반환할 동전 구성하기
  - [ ] 잔돈 반환하기
  - [ ] 반환한 잔돈 보여주기



#### 잔돈으로 반환할 동전 구성하기

- [ ] `보유 금액` 중 최소한의 개수로 사용자의 `투입한 금액`을 구성한다.
  - [ ] 반환할 수 있는 `잔돈`을 구한다.



#### 잔돈 반환하기

- [ ] 구성한 `잔돈`만큼 `보유 금액`에서 뺀다.
- [ ] 구성한 `잔돈`만큼 `투입한 금액`에서 뺀다.



#### 반환한 잔돈 보여주기

- [ ] 구성한 `잔돈`을 테이블로 보여준다.
  - [ ] `{개수}개` 형식이다.
- [ ] `투입한 금액`을 갱신한다.
