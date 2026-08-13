# 박다인 포트폴리오 · 경력기술서

GitHub Pages로 배포되는 정적 사이트입니다. 빌드 과정 없이 HTML 파일이 그대로 배포됩니다.

- 포트폴리오: https://ps9561335-cloud.github.io/portfolio/
- 경력기술서: https://ps9561335-cloud.github.io/portfolio/career.html

검색엔진에는 노출되지 않습니다(`noindex` + `robots.txt` 전체 차단). 링크를 아는 사람만 볼 수 있습니다.

## 파일

| 파일 | 설명 |
|---|---|
| `index.html` | 포트폴리오 |
| `career.html` | 경력기술서 (화면 열람 · 인쇄) |
| `박다인_경력기술서.pdf` | 경력기술서 PDF — `career.html` 에서 생성 |
| `robots.txt` | 검색엔진 차단 |
| `.nojekyll` | GitHub Pages의 Jekyll 처리 비활성화(한글 파일명 안전) |

프로젝트 카드 순서는 각 `<article>` 의 `data-order` 값으로 정해집니다(작을수록 위, 최신순).
기본 5개만 보이고 나머지는 "더보기"로 펼쳐집니다.

## 로컬에서 보기

```bash
npm run serve
# http://localhost:4180/          포트폴리오
# http://localhost:4180/career.html   경력기술서
```

## 경력기술서 PDF 재생성

`career.html` 을 수정한 뒤:

```bash
npm install   # 최초 1회
npm run pdf
```

## 배포

`main` 브랜치에 푸시하면 GitHub Pages가 자동 반영합니다(1~2분 소요).

```bash
git add -A && git commit -m "수정 내용" && git push
```

푸시하려면 GitHub 계정이 `ps9561335-cloud` 로 활성화돼 있어야 합니다.

```bash
gh auth switch --user ps9561335-cloud
```
