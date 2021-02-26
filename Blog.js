//Arreflo que contiene todos los post
let posts= []
//Creacion del orimer post
let post = 
    {
    autor: 'Marco',
    text: 'Este es el primer Blog.',
    fecha: 31/01/2022,
    categoria: ['general', 'F1'],
    }

    let post1 = 
    {
    autor: 'Karla',
    text: 'Este es el segundo Blog.',
    fecha: 5/02/2021,
    categoria: ['general', 'Musica'],
    }

    let post2 = 
    {
    autor: 'Raul',
    text: 'Este es el tercer Blog.',
    fecha: 24/02/2020,
    categoria: ['general', 'Programacion'],
    }
    
//Creacion de post
const addPost = params => {
    const { posts=[], autor, text, fecha, categoria} = params
    posts.push({autor, text, fecha, categoria});
    return posts
   }

//Editar post
const editPost = params => {
const { posts=[], autor, text, fecha, categoria, index} = params
posts[index]=({autor, text, fecha, categoria})
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

 //Ordenar posts
 const sortPosts = params => {
    const {posts = [], key} = params
    posts.sort(function (a,b,key = 'autor') {
        if (a[key] > b[key]) {
           return 1 
        }
        if (a[key] < b[key]) {
            return -1
        }
        return 0
    })
    return posts
    }    