---
layout: post
title: "docker.sock 에 대해서"
date: 2023-07-28 14:00:00 +0900
categories: docker
tag: [docker]
---

- TOC
  {:toc}

## 들어가며

Docker 를 사용 하다 보면 특이한 상황에 맞닿을 때가 많다.

CI/CD 라는 걸 해보고 싶은데 그 과정 중 하나인 Jenkins 를 Docker 에 설치 했다.

Jenkins 로 배포 스크립트를 수행하는데 배포 역시 Docker 로 수행하고 싶다면 생각 해야하는 부분이 생겨난다.

이미 Jenkins 를 Docker 로 설치 했는데 Docker 안에 또 Docker 를 띄워야 하는 상황이 되어 버린 것이다.

배포 자체를 다른 서버에서 수행하면 이런 고민 자체를 안해도 되겠지만 Jenkins 를 설치한 서버에서 실행하려면 이를 생각 할 수 밖에없다.

이런 상황을 해결 할 수 있도록 DinD ( Docker in Docker ) 라는걸 제공한다.

## Docker Test

테스트를 위해 간단한 image 에 volume 을 세팅해 보자.

```docker
> docker run -it -v /var/run/docker.sock:/var/run/docker.sock ubuntu
```

이렇게 세팅하면 로컬에 ubuntu 이미지가 있으면 바로 컨테이너가 생성되고 없으면 pull 한다.

그리고 -it 옵션이 있기 때문에 바로 콘솔로 접속 된다.

설치 된 ubuntu 컨테이너 에서 window 에 설치 된 image 가 보이면 docker.sock 연결에 성공한 것이다.

```docker
> docker image ls
```
