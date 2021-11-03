export const theme = {
    text_gray: '#d1d1d1',
    text_white: '#fff',

    bg_main: '#4E0045',
    bg_black_fading: 'rgba(0,0,0,.15)',
    bg_yellow: '#FECF06',
    bg_black: '#000000',

    size_text_l: '12px',
    size_text_xl: '18px',
    size_text_2xl: '20px',
    size_text_3xl: '22px',

    dFlex: function ($align, $justify, $direction) {
        return `
            display: flex;
            align-items: ${$align};
            justify-content: ${$justify};
            flex-direction: ${$direction};
        `
    }
};
