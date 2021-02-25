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

    let post1 = 
    {
    autor: 'Karla',
    text: 'Este es el segundo Blog.',
    fecha: 31/01/2021,
    categoria: ['general', 'Musica'],
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

//Mostrar un post
    const getPost = params => {
        const {posts= [], index} = params
        console.log (posts[index])
        return posts
        }  