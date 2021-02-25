---
title: Docker Images
categories:
    - Docker
tags:
    - Docker
---

# Docker Images

Docker image는 파일시스템들의 layer로 만들어져 있다. 가장 base layer는 boot filesystem bootfs로 일반적인 Linux boot 파일시스템으로 되어있다. Docker 유저가 직접적으로 boot filesystem을 사용할 일은 없으며, 실제로 container가 부팅이 되면 메모리로 옴겨지고 boot 파일시스템은 unmount된다.

Boot layer 다음에는 rootfs 라고 하는 root 파일 시스템 layer이다. Root 파일 시스템은 실제 OS 가 설치된다. 원래 리눅스에서는 root filesystem은 처음 mount될때는 read-only로 mount가 된후 integrity check후 read-write으로 바뀐다. 하지만 Docker에서는 계속해서 read-only 모드이다. Read-write 모드로 변환하지 않는 이유는 Docker는 union mount를 사용해서 read-only 파일 시스템들을 root 파일 시스템 위에 덮는 구조로 이루어져 있기 때문이다.

Docker 구조에서는 이러한 파일 시스템 하나 하나가 바로 image이다. 그럼으로 image들을 서로 위에 layer시키는 구조로 되어있다. Base가 되는 이미지를 부모 이미지라고하며 맨 위의 이미지 부터 가장 밑 부분의 이미지 까지 횡단 하는 구조로 되어있다. 즉 filesystem / image를 수정하는 구조가 아니라 read-only filesystem / image 들을 서로 위에 layer 시키되 union mount 기법으로 마지막에는 하나의 파일 시스템으로 보이는 구조를 가지고 있는 것이다.

모든 read-only 파일시스템들이 mount가 되고 docker 컨테이너가 이미지로부터 시작될때 docker는 마지막으로 read-write 파일 시스템을 파일 시스템 layer 맨 위에 mount한다. 마지막에는 read-only가 아니라 read-write으로 올려놓는 이유는 read-write 파일 시스템에 컨테이너가 필요한 프로세스를 생성하고 실행하기 위해서이다.

![](https://images.velog.io/images/kcs15987/post/2ad5c6f5-74aa-4284-bf36-d7d31d2b4ae3/image.png)

이러한 pattern을 copy on write이라고 한다. 이 copy on write 구조는 Dockerfile 을 이용해 docker image 를 빌드할때 효과적이다. Docker image를 빌드할때 Dockerfile의 각각의 instruction이 바로 filesystem / image가 되는것이다.
