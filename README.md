## Notion API를 활용한 프로젝트 & 블로그 포트폴리오

### Tech Stacks
- TypeScript
- Next.js
- TailwindCSS
- Recoil

### Description
> Notion에서 Workspace와 연동하여 해당 Workspace에 기록된 내용을 API로 받을 수 있습니다. 베이스는 TypeScript와 Next.js를 사용하고 구현하였고, TailwindCSS로 스타일링을 작업했습니다. 아직 적용하지 않았지만, 상태 관리로는 Recoil를 고려하고 있습니다. 

### Retrospect
1. Notion에서 API를 제공할 때, 워낙 다양한 Metadata를 제공하기 때문에 Overfetching이 존재했다. 이것을 해결할 수 있는 문제로 GraphQL를 생각하고 있다. 
2. 처음으로 이미지를 React Component로 바꾸어 관리했다. 동적으로 이미지를 관리하는 것이 편하다. 
3. Notion API의 특성 상 받아오는 데이터가 많기 때문에 어려움이 Type을 만들고 관리하는 것이 어려웠다. 
4. 처음에는 Notion에서 제공하는 데이터를 포멧에 맞게 직접 파싱하려고 했지만, NotionRenderer라는 좋은 라이브러리를 찾게 되었다. 다만, d.ts 파일을 좀 뜯어봐야 최대한으로 활용할 수 있을 것 같다. 
5. Github에서 제공하는 api를 받아와서 최신 커밋이 뉴스피드처럼 나오도록 구현했으나, 포트폴리오를 방문하는 이들 입장에서 유의미한 정보인지 모르겠다. 

### Library
1. Notion Client
2. Notion Renderer
3. etc...
