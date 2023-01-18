import { useState, Fragment, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";

interface props {
    children: React.ReactNode
}

const TOGGLE = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const btn = useRef<any>();
    // const div = useRef<any>();

    useEffect(() => {
        const node = document.getElementById('node');
        const element = node;
        const btn1 = document.querySelector('div[data-order="2"]'); 
         
        let handler = (e: any) => { 
            if(node) {
                if (!node.contains(e.target)) {
                    setToggle(false);
                } else if (element == node && element.contains(e.target)) {
                    setToggle(true);
                }
                // else { 
                //     console.log(node);
                //     setToggle(true);
                // }
            }

            // if (!div.current.contains(e.target)) {
            //     setToggle(false);
            // }


            // if(e.target.contains(div.current)) {
            //     setToggle(false);
            // }  

            // console.log(e.target); 

            // setToggle(false);  
        }

        // document.addEventListener('mousedown', handler);

        // btn.current.addEventListener('click', () => {
        //     setToggle(!toggle);
        // })

        // btn.current.addEventListener('mouseout', () => {
        //     setToggle(false)
        // }) 

    }, [btn.current, toggle])

    return {
        BTN: (props: props) => {
            const { children } = props;

            return (
                <div ref={btn} onClick={() => setToggle(!toggle)}>
                    {children}
                </div>
            )
        },

        RENDER: (props: props) => {
            const { children } = props;

            return (
                <Fragment>
                    {toggle ? <Fragment> {children} </Fragment> : null}
                </Fragment>
            )
        }
    }

}

export default TOGGLE; 