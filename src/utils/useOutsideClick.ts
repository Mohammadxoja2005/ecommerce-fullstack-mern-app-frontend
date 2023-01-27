import { useEffect } from "react";

interface objectTypesForRefs {
    current: any
}

const USEOUTSIDETOGGLE = <T extends objectTypesForRefs, R extends () => void>(elementRef: T, handler: R) => {

    if (elementRef === undefined || elementRef === null) {
        return;
    }

    useEffect(() => {
        if (!elementRef.current) return;

        document.addEventListener('click', (e) => {
            if (!elementRef.current.contains(e.target)) {
                handler();
            }
        })

    }, [elementRef, handler])
}

export default USEOUTSIDETOGGLE; 