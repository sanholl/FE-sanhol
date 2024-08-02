/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // HTML/CSS/JS만 빌드해 Single-Page Application으로 만듭니다. 
  distDir: './build', // 빌드된 결과물이 ./build 폴더에 담깁니다.
}

module.exports = nextConfig