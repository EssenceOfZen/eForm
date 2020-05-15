import "../css/eForm.css";

export default {title: 'Button'};

export const initial = () => `<button class="btn">Button</button>`;

export const withBlueRing = () => `
    <button class="button e-white rounded ring-light-blue">Button</button>
`;

export const withRedRingAndGrow = () => `
    <button class="button e-white rounded ring-red grow">Button</button>
`;

export const flat = () => `
    <button class="button flat" style="color: black;">Flat Button</button>
`;

export const flatBlueAndRounded = () => `
    <button class="button flat e-light-blue rounded grow">Button</button>
`;