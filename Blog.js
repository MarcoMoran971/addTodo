//Arreflo que contiene todos los post
let posts= []
//Creacion del orimer post
let post = 
    {
    autor: 'Marco',
    text: 'Este es el primer Blog.',
    fecha: 31/01/2021,
    categoria: ['general', 'F1'],
    }

    
//Creacion de post
const addPost = params => {
    const { posts=[], autor, text, fecha, categoria} = params
    posts.push([autor, text, fecha, categoria]);
    return posts
   }