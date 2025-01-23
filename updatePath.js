import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 현재 스크립트 파일의 디렉토리를 기준으로 경로 설정
const currentDir = __dirname;
const appDirectory = path.join(currentDir, 'src', 'app');
const constantFilePath = path.join(
  currentDir,
  'src',
  'shared',
  'constant',
  'pathname.ts'
);

if (!fs.existsSync(appDirectory)) {
  console.error(`Error: ${appDirectory} 경로가 존재하지 않습니다.`);
  process.exit(1); // 스크립트 종료
}

// 경로를 상수 이름으로 변환하는 함수
function pathToConstantName(filePath) {
  return (
    path
      .relative(appDirectory, filePath)
      .replace(/\\/g, '/') // 백슬래시를 슬래시로 변환
      .replace(/\/page\.tsx$/, '') // "page.tsx" 제거
      .replace(/\(.*?\)\//g, '') // "(AFTERLOGIN)" 같은 부분 제거
      .replace(/\(.*?\)/g, '') // "(AFTERLOGIN)" 전체 제거
      .replace(/\[.*?\]/g, '') // "[id]" 같은 부분 제거
      .replace(/\//g, '_') // 슬래시를 '_'로 변환
      .replace(/-/g, '_') // '-'를 '_'로 대체
      .replace(/__+/g, '_') // 중복된 '__'를 하나로 축소
      .toUpperCase()
      .replace(/^_/, '') + '_PATHNAME' // 앞의 '_' 제거 후 "_PATHNAME" 추가
  );
}

// 상수 값 생성
function createConstantValue(filePath) {
  const relativePath = path
    .relative(appDirectory, filePath)
    .replace(/\\/g, '/') // 백슬래시를 슬래시로 변환
    .replace(/\/page\.tsx$/, '') // "page.tsx" 제거
    .replace(/\(.*?\)\//g, '') // "(AFTERLOGIN)" 같은 부분 제거
    .replace(/\(.*?\)/g, '') // "(AFTERLOGIN)" 전체 제거
    .replace(/\[.*?\]/g, ''); // "[id]" 같은 부분 제거

  // "(landingPage)" 디렉토리 처리
  if (relativePath === '') {
    return '/';
  }
  return `/${relativePath}`;
}

// 디렉토리를 재귀적으로 탐색하는 함수
function traverseDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      traverseDirectory(filePath, fileList);
    } else if (
      file === 'page.tsx' &&
      filePath !== path.join(appDirectory, 'page.tsx') // app/page.tsx 제외
    ) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// 기존 상수 파일 내용 읽기 (중복 방지)
let existingContent = '';
if (fs.existsSync(constantFilePath)) {
  existingContent = fs.readFileSync(constantFilePath, 'utf-8');
}

// 모든 page.tsx 파일 찾기
const pageFiles = traverseDirectory(appDirectory);

// 새로운 상수들을 저장할 배열
const newConstants = [];

// 각 page.tsx 파일에 대해 상수 생성
pageFiles.forEach((filePath) => {
  const constantName = pathToConstantName(filePath);
  const constantValue = createConstantValue(filePath);

  // 중복 방지
  if (!existingContent.includes(constantName)) {
    newConstants.push(`export const ${constantName} = "${constantValue}";`);
  }
});

// 새로운 상수들 추가
const updatedContent =
  `${existingContent.trim()}\n${newConstants.join('\n')}\n`.trim();

// 파일에 쓰기
fs.writeFileSync(constantFilePath, updatedContent);

console.log(
  `${newConstants.length}개의 상수가 ${constantFilePath}에 업데이트되었습니다.`
);
