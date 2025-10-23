

import { Outlet } from 'react-router-dom';

import CommonLayout from './layouts/commonLayout';



function App() {
 

  return (
    <>
      <div>
        <CommonLayout>
          <Outlet>
          </Outlet>
        </CommonLayout>
      </div>
    </>
  );
}

export default App;




