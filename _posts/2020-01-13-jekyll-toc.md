---
layout: post
title:  "Jekyll TOC"
date:   2020-01-09 11:00:00 +0900
categories: [Jekyll]
tag: [TOC]
---

* TOC
{:toc}

# Jekyll toc 에 대해서

* TOC ( table of contents ) 
* 마크다운으로 글 작성 시 `#` `##` 과 같이 제목을 붙이는데 이런 제목들을 table 형식으로 표기해 주는 기능 말합니다.

# element

* Jekyll 에서 markdown 형식에 문서를 작성 할 때 아래와 같이 입력하면 페이지 로딩 시 추가로 element 가 생성 됩니다.
* 해당 엘리먼트는 ul tag , li tag 로 이루어 졌으며 그 기준은 해당 페이지에 제목 데이터에 따릅니다. 
* post 데이터 페이지 로딩 시 `cotent` 객체로 생성되기 때문에 표시를 해두면 요소검사를 통해 바로 알 수 있습니다.
* `content` 객체는 *<article>* 이라는 태그 안에 생성 되며 
    * 그 엘리먼트는 ul 태그에 *markdown-toc* 이라는 아이디로 생성 됩니다.
    * 포스트 최상단에 보여지게 됩니다.

```sql
-- toc 생성
* TOC
{:toc}
```

