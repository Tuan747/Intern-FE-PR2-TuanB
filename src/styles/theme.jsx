export const theme = {
    text_gray: '#d1d1d1',
    text_white: '#fff',
    text_black: '#000000',
    text_orange: '#F18720',
    text_main: '#e00d7a',
    text_error: 'red',

    bg_main: '#4E0045',
    bg_main_fading: '#542F50',
    bg_black_fading: 'rgba(0,0,0,.15)',
    bg_yellow: '#FECF06',
    bg_black: '#000000',
    bg_orange: '#F18720',
    bg_white: '#fff',
    bg_hover: '#BC92B1',

    shadow_black_fading: '#00000033',
    shadow_black_img: '#2A1728',
    shadow_yellow: '#FECF06',

    border_img: '#A896A6',
    border_white: '#fff',
    border_yellow: '#fecf06',
    border_form: '#fec',
    border_orange: '#F18720',

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
