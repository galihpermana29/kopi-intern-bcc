import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

/*
   context itu seperti variabel global yang bisa digunakan pada semua component.
   caranya gampang, buat variabel misal

   const ContextContoh = createContext();
   
   jadi variabel ContextContoh berisi object dari hasil pembuatan context, yang didalamnya ada:
   
   1. provider = ini digunakan sebagai yang memberi value ke child dibawah bawahnya, makanya tag provider ini, digunakan untuk membungkus semua tag.

      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
         <Section1 />
      </AuthContext.Provider>

      perhatikan bahwa tag tersebut mengirimkan props value yang isinya object yang didalamnya ada authTokens dan setAuthTokens.

      props value tersebut bisa diakses dengan menggunakan consumer pada child yang berada dalam wrap provider itu.

      
   2. consumer

      function Section1(){
         return (
            <AuthContext.Consumer>
               {value => console.log(value)}
            </AuthContext.Consumer>
         )
      }

      consumer merupakan pengonsumsi apa yang provider sajikan. caranya seperti diatas.

      untuk mengakses props tanpa menggunakan consumer kita bisa tinggal menggunakan methode 
      useContext(),

      const ContohLagiContext = createContext();

      <ContohLagiContext.Provider value="anjay">
         <Sections />
      </ContohLagiContext.Provider>

      di Sections component
      function Sections (){
         const contoh = useContext(ContohLagiContext) 
         *dengan catatan import useContext, ContohLagiContext
      }

      !atau buat sebuah function yang mengotomatisasi pemanggil useContext.
      export const ContohLagiContext = createContext();

      export function useContextCustom(context){
         return useContext(context);
      }

      jadi pas manggilnya tinggal,

      function Sections (){
         const contoh = useContextCustom(ContohLagiContext) 
      }


*/