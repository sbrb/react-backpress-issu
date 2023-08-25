// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// const BlogPage = () => {
//     const [showText, setShowText] = useState(false);
//     const history = useHistory();

//     const handleTextToggle = () => {
//         if (!showText) {
//             setShowText(true);
//             history.push({ state: 'textContainerOpen' });
//         } else {
//             setShowText(false);
//             history.goBack();
//         }
//     };

//     useEffect(() => {
//         const handlePopstate = () => {
//             if (showText) {
//                 setShowText(false);
//             }
//         };

//         window.onpopstate = handlePopstate;

//         return () => {
//             window.onpopstate = null;
//         };
//     }, [showText]);

//     return (
//         <div className="container">
//             <h1>Blog Page</h1>
//             <button className="button" onClick={handleTextToggle}>
//                 Toggle Text
//             </button>
//             {showText && (
//                 <div className="text-container">
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <p>This is some text in a div.</p>
//                     <button className="button" onClick={handleTextToggle}>
//                         Close
//                     </button>
//                 </div>
//             )}
//             <button className="button" onClick={history.goBack}>
//                 Previous
//             </button>
//         </div>
//     );
// };

// export default BlogPage;





import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
    const [showText, setShowText] = useState(false);
    const navigate = useNavigate();

    const handleTextToggle = () => {
        if (!showText) {
            setShowText(true);
            navigate('', { state: 'textContainerOpen' });
        } else {
            setShowText(false);
            navigate(-1);
        }
    };

    useEffect(() => {
        const handlePopstate = () => {
            if (showText) {
                setShowText(false);
            }
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, [showText]);

    return (
        <div className="container">
            <h1>Blog Page</h1>
            <button className="button" onClick={handleTextToggle}>
                Toggle Text
            </button>
            {showText && (
                <div className="text-container">
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <p>This is some text in a div.</p>
                    <button className="button" onClick={handleTextToggle}>
                        Close
                    </button>
                </div>
            )}
            <button className="button" onClick={() => navigate(-1)}>
                Previous
            </button>
        </div>
    );
};

export default BlogPage;
