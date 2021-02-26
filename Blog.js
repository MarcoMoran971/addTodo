//Arreflo que contiene todos los post
let posts= []
//Creacion del orimer post
let post = 
    {
    autor: 'Marco',
    text: 'Este es el primer Blog.',
    fecha: Date(),
    categoria: ['general', 'F1'],
    }

    let post1 = 
    {
    autor: 'Karla',
    text: 'Este es el segundo Blog.',
    fecha: Date(),
    categoria: ['general', 'Musica'],
    }

    let post2 = 
    {
    autor: 'Raul',
    text: 'Este es el tercer Blog.',
    fecha: Date(),
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

 //Ordenar posts por autor
 const sortPostsAutor = params => {
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

     //Ordenar posts por fecha
 const sortPostsDate = params => {
    const {posts = [], key} = params

    posts.sort(function (date1,date2,key = 'fecha') {
        if (date1[key] > date2[key]) {
           return 1 
        }
        if (date1[key] < date2[key]) {
            return -1
        }
        return 0
    })
    return posts


    }   

    //Filtros de post
    const filterPosts = params => {
        const {posts = [], categoria = []} = params

        let postsCategories = [];
         for (let i = 0; i < posts.length; i++) {
           if (posts[i].categoria === posts.categoria[]) {
             postsCategories.push(posts[i]);
    }
}
console.log(postsCategories);

        return posts // Retornar el arreglo con las categorías
        }