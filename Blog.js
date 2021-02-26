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

 //Ordenar posts
 const sortPosts = params => {
    const {posts = [], key} = params
    // Lógica orden por fecha
    let sortedPostsByCreatedAt = posts.slice(0)
    sortedPostsByCreatedAt.sort(function(date1,date2){
        return date1.fecha - date2.fecha;
    })
    
    //Logica orden por nombre
    let sortedPostsByAuthor = posts.slice(0);
    sortedPostsByAuthor.sort(function(a,b) {
        let x = a.autor.toLowerCase();
        let y = b.autor.toLowerCase();
     return x < y ? -1 : x > y ? 1 : 0;
    });
     
    return posts // Retornar el arreglo ordenado
    }       