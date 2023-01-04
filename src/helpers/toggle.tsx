import { useState, Fragment } from 'react';

interface props {
    children: React.ReactNode
}

const TOGGLE = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    return {
        BTN: (props: props) => {
            const { children } = props;

            return (
                <div onClick={() => setToggle(!toggle)}>
                    {children}
                </div>
            )
        },

        RENDER: (props: props) => {
            const { children } = props;

            return (
                <Fragment>
                    {toggle ? <Fragment> {children} </Fragment> : null
                    }
                </Fragment >
            )
        }
    }

}

export default TOGGLE; 