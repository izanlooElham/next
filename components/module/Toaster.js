import { Toaster } from "react-hot-toast"

function Toast() {
  return (
    <Toaster
    toastOptions={{
     success: {
       style: {
         background: '#fff',
         color:'#686868'
       },
       iconTheme:{
         primary: 'green'
       },
       position:'	top-center',
       duration:'100'
     },
     error: {
       style: {
         background: '#fff',
         color:'#686868'
       },
       iconTheme:{
         primary: 'red'
       },
       position:'top-center',
       duration: '100'
     },
   }} />
  )
}

export default Toast