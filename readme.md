# SimSimi

## Schema

### SimSimi

- 아래와 같은 형태이다. _id 와 createdAt, updatedAt은 자동으로 만들어지는 값이고 name, questions, answers만 신경쓰면 될것 같다. 

- questions와 answers가 독립적으로 관리되는것이 매우 구려보인다. 이후 변경해야 할 것으로 보인다.

``` json
{
    "_id": "63918c09fe5e976ff72d832c",
    "name": "김우정",
    "questions": [
        "q1",
        "q2",
        "q3"
    ],
    "answers": [
        "a1",
        "a2",
        "a3"
    ],
    "createdAt": "2022-12-08T07:02:33.538Z",
    "updatedAt": "2022-12-08T07:02:33.538Z",
    "__v": 0
}
```

## API 명세

### post /simsimi

- body
    - name : string
    - questions : string[]
    - answers : string[]

- response
    - success (201)
        - body 
            - message : `make SimSimi success`
            - id : string
    - fail (403)
        - body
            - errormessage : string

> 일단 questions랑 answers를 받기 쉬운 형태로 받아서 불편한 형태일 것 같습니다. 
``` talkSet : {question, answer}[] ```와 같은 형태가 더 편하시면 금방 바꿔드릴 수 는 있습니다.

> questions와 answers의 수가 맞지 않는 등의 에러 핸들링이 하나도 되어있지 않습니다. 추후에 변경할 필요가 있어보입니다.

### get /simsimi

- body  
    - id

- response
    - success (200)
        - body
            - simsimi : simsimi => **simsimi 객체를 그냥 던짐**

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
