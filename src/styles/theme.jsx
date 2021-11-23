export const theme = {
    text_gray: '#d1d1d1',
    text_white: '#fff',
    text_black: '#000000',
    text_orange: '#F18720',
    text_main: '#e00d7a',
    text_error: 'red',
    text_Gift: '#7c2665',

    bg_main: '#4E0045',
    bg_main_fading: '#542F50',
    bg_black_fading: 'rgba(0,0,0,.15)',
    bg_yellow: '#FECF06',
    bg_black: '#000000',
    bg_orange: '#F18720',
    bg_white: '#fff',
    bg_white_fading: '#dfdcdc',
    bg_hover: '#BC92B1',
    bg_available_seat: '#E00D7A',
    bg_disabled_seat: '#c5bebe',
    bg_selected_seat: '#4E0045',
    bg_box_manager_user: '#27293D',

    shadow_black_fading: '#00000033',
    shadow_black_img: '#2A1728',
    shadow_yellow: '#FECF06',

    border_img: '#A896A6',
    border_white: '#fff',
    border_yellow: '#fecf06',
    border_form: '#fec',
    border_orange: '#F18720',

    size_text_m: '10px',
    size_text_l: '12px',
    size_text_xl: '18px',
    size_text_2xl: '20px',
    size_text_3xl: '22px',
    size_text_4xl: '30px',

    dFlex: function ($align, $justify, $direction) {
        return `
            display: flex;
            align-items: ${$align};
            justify-content: ${$justify};
            flex-direction: ${$direction};
        `
    }
};

const size = {
    mobile: '575px',
    mobileL: '767px',
    tablet: '768px',
    tabletL: '991px',
    laptop: '992px',
    laptopL: '1199.98px',
    large: '1200px'
}

export const device = {
    mobile: `(max-width: ${size.mobile}) and (max-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet}) and (max-width: ${size.tabletL})`,
    laptop: `(min-width: ${size.laptop}) and (max-width: ${size.laptopL})`,
    large: `(min-width: ${size.large})`,
};
