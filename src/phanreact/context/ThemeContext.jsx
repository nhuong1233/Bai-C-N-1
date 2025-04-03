// //1. tao ra context
// //2. cung cap context

// import { Children, createContext } from "react";

// export const Themcontext = createContext()

// function Provider({children}) {
    
//       const [theme, setTheme] = useState('light')
//       const handleChangeTheme = () =>{
//         setTheme(theme == 'light' ? 'dark':'light')
//       }
//       const value ={
//         theme,
//         handleChangeTheme
//       }
//       return(
//         <Themcontext.Provider value={value}>
//             {children}
//         </Themcontext.Provider>
//       )
// }
// export default Provider;