// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import BlogPage from './Blog';
// import './App.css';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/blog" component={BlogPage} />
//       </Switch>
//     </BrowserRouter>
//   );
// };

// export default App;






import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BlogPage from './Blog';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
