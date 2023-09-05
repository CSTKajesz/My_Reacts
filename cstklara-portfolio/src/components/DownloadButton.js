import { useEffect, useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

import pdf from '../assets/CSTK_CV_FE_black.pdf';

function Button() {
    const [downloadUrl, setDownloadUrl] = useState('');

    useEffect(() => {
        setDownloadUrl(pdf);
    }, []);

    return (
        <div>
            <button style={{ padding: "1em 1em", borderRadius: "2px", opacity: "0.8", border: "none", backgroundColor: 'red' }}>
                <a href={downloadUrl} download="my-pdf-file.pdf" className="download-button" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none', verticalAlign: 'super' }}>
                    <AiOutlineDownload className="download-icon" style={{ marginRight: '0.5em' }} />
                    Download CV
                </a>
            </button>
        </div>
    );
}

export default Button;
