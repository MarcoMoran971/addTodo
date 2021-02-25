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

//Editar post
const editPost = params => {
const { posts=[], autor, text, fecha, categoria, index} = params
posts[index]=([autor, text, fecha, categoria])
return posts
}

//Eliminar un post
const deletePost = params => {
    const { posts=[], index } = params
    delete posts[index]
    return posts
    }