# SimSimi

## how to run

``` 
yarn
yarn dev
```
yarn 없으면

```
npm install
npm run dev
```

> BASE_URL : ```http://localhost:1234```

## Schema

### SimSimi

``` javascript
interface talkSet {
    question : string,
    answer : string
}

interface SimSimi : {
    name: string,
    talkSets: talkSet[],
}
```

## API 명세

> localhost
### post /simsimi

- body
    - name : string
    - talkSets : TalkSet[]

- response
    - success (201)
        - body 
            - message : `make SimSimi success`
            - id : string

    - fail (403)
        - body
            - errormessage : string

<!-- > 일단 questions랑 answers를 받기 쉬운 형태로 받아서 불편한 형태일 것 같습니다. 
``` talkSet : {question, answer}[] ```와 같은 형태가 더 편하시면 금방 바꿔드릴 수 는 있습니다.

> questions와 answers의 수가 맞지 않는 등의 에러 핸들링이 하나도 되어있지 않습니다. 추후에 변경할 필요가 있어보입니다. -->

### get /simsimi

- body  
    - id

- response
    - success (200)
        - body
            - simsimi : simsimi => **simsimi 객체를 그냥 던짐** 
                > id, created_at같은것들이 같이 날라가는데 그냥 무시하고 써주세요.

    - fail (400) => id에 해당하는 심심이가 없을때
        - body
            - message : `There is no simsimi with id : ${id}`
    
    - fail (403)
        - body
            - errormessage : `${e}`

> 400에러를 세팅은 해놨지만 내부적인 string to id convert에서 에러가 나서 403이 갈 확률이 높긴 합니다.

## DB

일단 테스트용으로 만드는 것이니 제 회사 구글 계정으로 mongodb를 올렸습니다. 추후에 배포하게 되면 docker 써서 db 열도록 수정하겠습니다.

실제 성능이나 무결성 관리가 중요하다 하시면 mysql등으로 옮길 수도 있긴 한데 귀찮긴 합니다. ㅋㅋ;;
