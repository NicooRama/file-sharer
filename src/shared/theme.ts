const gray = {
    black: 'hsla(158, 0%, 15%, 1)',
    darkest: 'hsla(158, 0%, 22%, 1)',
    darken: 'hsla(158, 3%, 40%, 0.75)',
    dark: 'hsla(158, 6%, 59%, 0.7)',
    normal: 'hsla(158, 0%, 96%, 0.37)',
    light: 'hsla(158, 10%, 95%, 0.74)',
    lighten: 'hsla(158, 0%, 72%, 1)',
    lightest: 'hsla(158, 0%, 91%, 0.65)',
    white: 'hsla(0, 0%, 97%, 1)',
};

const primary = {
    black: 'hsla(159, 100%, 16%, 1)',
    darkest: 'hsla(159, 100%, 25%, 1)',
    darken: 'hsla(159, 100%, 34%, 1)',
    dark: 'hsla(159, 100%, 40%, 1)',
    normal: 'hsla(159, 100%, 43%, 1)',
    light: 'hsla(159, 99%, 46%, 0.9)',
    lighten: 'hsla(159, 85%, 54%, 0.65)',
    lightest: 'hsla(159, 100%, 54%, 0.35)',
    white: 'hsla(159, 100%, 69%, 0.15)',
};

export const theme: any = {
    colors: {
        tag: "#606060",
        text: "#000",
        textButton: "white",
        calendarText: "#000",

        primary,

        body: gray.white,

        success: {
            darkest: 'hsla(155, 59%, 20%, 1)',
            darken: 'hsla(146, 65%, 28%, 1)',
            dark: 'hsla(146, 62%, 38%, 1)',
            normal: 'hsla(145, 55%, 49%, 1)',
            light: 'hsla(146, 57%, 65%, 1)',
            lighten: 'hsla(141, 67%, 80%, 1)',
            lightest: 'hsla(142, 81%, 94%, 1)',
        },

        info: {
            darkest: 'hsla(207, 45%, 23%, 1)',
            darken: 'hsla(208, 63%, 27%, 1)',
            dark: 'hsla(207, 64%, 39%, 1)',
            normal: 'hsla(207, 61%, 49%, 1)',
            light: 'hsla(208, 60%, 62%, 1)',
            lighten: 'hsla(206, 79%, 81%, 1)',
            lightest: 'hsla(206, 100%, 97%, 1)',
        },

        error: {
            darkest: 'hsla(0, 60%, 24%, 1)',
            darken: 'hsla(0, 67%, 32%, 1)',
            dark: 'hsla(0, 70%, 42%, 1)',
            normal: 'hsla(0, 71%, 53%, 1)',
            light: 'hsla(0, 70%, 64%, 1)',
            lighten: 'hsla(0, 79%, 81%, 1)',
            lightest: 'hsla(0, 77%, 95%, 1)',
        },

        warn: {
            darkest: 'hsla(44, 66%, 22%, 1)',
            darken: 'hsla(43, 64%, 34%, 1)',
            dark: 'hsla(44, 57%, 52%, 1)',
            normal: 'hsla(42, 87%, 67%, 1)',
            light: 'hsla(44, 90%, 80%, 1)',
            lighten: 'hsla(44, 90%, 92%, 1)',
            lightest: 'hsla(44, 100%, 98%, 1)',
        },

        gray,

        card: {
            background: 'white'
        },

        sidebar: {
            background: {
                normal: gray.black,
                hover: 'hsla(158, 0%, 39%, 1)',
                active: gray.darken,
                pressed: gray.dark
            },
            text: {
                normal: gray.lighten,
                hover: 'white',
                active: 'white'
            }
        },

        bar: {
            background: {
                hover: primary.darken,
                pressed: primary.normal,
            },
            text: {
                normal: primary.normal,
                hover: 'white'
            }
        },

        typographic: {
            solid: "#000",
            fade: "#818181",
        },

        inputs: {
            placeholder: '#797979',
            border: '#BDBDBD',
            disabled: '#F2F2F2',
        },

        scrollbar: '#828282',
        disabled: '#F2F2F2',
        border: 'hsla(158, 0%, 81%, 1)',
        boxShadow: '#ced4da'
    },
    inputs: {
        borderRadius: 4,
    },
    font: {
        size: {
            xxs: 12,
            xs: 14,
            sm: 16,
            md: 18,
            lg: 20,
            xlg: 24,
            xxlg: 32,
            xxxlg: 48,
        },
        weight: {
            bold: 700,
            semiBold: 600,
            regular: 400,
            light: 300,
        }
    },
    boxShadow: `0px 2px 5px #ced4da`,
    transitionDuration: '1s',
    border: `1px solid #E0E0E0`,
    borderRadius: 4,
    spacing: {
        xxs: 4,
        xs: 8,
        sm: 12,
        md: 16,
        lg: 24,
        xlg: 32,
        x1: 48,
        x2: 64,
        x3: 96,
        x4: 128,
    },
    breakpoints: {
        mobile: {
            max: 991,
        }
    }
}
