var store = [{
        "title": "JSX",
        "excerpt":"JSX   const hi = &lt;p&gt;Hi&lt;/p&gt;;   위의 문법은 JSX라고 불리는 JS 확장버전이다. syntax extension for JS라고 한다. HTML과 아주 비슷하게 생겼고 JS 파일 내에서 작성할 수 있다.   JSX는 원래의 JS 문법이 아니기 때문에, JS 파일내에 JSX 문법이 있으면 브라우저에서 해석하지 못한다.   React.js를 사용하기 위해 JSX 문법이 포함되어 있으면, 해당 파일을 정규 JS 문법으로 변환시키는 컴파일 과정이 필요하다.   JSX element   const hi = &lt;p&gt;Hi&lt;/p&gt;;  const myFavorite = {     food: &lt;li&gt;샐러드&lt;/li&gt;,     animal: &lt;li&gt;dog&lt;/li&gt;,     hobbyL: &lt;li&gt;programming&lt;/li&gt;, };   JSX attribute   태그에 속성을 주고 싶을 때는 항상 ““로 감싸야한다.   예를 들어, class를 주고 싶을 때 원래 속성명은 class이지만 JSX에서는 className을 사용해야 한다.   const hi = &lt;input readOnly={true} /&gt;;  const myFavorite = {     food: &lt;li&gt;샐러드&lt;/li&gt;,     animal: &lt;li&gt;dog&lt;/li&gt;,     hobby: &lt;li className=\"list-item\"&gt;programming&lt;/li&gt;, };   Self-Closing Tag   JSX에서는 어떤 태그라도 self closing tag가 항상 가능하다. &lt;input&gt;과 같이 하나의 태그가 요소인 경우에는 &lt;input /&gt;과 같이 항상 /로 끝내줘야한다.   Nested JSX   중첩된 요소로 만들려면 ()로 감싸야한다.   const good = (     &lt;div&gt;         &lt;p&gt;hi&lt;/p&gt;     &lt;/div&gt; );   위와 같이 제일 처음 요소가 sibling이면 안된다. 무조건 하나의 태그로 감싸저야 한다.   const wrong = ( &lt;p&gt;list1&lt;/p&gt; &lt;p&gt;list2&lt;/p&gt; ); // 잘못된 코드   const right = (     &lt;div&gt;         &lt;p&gt;list1&lt;/p&gt;         &lt;p&gt;list2&lt;/p&gt;     &lt;/div&gt; ); // 맞는 코드   Rendering   html 요소, 또는 React 요소 등의 코드가 눈으로 볼 수 있도록 그려지는 것을 Rendering 이라고 말한다.   React 요소가 DOM node에 추가되어 화면에 렌더되려면 ReactDOM.render 함수를 사용한다.   첫 번째 인자에는 JSX로 React 요소를 인자로 넘기고, 두 번째 인자는 해당 요소를 렌더하고 싶은 container를 전달한다.   ReactDOM.render( \t&lt;h1&gt;Hello, world!&lt;/h1&gt; \tdocument.getElementbyID('root') );  ","categories": ["React"],
        "tags": ["React"],
        "url": "/react/JSX/",
        "teaser": null
      },{
        "title": "Linux",
        "excerpt":"Linux는 1991년 Linus Tovals가 개발한 운영체제 이다. Linux는 오픈소스이며 누구나 코드를 볼 수 있다.   Linux는 시스템을 운영하는데 가장 널리 사용되는 운영체제이다. Windows 시스템이나 application이 아닌 일반적으로 시스템 서버는 Linux 기반으로 운영되고있다.   Linux는 Windows처럼 일반인을 위한 운영체제가 아니기 때문에 익숙치 않으면 Linux 사용이 많이 어려울 수 있다.      Linux Directory Structure   PATH   Configs   Shell Commands   Linux File System Hierarchy (FHS)   Linux의 파일 구조는 다음과 같은 tree 형태로 되어있다.      FHS의 가장 위에는 / 디렉토리가 있다. Root 디렉토리라고 한다.시작점인 root 디렉토리 안에 여러 하위 디렉토리들이 있고 각 하위 디렉토리들 안에 또 하위 디렉토리 들이 있는 식이다. 각 디렉토리들은 /로 구분한다.   Home Directory   Linux file system에는 여러 디렉토리가 있지만 그 중 가장 중요하고 기본이 되는 디렉토리는 바로 home 디렉토리이다. 왜냐하면 home 디렉토리가 유저의 공간이기 때문이다.      Mac에서는 /home 디렉토리가 아니라 /Users 디렉토리에 유저의 home 디렉토리가 있다.   Path   디렉토리 경로에는 2가지 유형이 있는데 absolute path와 relative path이다.   Absolute Path   이름 그대로 절대경로이다. Absolute Path는 root 디렉토리에서 부터 시작하는 경로를 뜻한다.root 디렉토리에서 부터 시작하기 때문에 현재 나의 위치아 상관없이 항상 정확히 해당 경로로 이동 할 수 있다.   Relative Path   이름 그대로 상대경로이다. absolute path와는 다르게 현재 내 위치를 기반으로 움직이는 경로이다.경로를 이야기 할 때 .은 현재 디렉토리를 이야기한다.   ..은 현재 디렉토리의 상위 디렉토리를 의미한다.   Configs   Config fileLinux에는 설정을 주로 파일을 통해서 한다. 그리고 여러 config file, 즉 여러 설정 파일들이 있다. 그 중 가장 중요한 설정 파일이 바로 shell 설정 파일이다. 각 shell마다 고유 설정 파일이 있다. Bash는 .bashrc 라는 설정 파일을 사용하고 zsh는 .zshrc라는 설정 파일을 사용한다.   Shell Commands   Basic Shell Commands      cd = 해당 경로로 이동   ls = 현재 디렉토리 안의 파일 목록을 보여줌   mv = 원본이동   cp = 원본복사   cat = 파일 여러개의 내용을 화면에 출력할 때 이용   more = 파일을 읽어 화면에 화면 단위로 끊어서 출력   less = 한 번에 보여지는 만큼만 읽어서 출력하기 때문에 대용량의 파일을 열어 볼 때 빠르게 사용   tail = 파일의 내용을 뒤에서부터 출력   nohup = 터미널이 끊겨도 실행한 프로세스는 계속 동작하게 한다.   rm = 원복 삭제   mkdir = 폴더 생성   touch = 파일 생성   kill = 프로세서 강제종료   clear = 지난 화면 지우기   pwd = 현재 디렉토리 경로를 표시   chown = 파일의 owner 또는 group을 변경   chmod = 대상 파일과 디렉토리의 사용권한을 변경할 때 사용   grep = 파일 안 내용찾기   history = 그동안 사용자가 입력한 모든 터미널 명령어를 보여줌   ps = 현재 실행중인 모든 프로세서 표시   piping      |            pipe라고한다.       pipe는 일반적인 명령어가 아니라 명령어를 이어주는 역할을 한다.          ","categories": ["Os"],
        "tags": ["Os"],
        "url": "/os/Linux/",
        "teaser": null
      },{
        "title": "Os란?",
        "excerpt":"Operating System의 약자로 사용자가 컴퓨터를 쉽게 다룰 수 있게 해주는 인터페이스이다.  개인뿐 아니라 업무용 서버 등의 컴퓨터를 관리하고 제어하며, 컴퓨터를 작동시키기 위한 토대를 만드는 소프트웨어를 말한다.   OS의 종류   OS의 종류에는 Window, UNIX, LINUX, MS-DOS등이 있다.  단일 작업 처리 시스템에는 DOS, 다중 작업 처리 시스템에는 Windows, UNIX, LINUX등이 사용된다.  주로 Windows는 개인용 UNIX, LINUX는 서버용 운영체제로 사용된다.   OS의 목적   OS의 목적에는 처리능력 향상, 사용 가능도 향상, 신뢰도 향상, 반환 시간 단축 등이 있다.  처리능력, 반환시간, 사용가능도, 신뢰도는 OS의 성능을 평가하는 기준이 된다.           처리능력       일정 시간 내에 시스템이 처리하는 일의 양            반환시간       시스템에 작업을 의뢰한 시간부터 처리가 완료될 때까지 걸린 시간            사용가능도       시스템을 사용할 필요가 있을 때 즉시 사용 가능한 정도            신뢰도       시스템이 주어진 문제를 정확하게 해결하는 정도       OS의 기능      프로세서, 기억장치, 입출력장치, 파일 및 정보 등의 자원을 관리한다.   자원을 효율적으로 관리하기 위해 자원의 스케줄링 기능을 제공한다.   사용자와 시스템간의 편리한 인터페이스를 제공한다.   시스템의 각종 하드웨어와 네트워크를 관리, 제어한다.   데이터를 관리하고, 데이터 및 자원의 공유 기능을 제공한다.   시스템의 오류를 검사하고 복구한다.   자원 보호 기능을 제공한다.   입출력에 대한 보조 기능을 제공한다.   가상 계산기 능력을 제공한다.   OS의 주요 자원관리      프로세스 관리            프로세스 스케줄링 및 동기화 관리담당       프로세스 생성과 제거, 시작과 정지, 메세지 전달등의 기능 담당                기억장치 관리       프로세스에게 메모리 할당 및 회수 관리 담당            주변장치 관리       입출력 장치 스케줄링 및 전반적인 관리 담당            파일 관리       파일의 생성과 삭제, 변경, 유지 등의 관리 담당      ","categories": ["Os"],
        "tags": ["Os"],
        "url": "/os/what-is-os/",
        "teaser": null
      },{
        "title": "Array",
        "excerpt":"특징      가장 큰 특징은 순차적으로 데이터를 저장한다는 것이다.   주로 서로 연결된 데이터들을 순차적으로 저정할때 사용한다.   순서가 상관 없더라도 서로 연결된 데이터들을 저장할때 일반적으로 사용된다.   이미 생성된 리스트도 수정 가능하다.   동일한 값도 여러번 삽입 가능하다.   Multi-dimensional Array(다중차원 배열)이다.   내부구조      순서가 있다보니 당연하 순차적으로 번호를 지정할 수 있다. 이 번호를 index라고 한다.   index는 0부터 시작되며 마이너스 부호를 가질 수도 있다. 마이너스 index는 맨 마지막 요소부터 시작한다. 예를 들어 맨 마지막 요소의 index는 -1이다.   단점   1. Removing or Adding Elements   중간의 특정 요소를 삭제해야 하는 경우      순차적으로 담겨있는 데이터 중 특정 위치에 있는 중간의 요소가 삭제 되는 경우에, 항상 메모리가 순차적으로 이어져있어야 하기 때문에, 삭제된 요소로부터 뒤에 있는 모든 요소들을 앞으로 한칸씩 이동시켜주어야 한다.   그러므로 배열에서 요소를 삭제하는 것은 다른 자료구조에 비해 느릴 수 있다.   요소를 삭제하는 과정이 코드 상에서는 한 줄 이지만 실제 메모리 상에서 이루어지는 작업은 훨씬 커진다.   중간에 요소가 추가 되는 경우도 마찬가지이다. 특정 위치에 새롭게 요소가 추가되는 경우에는 그 뒤의 요소들이 하나씩 밀리게 된다.   그렇기 때문에 Array는 정보가 자주 삭제 되거나 추가되는 데이터를 담기에는 적절치 않다.   2. Array Resizing   배열은 메모리가 순차적으로 채워지기 때문에 배열이 처음 생성될 때 어느정도 메모리를 미리 할당한다.   메모리를 할당 함으로써 새로 추가되는 요소들도 순차적으로 메모리에 저장될 수 있다.   하지만 요소들이 처음 할당한 메모리 이상으로 많아지면 resizing이 필요하다.   즉 메모리를 추가 할당해야한다. 그리고 추가적으로 할당된 메모리 또한 순차적이어야 하기때문에 resizing은 오래걸리는 작업이다.   그렇기 때문에 Array는 사이즈 예측이 잘 안되는 데이터를 다루기에 적절치 않다.  ","categories": ["자료구조","Data Structure"],
        "tags": ["자료구조","Data Structure"],
        "url": "/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/data%20structure/array/",
        "teaser": null
      },{
        "title": "RDBMS",
        "excerpt":"RDBMS(관계형 데이터베이스)      이름 그대로, 관계형 데이터 모델에 기초를 둔 데이터베이스 시스템을 말한다.   관계형 데이터란 데이터를 서로 상호관련성을 가진 형태로 표현한 데이터를 말한다.            모든 데이터들은 2차원 테이블(table)들로 표현 된다.       각각의 테이블은 컬럼(column)과 row(로우)로 구성된다.       각각의 테이블들은 서로 상호관련성을 가지고 서로 연결될 수 있다.                    테이블끼리의 연결에는 크게 3종류가 있다                            one to one               one to many               many to many                                                   Why connect the tables?      하나의 테이블에 모든 정보를 다 넣으면 동일한 정보들이 불필요하게 중복되어 저장된다.더 많은 디스크를 사용하게되고 잘못된 데이터가 저장 될 가능성이 높아진다.   여러 테이블에 나누어서 저장한 후 필요한 테이블끼리 연결 시키면 위의 2문제가 사라진다. 중복된 데이터를 저장하지 않음으로 디스크를 더 호율적으로 쓰고, 또한 서로 같은 데이터 이지만 부분적으로 틀린 데이터가 생기는 문제가 없어진다. 이것을 normalization(정규화) 이라고 한다.   ACID      원자성(Atomicity)은 트랜잭션과 관련된 작업들이 부분적으로 실행되다가 중단되지 않는 것을 보장하는 능력이다. 예를 들어, 자금 이체는 성공할 수도 실패할 수도 있지만 보내는 쪽에서 돈을 빼 오는 작업만 성공하고 받는 쪽에 돈을 넣는 작업을 실패해서는 안된다. 원자성은 이와 같이 중간 단계까지 실행되고 실패하는 일이 없도록 하는 것이다.   일관성(Consistency)은 트랜잭션이 실행을 성공적으로 완료하면 언제나 일관성 있는 데이터베이스 상태로 유지하는 것을 의미한다. 무결성 제약이 모든 계좌는 잔고가 있어야 한다면 이를 위반하는 트랜잭션은 중단된다.   고립성(Isolation)은 트랜잭션을 수행 시 다른 트랜잭션의 연산 작업이 끼어들지 못하도록 보장하는 것을 의미한다. 이것은 트랜잭션 밖에 있는 어떤 연산도 중간 단계의 데이터를 볼 수 없음을 의미한다. 은행 관리자는 이체 작업을 하는 도중에 쿼리를 실행하더라도 특정 계좌간 이체하는 양 쪽을 볼 수 없다. 공식적으로 고립성은 트랜잭션 실행내역은 연속적이어야 함을 의미한다. 성능관련 이유로 인해 이 특성은 가장 유연성 있는 제약 조건이다. 자세한 내용은 관련 문서를 참조해야 한다.   지속성(Durability)은 성공적으로 수행된 트랜잭션은 영원히 반영되어야 함을 의미한다. 시스템 문제, DB 일관성 체크 등을 하더라도 유지되어야 함을 의미한다. 전형적으로 모든 트랜잭션은 로그로 남고 시스템 장애 발생 전 상태로 되돌릴 수 있다. 트랜잭션은 로그에 모든 것이 저장된 후에만 commit 상태로 간주될 수 있다.   트랜잭션      ACID를 제공함으로 따라서 트랜잭션(일련의 작업들을 한번에 하나의 unit으로 실행하는것) 기능을 제공한다.            트랜잭션은 일련의 작업들이 마치 하나의 작업처럼 취급되어서 모두 다 성공하거나 아니면 모두 다 실패하는걸 이야기 한다.          ","categories": ["Database"],
        "tags": ["Database"],
        "url": "/database/rdbms/",
        "teaser": null
      },{
        "title": "Set, Dictionary, Hash",
        "excerpt":"Set   set는 list처럼 순열 자료구조이다. 하지만 set는 순서라는 개념이 존재하지 않는다.   특징      데이터를 비순차적으로 저장할 수 있는 순열 자료구조이다.   삽입 순서대로 저장되지 않는다.   수정가능하다.   동일한 값을 여러번 삽입 불가능하다. 동일한값이 여러번 삽입 되면 하나의 값만 저장된다.   Fast Lookup이 필요할 때 주로 쓰인다.   구조         set요소들이 저장될 때 순서는 다음과 같다.            저장할 요소읙 값의 hash 값을 구한다.       hash값에 해당하는 공간(bucket)에 값을 저장한다.           이렇게 set는 저장하고자 하는 값의 해쉬값에 해당하는 bucket에 값을 저장하기 때문에 순서가 없다. 순서가 없기 때문에 indexing도 없다.   hash값을 기반으로 저장하기 때문에 look up이 굉장히 빠르다.   Dictionary   Dictionary는 key-value 형태의 값을 저장할 수 있는 자료구조이다.   특징      set와 마찬가지로 특정 순서대로 데이터를 리턴하지 않는다.   key의 값은 중복될수 없다.(만일 중복된 key가 있으면 먼저 있던 key와 value를 대체한다.)   수정 가능하다.   구조         set와 비슷하게 key값의 hash값을 구한 후 hash값에 속해있는 bucket에 값을 저장한다.   Hash   hash란 단 방향 암호화이다. 입력 데이터를 변환하여 원본 데이터로 복호화할 수 없도록 하는 과정이다.  ","categories": ["자료구조","Data Structure"],
        "tags": ["자료구조","Data Structure"],
        "url": "/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/data%20structure/set-dictionary-hash/",
        "teaser": null
      },{
        "title": "Stack & Queue",
        "excerpt":"Stack   stack은 LIFO(Last In First Out)라고 한다. 마지막으로 저장한 데이터가 처음으로 읽힌다는 뜻이다.         Stack에서 데이터 저장은 push라고 한다.   데이터를 읽어들이는 건 pop라고 한다. 다만 pop은 읽어들임과 동시에 stack에서 삭제한다.   리스트를 사용한 Stack 구현 예제   class Stack:    def __init__(self):      self._stack = []     def push(self, data):      self._stack.append(data)     def pop(self):      if len(self._stack) == 0:        return None       data = self._stack[-1]      del self._stack[-1]       return data     def peek(self):      if len(self._stack) == 0:        return None       data = self._stack[-1]       return data   Queue   Stack과 반대로 FIFO(First In First Out)이다. 즉 먼저 push 된게 먼저 pop된다는 말이다.      리스트를 사용한 Queue 구현 예제   class Queue:     def __init__(self):         self._queue = []      def push(self, data):         return self._queue.append(data)      def pop(self)         if len(self._queue) == 0:             return None          return self._queue.pop()      def peek(self):         if len(self._queue) == 0:             return None          return self[0]  ","categories": ["자료구조","Data Structure"],
        "tags": ["자료구조","Data Structure"],
        "url": "/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/data%20structure/stack-queue/",
        "teaser": null
      },{
        "title": "Tree",
        "excerpt":"Tree      Tree는 일반적으로 대상 정보의 각 항목들을 계층적으로 연관되도록 구조화 시키고자 할 때 사용하는 비선형 자료구조이다.   데이터 요소들의 단순한 나열이 아닌 부모 - 자식 관곅의 계층적 구조로 표현된다.   Tree는 그래프의 한 종류이며 사이클이 없다.   Tree 자료구조는 여러유형이 있지만 그 중 가장 기본은 binary tree 구조가 대표적이다.   binary tree는 두개의 자식노드를 가진 트리 형태이다.   Tree의 자료구조는 데이터를 거꾸로된 나무 형태로 저장하는 모양이다.   계층적인 관계의 표현에 쓰이고, 윈도우와 리눅스의 파일시스템 구조도 Tree로 표현된다.   용어         Node : Tree구조의 교점이다. Node가 데이터를 가지고 있고 또한 자식노드를 가지고 있다. Tree 자료구조는 노드를 기본으로 구성된다.   Root Node: Tree구조의 가장 위 노드.   Edge: Tree를 구성하기 위해 노드와 노드를 연결하는 선이다.   level: Tree의 특정 깊이를 가지는 노드의 집합이다.   degree: 하위 Tree개수 / 각 노드가 지닌 가지의 수를 말한다.   Internal Node : Leaf노드를 제외한 중간에 위치한 노드들을 말한다.   Leaf Node: 하위에 다른 노드가 연결되어 있지 않은 노드이다.   Tree의 속성 중 가장 중요한 것이 ‘루트 노드를 제외한 모든 노드는 단 하나의 부모노드만을 가진다’는 것이다.   Tree의 탐색   Tree의 순회란 Tree의 각 노드를 체계적인 방법으로 방문하는 과정을 말한다.      전위순회(preorder)루트노드 - 왼쪽 서브Tree - 오른쪽 서브Tree 순으로 순회하는 방식이다.   중위순회(inorder)루트노드에서 시작해서 왼쪽 서브Tree - 노드 - 오른쪽 서브Tree 순으로 순회하는 방식이다.   후위순회(postorder)루트노드에서 시작해서 왼쪽 서브Tree - 오른쪽 서브Tree - 노드 순으로 순회하는 방식이다.  ","categories": ["자료구조","Data Structure"],
        "tags": ["자료구조","Data Structure"],
        "url": "/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/data%20structure/tree/",
        "teaser": null
      },{
        "title": "Tuple",
        "excerpt":"특징      List와 마찬가지로 데이터를 순차적으로 저장할 수 있는 순열 자료구조이다.   LIst와 다르게 한 번 정의되고 나면 수정할 수 없다.   2-3개 정도의 적은 수의 소규모 데이터를 저장할 때 많이 사용한다.   장점      List보다 더 가볍고 메모리를 적게 차지한다.   Tuple은 간단한 값을 빨리 표현하고 싶을때 많이 사용한다.            ex           // Tuple을 사용하는 경우 [(1,2), (2,4)] // Array(List) 안의 Tuple  // Tuple을 안 쓰는 경우에는 class를 생성해야함 class cord: \tdef __init__(self, x, y): \t\tself.x = x \t\tself.y = y   단점      Tuple의 데이터는 무슨 의미인지 명확하지 않다.   데이터의 의미를 문맥을 보고 가정해야한다.            예를들어 객체의 경우 key-value 쌍으로 이루어진 데이터이기 때문에 무슨 데이터인지 파악이 쉽지만, Tuple의 경우 괄호 안에 데이터만 담겨있기 때문에 문맥에 맞게 의미를 추측해야 한다.           Tuple을 사용하기 좋은 곳           List를 쓰기에는 간단한 데이터들을 표현할 때 사용한다.              ex) 좌표 데이터           coordinations = [     (1, 2),     (3, 4),     (5, 6) ]          ","categories": ["자료구조","Data Structure"],
        "tags": ["자료구조","Data Structure"],
        "url": "/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/data%20structure/tuple/",
        "teaser": null
      },{
        "title": "자료구조란?",
        "excerpt":"   자료구조란 데이터에 편리하게 접근하고 조작하기 위한 데이터를 저장하거나 조직하는 방법이다.   자료구조의 종류에는 여라가지가 있습니다. 하지만 모든 목적에 부합하는 자료구조는 없다. 따라서 각각의 자료구조가 갖는 장점과 한계를 잘 이해하고 상황에 맞게 올바른 자료구조를 선택하고 사용하는 것이 중요하다.   자료구조는 언어별로 지원하는 양상이 다르다.   각 언어가 가진 자료구조의 종류와 그것에 대한 사용 방법을 익히는 것이 중요하지만, 무엇보다 각 자료구조의 본질과 컨셉을 이해하고 상황에 맞는 적절한 자료 구조를 선택하는 것이 중요하다.   자료구조의 분류                  Primitive Data Structure(단순 구조)       프로그래밍에서 사용되는 기본 데이터 타입                       None-Primitive Data Structure(비단순 구조)       단순한 데이터를 저장하는 구조가 아니라 여러 데이터를 목적에 맞게 효과적으로 저장하는 자료 구조 - Linear Data Structure(선형 구조)       저장되는 자료의 전후 관계가 1:1 (ex. List, Stacks, Queues) - Non-Linear Data Structure(비선형 구조)       데이터 항목 사이의 관계가 1:n 또는 n:m (ex. Graphs, Trees )          ","categories": ["자료구조","Data Structure"],
        "tags": ["자료구조","Data Structure"],
        "url": "/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/data%20structure/what-is-data-structure/",
        "teaser": null
      }]
