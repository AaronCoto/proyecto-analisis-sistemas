import TablaAdmin from "./tablaAdmin";
import TablaFinanciero from "./tablaFinanciero";

export default function componente({ data,Login }){
    let x;
    if (Login[0].ROL==1) {
      return <TablaAdmin data={data} Login={Login}/>
    }else if(Login[0].ROL==3){
      return <TablaFinanciero data={data} Login={Login}/>
    }
    
  };