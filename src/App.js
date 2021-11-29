import React ,{useState ,useEffect}  from 'react';
//to loader
import DotLoader from 'react-spinners/DotLoader';

import Header from './components/Header';
import Content from './components/Content';

function App() {
  //to loader
  const [loading , setLoading] = useState(false);

    useEffect(()=>{
    setLoading( true );
    setTimeout(()=>{
      setLoading(false)
    },1000);

  },[]);

  return (
    <div>

     {

      loading ?<>
       <DotLoader color = {"#f6104c"} loading={loading} css='display: block; margin-top:20%; margin-left:50%;' size={50} />
      </>
      :
      <>
        <Header />
        <Content />
      </>
    }
    </div>
  );
}

export default App;
