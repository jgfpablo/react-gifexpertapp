 import React, { useState } from 'react'
 import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';



 export default function GifExpertApp() {

  const [categories,setCategories] = useState(['One Punch Man']);


     return (
         <>
             <h2>GifExpertApp</h2>
             <AddCategory setCategories={setCategories} />
             <hr/>
           
             {
                 <ol>
                     {
                         categories.map((category,index) => {
                             return <GifGrid key={index} category={category}/>
                         })
                     }
                 </ol>
             }
         </>
     )
 }























// import React, { useState } from 'react'
// import AddCategory from './components/AddCategory'



// export default function GifExpertApp() {


// //  const categories = ['One Punch Man','Dragon Ball','Samurai X']

//  const [categories,setCategories] = useState(['One Punch Man','Dragon Ball','Samurai X']);


// // const handleAdd = () =>{
// //     // setCategories([...categories,'Inuyasha']);
// //     setCategories(categories => [...categories, 'HunterXHunter'])
// // }


//     return (
//         <>
//             <h2>GifExpertApp</h2>
//             <AddCategory setCategories={setCategories} />
//             <hr/>
//              {/* <button onClick={handleAdd} type="">Agregar</button> */}
//             {
//                 <ol>
//                     {
//                         categories.map(category => {
//                             return(<li key={category}>{ category}</li>)
//                         })
//                     }
//                 </ol>
//             }
//         </>
//     )
// }




