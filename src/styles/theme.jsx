export const theme = {
    text_gray: '#d1d1d1',
    text_white: '#fff',

    bg_main: '#4E0045',
    bg_black_fading: 'rgba(0,0,0,.15)',
    bg_yellow: '#FECF06',

    size_text_xl: '18px '
};

export const dFlex = ($align, $justify, $direction) => {
    return `
        display: flex;
        align-items: ${$align};
        justify-content: ${$justify};
        flex-direction: ${$direction};
    `
}
