# 도그푸터 실행 사양

## 도그푸터 지원 OS
|  | Windows 7 | Windows 10 |
| :-------- | :--------: | :--------: |
| 이미지 인식 | O | O |
| 마우스 이벤트 | O | O |
| 비활성 모드 | X | O |
| 창 숨김 | X | O |

## 도그푸터 지원 앱플레이어
|  | LDPlayer | NoxPlayer | Memu | BlueStack |
| :-------- | :--------: | :--------: | :--------: | :--------: |
| 이미지 인식 | O | O | O | X |
| 마우스 이벤트 | O | O | O | X |
| 비활성 모드 | O | O | X | X |
| 창 숨김 | O | O | X | X |


# 도그푸터 매크로 준비 사항

## Git for Windows 설치

오픈 소스 깃허브(github.com)를 사용하기 위해서는 컴퓨터에 git 이라는 프로그램을 설치해야 합니다.
도그푸터 매크로는 윈도우즈에서만 실행할 수 있기 때문에 윈도우즈용 Git을 설치하도록 합니다.
아래 링크를 클랙해서 "Download"버튼을 누르면 됩니다.

[Git for Windows 공식 홈페이지 바로가기 링크](https://gitforwindows.org/)

## Python 3.6.8 버전 설치

윈도우즈 OS 버전에 따라 설치하는 Python 버전이 다릅니다. 보통 윈도우7 은 32비트를 설치하고 윈도우10 은 64비트를 설치합니다. 파이썬 설치는 여기서 다루지 않습니다. 파이썬은 버전별로 민감하게 동작하므로 반드시 동일한 버전으로 설치하셔야 합니다. 구글이나 네이버에서 검색해보면 설치하는 방법이 자세히 나와 있습니다.

[Python 3.6.8 버전 윈도우 32비트(Windows 7/10) 다운로드 링크](https://www.python.org/ftp/python/3.6.8/python-3.6.8-webinstall.exe)

[Python 3.6.8 버전 윈도우 64비트(Windows 10) 다운로드 링크](https://www.python.org/ftp/python/3.6.8/python-3.6.8-amd64-webinstall.exe)

## Git Bash 실행해보기

"Git for Windows" 를 제대로 설치했다면 "Git Bash"라는 프로그램이 있어햐 합니다. 해당 프로그램이 없다면 구글링을 통해서 제대로 설치해주세요.
Git Bash를 실행합니다. 이 프로그램은 윈도우즈 CMD 창과 비슷하게 생겼습니다.

## 도그푸터 깃허브 오픈 소스 다운로드 받기

도그푸터 소스를 내려받을 새폴더를 만듭니다. D:\dogfooter 와 같이 아무 곳에나 원하시는 이름으로 폴더를 만듭니다.
폴더로 이동 후 마우스를 우클릭해봅니다.
우클릭하면 뜨는 팝업 메뉴에 "Git Bash Here" 가 있어야 합니다.
"Git Bash Here"가 없으면 Git for Windows가 제대로 설치가 되지 않은 것입니다. 설치를 제대로 해주세요.
"Git Bash Here"가 보인다면 클릭해주세요. 해당 폴더에서 Git Bash가 실행됩니다.

실행된 화면에서 아래와 똑같이 입력해주세요. 복사해서 붙여넣어도 됩니다.

```
git clone https://github.com/dogfooter-pawpad/dogfooter.git
```

## PIP 라이브러리 설치

도그푸터는 Python 으로 작성되었습니다. 또한 Python 에서 제공하는 기본 라이브러리 외에 외부 라이브러리를 사용합니다.
아래 명령어를 Git Bash에서 순서대로 실행해주시길 바랍니다.


```
python -m pip install --upgrade pip
```

```
pip install pywin32
```

```
pip install pyautogui
```

```
pip install numpy
```

```
pip install opencv-python
```

```
pip install matplotlib
```

```
pip install belfrywidgets
```

```
pip install simple_rest_client
```

```
pip install python-telegram-bot
```

여기까지 제대로 설치하셨다면 아래 명령어를 통해서 도그푸터 매크로가 실행됩니다.

```
python main.py
```

위 명령어를 입력하면 도그푸터 로그인 팝업창이 뜨게 됩니다. 로그인하지 않고 사용하고 싶은 경우에는
직접 Python 코드를 수정해서 실행하면 됩니다.

자동으로 최신 버전의 소스를 유지하기 위해서 아래 단계를 따라해주시기 바랍니다. 그렇지 않을 경우에는 로그인이 제대로 되지 않습니다.
마찬가지로 이 단계가 불필요한 분들은 코드를 직접 수정하셔서 사용하시면 됩니다.

## Node.js 설치

제가 작업하는 도그푸터 최신 코드를 자동으로 업데이트하기 위해서 Node.js 를 설치합니다.
Node.js 는 개발자들 사이에서 굉장히 핫한 프로그램이라고 생각하시면 됩니다. 
이 또한 Python과 마찬가지로 오픈소스입니다..
대신 Node.js 는 Javascript 언어로 작성합니다.
Node.js 에 대한 자세한 설명은 아래 공식 홈페이지를 참고하시길 바랍니다.

[Node.js 공식 홈페이지 바로가기](https://nodejs.org)

이제 Node.js 공식 홈페이지에서 Node.js 를 다운로드 받습니다. 본인의 Windows 환경에 맞게 32비트 또는 64비트는 다운로드 받습니다.
위에서도 언급한 것과 같이 보통은 윈도우7은 32비트, 윈도우10은 64비트입니다.(윈도우7도 64비트가 있습니다.)
이도 저도 모르겠다 싶으면 일단 64비트 받아보고 오류 나면 32비트 다시 받으면 됩니다.(64비트가 더 좋은 거라고 보면 됩니다)

[Node.js 32비트 인스톨러 다운로드 링크](https://nodejs.org/dist/v10.16.3/node-v10.16.3-x86.msi)

[Node.js 64비트 인스톨러 다운로드 링크](https://nodejs.org/dist/v10.16.3/node-v10.16.3-x64.msi)

다운로드 후 설치가 제대로 되었다면 도그푸터 소스 폴더에서 마우스 우클릭 > Git Bash 실행을 하나 더 합니다.
그리고 아래 명령을 입력합니다.

```
npm install --loglevel verbose
```

설치가 완료되었습니다. 아래 명령을 입력하면 도그푸터 매크로가 실행됩니다.

```
node dogfooter.js
```





