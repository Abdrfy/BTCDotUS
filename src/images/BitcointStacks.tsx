import * as React from 'react';
const SvgBitcoinStacks = (props: { size: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} fill="none" viewBox="0 0 147 66">
        <path fill="#fff" d="M113.731.65c17.985 0 32.564 14.58 32.564 32.564s-14.579 32.563-32.564 32.563c-17.984 0-32.563-14.579-32.563-32.563S95.748.651 113.731.651Z" />
        <path
            fill="#121212"
            d="m127.182 16.097-7.01 11.004h10.066v4.157H97.227v-4.157h10.066l-7.01-11.004h5.217l8.232 12.92 8.233-12.92h5.217Zm3.056 19.196v4.157h-9.862l6.928 10.881h-5.258l-8.314-13.123-8.314 13.123h-5.257l6.928-10.881h-9.862v-4.198l33.011.04Z"
        />
    </svg>
);
export default SvgBitcoinStacks;
