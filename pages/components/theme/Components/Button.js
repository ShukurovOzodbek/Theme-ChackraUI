
export const Button = {
    baseStyle: {
        width: '100%',
        fontSize: '12px',
        padding: "10px",
        color: 'green',
        backgroundColor: 'red !important',
        _hover: {
            backgroundColor: 'black !important'
        }
    },
    size: {
        sx: {
            width: '120px !important',
            fontSize: '24px'
        }
    },
    variants: {
        standart: {
            width: '100%',
            fontSize: '12px',
            padding: "10px",
            color: 'green',
            backgroundColor: 'red !important',
            _hover: {
                backgroundColor: 'black !important'
            }
        },
        outlined: {
            width: '100%',
            fontSize: '12px',
            padding: "10px",
            color: 'green',
            backgroundColor: 'red !important',
            border: '7px solid grey',
            _hover: {
                backgroundColor: 'black !important'
            }
        }
    }
}