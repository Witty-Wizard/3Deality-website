import { useEffect, useState } from 'react';
interface SlicerWindowProps {
    files: File[];
}

const SlicerWindow = ({ files }: SlicerWindowProps) => {
    const [api, setApi] = useState<any>(null);

    useEffect(() => {
        // Load the external script dynamically
        const script = document.createElement("script");
        script.src = "https://grid.space/code/frame.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            let win = window as any;
            if (win.kiri && win.kiri.frame) {
                let kiriAPI = win.kiri.frame;
                kiriAPI.setFrame("kiriFrame");
                setApi(kiriAPI);
            }
        };
    }, []);

    useEffect(() => {
    }, [files]);

    return (
        <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
            < iframe
                id="kiriFrame"
                src="https://grid.space/kiri/"
                className="w-full h-full border-none"
            />
        </div >
    );
};

export default SlicerWindow;