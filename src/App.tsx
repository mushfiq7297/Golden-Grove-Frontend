

import { Outlet } from 'react-router-dom';

import CommonLayout from './layouts/commonLayout';



function App() {
 

  return (
    <>
      <div>
        <CommonLayout>
          <div >
 <Outlet>
          </Outlet>
          </div>
         
        </CommonLayout>
      </div>
    </>
  );
}

export default App;




