import React from "react";
export const Games = ({
  size = 12,
  width,
  height,
  strokeWidth = 1.5,
  fill = "none",
  ...props
}) => (
    <svg width="56" height="50" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_18_271)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.4167 12.3333C54.7692 12.3333 56.7148 13.6715 58.1393 15.0775C59.6224 16.5359 60.9822 18.4969 62.1908 20.6583C64.6174 24.9935 66.7295 30.6576 68.1262 36.2538C69.5137 41.8069 70.2815 47.6066 69.7913 52.1669C69.2979 56.7456 66.9392 61.6666 61.6667 61.6666C57.1157 61.6666 53.4897 59.3233 50.5235 56.9461L49.4412 56.055L47.9243 54.7754L46.5553 53.6407C43.4133 51.097 40.6229 49.3333 37 49.3333C33.3771 49.3333 30.5867 51.097 27.4448 53.6407L26.0758 54.7754L24.5588 56.055L23.4796 56.9461C20.5073 59.3233 16.8813 61.6666 12.3333 61.6666C7.05776 61.6666 4.69901 56.7456 4.20876 52.1669C3.72159 47.6036 4.48626 41.8069 5.87376 36.2538C7.27051 30.6576 9.38259 24.9935 11.8092 20.6552C13.0178 18.4969 14.3776 16.5359 15.8607 15.0744C17.2852 13.6715 19.2308 12.3333 21.5833 12.3333C23.1713 12.3333 24.7222 12.7126 26.2484 13.1658L28.0738 13.7239C28.379 13.8164 28.6812 13.9089 28.9833 13.9921C31.6504 14.7568 34.3792 15.4166 37 15.4166C39.6208 15.4166 42.3496 14.7568 45.0167 13.9921L47.7454 13.1689C49.2809 12.7156 50.8442 12.3333 52.4167 12.3333ZM52.4167 18.5C51.2358 18.5 50.0024 18.8576 48.8061 19.2492L47.3939 19.7148C47.1679 19.7883 46.9407 19.8582 46.7125 19.9245C43.9837 20.7015 40.5458 21.5833 37 21.5833C33.4542 21.5833 30.0163 20.7015 27.2875 19.9245L26.6092 19.7148L25.1939 19.2492C23.9976 18.8546 22.7643 18.5 21.5833 18.5C20.2945 18.7405 19.1383 20.3037 18.2657 21.7529L17.7785 22.6008L17.1927 23.6676C15.0898 27.4231 13.1535 32.5476 11.8585 37.7492C10.6406 42.6086 10.0486 47.2644 10.2737 50.7301L10.3538 51.6335L10.4155 52.1761L10.508 52.8175C10.7208 54.0539 11.1802 55.5 12.3333 55.5C14.837 55.5 16.9275 54.2543 19.5268 52.1885L20.7693 51.1771L23.1127 49.2161L24.1733 48.3528C27.454 45.7536 31.5579 43.1666 37 43.1666C42.4421 43.1666 46.546 45.7566 49.8267 48.3528L50.8904 49.2161L53.2337 51.1771L54.4733 52.1885C57.0725 54.2543 59.1599 55.5 61.6667 55.5C62.715 55.5 63.1898 54.3067 63.4272 53.1597L63.5444 52.4876L63.6585 51.5101C64.0378 47.9766 63.4519 42.9847 62.1446 37.7492C60.9544 32.9824 59.2278 28.2772 57.3284 24.6327L56.2215 22.5977L55.7343 21.756C54.8618 20.3037 53.7055 18.7405 52.4167 18.5ZM26.2083 24.6666C28.2527 24.6666 30.2134 25.4788 31.659 26.9244C33.1045 28.37 33.9167 30.3306 33.9167 32.375C33.9167 34.4194 33.1045 36.38 31.659 37.8256C30.2134 39.2712 28.2527 40.0833 26.2083 40.0833C24.164 40.0833 22.2033 39.2712 20.7577 37.8256C19.3121 36.38 18.5 34.4194 18.5 32.375C18.5 30.3306 19.3121 28.37 20.7577 26.9244C22.2033 25.4788 24.164 24.6666 26.2083 24.6666ZM47.7917 24.6666C48.5469 24.6667 49.2758 24.944 49.8401 25.4459C50.4045 25.9477 50.7651 26.6392 50.8534 27.3892L50.875 27.75V29.2916H52.4167C53.2025 29.2925 53.9584 29.5934 54.5299 30.1329C55.1013 30.6724 55.4452 31.4098 55.4913 32.1943C55.5373 32.9788 55.2821 33.7513 54.7777 34.354C54.2733 34.9566 53.5578 35.3439 52.7774 35.4367L52.4167 35.4583H50.875V37C50.8741 37.7859 50.5732 38.5417 50.0337 39.1132C49.4942 39.6847 48.7569 40.0285 47.9724 40.0746C47.1878 40.1206 46.4153 39.8654 45.8127 39.361C45.21 38.8566 44.8227 38.1411 44.7299 37.3607L44.7083 37V35.4583H43.1667C42.3808 35.4574 41.6249 35.1565 41.0534 34.617C40.482 34.0775 40.1381 33.3402 40.0921 32.5557C40.046 31.7712 40.3012 30.9986 40.8056 30.396C41.3101 29.7933 42.0255 29.406 42.8059 29.3132L43.1667 29.2916H44.7083V27.75C44.7083 26.9322 45.0332 26.148 45.6114 25.5697C46.1897 24.9915 46.9739 24.6666 47.7917 24.6666ZM26.2083 30.8333C25.7995 30.8333 25.4073 30.9957 25.1182 31.2849C24.8291 31.574 24.6667 31.9661 24.6667 32.375C24.6667 32.7839 24.8291 33.176 25.1182 33.4651C25.4073 33.7542 25.7995 33.9166 26.2083 33.9166C26.6172 33.9166 27.0093 33.7542 27.2985 33.4651C27.5876 33.176 27.75 32.7839 27.75 32.375C27.75 31.9661 27.5876 31.574 27.2985 31.2849C27.0093 30.9957 26.6172 30.8333 26.2083 30.8333Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_18_271">
    <rect width="74" height="74" fill="white"/>
    </clipPath>
    </defs>
    </svg>
);