import * as React from 'react';
const SvgDomainSearch = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" fill="none" viewBox="0 0 77 85">
        <path
            fill="url(#domain_search_svg__a)"
            fillRule="evenodd"
            d="M32.075 2.525C33.912 1.459 36.35.926 38.773.926c2.435 0 4.87.533 6.708 1.6l24.666 14.238c3.685 2.13 6.71 7.355 6.71 11.614V56.86c0 4.26-3.025 9.486-6.71 11.616L45.481 82.717c-1.838 1.064-4.273 1.594-6.708 1.594-2.424 0-4.86-.53-6.698-1.594L7.41 68.476C3.718 66.346.701 61.119.701 56.86V28.378c0-4.258 3.017-9.483 6.708-11.614L32.075 2.525Z"
            clipRule="evenodd"
        />
        <path stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="m47.124 50.965 9.104 9.104" />
        <path
            stroke="#F5F5F5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4.5}
            d="M35.743 54c7.961 0 14.415-6.454 14.415-14.416 0-7.96-6.454-14.415-14.415-14.415-7.961 0-14.415 6.454-14.415 14.415C21.328 47.546 27.782 54 35.743 54Z"
        />
        <defs>
            <linearGradient id="domain_search_svg__a" x1={0.701} x2={76.856} y1={42.62} y2={42.62} gradientUnits="userSpaceOnUse">
                <stop stopColor="#704688" />
                <stop offset={1} stopColor="#5546FF" />
            </linearGradient>
        </defs>
    </svg>
);
export default SvgDomainSearch;
