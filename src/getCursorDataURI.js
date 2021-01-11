export default function getCursorDataURI(color) {
  const svg = `
  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <circle id="path-1" cx="23" cy="122" r="8"></circle>
      <filter x="-21.9%" y="-21.9%" width="168.8%" height="168.8%" filterUnits="objectBoundingBox" id="filter-2">
        <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
      </filter>
    </defs>
    <g id="cursor-tile">
      <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
      <circle stroke-opacity="0.1" stroke="#000000" stroke-width="1" fill="${color}" fill-rule="evenodd" cx="11" cy="11" r="7.5"></circle>
    </g>
  </svg>
`;
  return `data:image/svg+xml;base64,${window.btoa(svg)}`;
}
