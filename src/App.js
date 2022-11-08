
import { RouterProvider } from 'react-router-dom';

import { router } from './Routes/router';

function App() {
  return (
    <div className="bg-light">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
