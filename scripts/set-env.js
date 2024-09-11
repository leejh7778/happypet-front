// scripts/set-env.js
const fs = require('fs');
const path = require('path');

// 빌드된 index.html 파일 경로 설정
const filePath = path.resolve(__dirname, '../build/index.html');

// 파일 읽기
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.log('Error reading file:', err);
  }

  // 환경 변수에서 네이버 지도 API 키를 가져옵니다.
  const naverMapApiKey = process.env.REACT_APP_NAVER_MAP_API_KEY;

  // %REACT_APP_NAVER_MAP_API_KEY%를 실제 API 키로 치환합니다.
  const result = data.replace(/%REACT_APP_NAVER_MAP_API_KEY%/g, naverMapApiKey);

  // 수정된 내용을 다시 index.html 파일에 씁니다.
  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) return console.log('Error writing file:', err);
    console.log('Environment variables injected successfully!');
  });
});
